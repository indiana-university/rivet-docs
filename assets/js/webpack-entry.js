/**
 * Copyright (C) 2018 The Trustees of Indiana University
 * SPDX-License-Identifier: BSD-3-Clause
 */

/*
    swap vue.min out for vue if you need vue devtools
*/
const Vue = require("vue/dist/vue.min");

const plugins = require("./plugins");
const polyfills = require("./polyfills");
const axios = require("axios");
const moment = require("moment");

/**
 * Initialize polyfils here.
 */

// Plolyfills to add functionality to IE.
polyfills.forEachPolyfill();
polyfills.promisePolyfill();

/**
 * Register global Vue filters
 */
Vue.filter("formatDate", value => {
  if (value) {
    value = value.toString();
    return moment(value, "YYYY-MM-DDThh:mm:ss.SSSZ").fromNow();
  }
});

Vue.filter("capitalize", value => {
  if (!value) return "";
  value = value.toString();
  return value.charAt(0).toUpperCase() + value.slice(1);
});

const comparePublishDates = (a, b) => {
  a = moment(a.publishedDate);
  b = b.publishedDate;
  return a.isSame(b) ? 0 : a.isBefore(b) ? 1 : -1;
};

/**
 * Main Vue.js Instance.
 */
new Vue({
  el: "#wrapper",
  components: {
    searchForm: require("./components/search.vue"),
    notificationsMenu: require("./components/notifications-menu.vue"),
    notificationsCenter: require("./components/notifications-center.vue"),
    changelog: require("./components/changelog.vue"),
    addOns: require("./components/add-ons.vue")
  },
  data: {
    // Controls the toggle of the section nav menu on mobile
    navIsVisible: false,
    isDrawerOpen: false,
    notifications: [],
    notificationErrors: [],
    loadingNotifications: false,
    errorLoadingNotifications: false,
    notificationsLastViewedAt: null,
    quarter: null
  },
  methods: {
    // Toggles the visibility of the section nav on mobile
    toggleNav: function() {
      this.navIsVisible = !this.navIsVisible;
    },

    // Listener for drawer toggle in header
    // Note: drawer show/hide is handled in Rivet js
    // this is an additional listener to set the height of the drawer when it is opened
    toggleDrawer() {
      this.isDrawerOpen = !this.isDrawerOpen;

      this.$nextTick(() => {
        if (this.isDrawerOpen) {
          let drawer = document.querySelector(".rvt-drawer");
          // set the drawer height to the height of the page minus 70px for the header
          drawer.style.height = document.body.scrollHeight - 70 + "px";
        }
      });
    },

    loadNotifications() {
      const apiURL =
        "https://dcd-notifications.apps.iu.edu/notifications/search/byTenants?names=Rivet";
      this.loadingNotifications = true;
      axios
        .get(apiURL)
        .then(response => {
          if (
            response.data._embedded &&
            Array.isArray(response.data._embedded.notifications)
          ) {
            this.notifications = response.data._embedded.notifications;
          } else {
            this.errorLoadingNotifications = true;
            console.log(
              "Error loading notifications - API response must contain an array"
            );
          }
          this.loadingNotifications = false;
        })
        .catch(e => {
          this.notificationErrors.push(e);
          this.errorLoadingNotifications = true;
          this.loadingNotifications = false;
        });
    },

    clearNotifications() {
      this.notificationsLastViewedAt = moment();
      if (polyfills.localStorageAvailable()) {
        localStorage.setItem(
          "notificationsLastViewedAt",
          this.notificationsLastViewedAt.format()
        );
      }
    },
  },

  created() {
    this.loadNotifications();

    this.notificationsLastViewedAt = plugins.getLastViewedAt();
  }
});

/**
 * One-off scripts for random sutff. See 'plugins.js'
 */

// Third-party libraries
plugins.clipboardInit();

/**
 * Site-specific DOM scripting - Any DOM manipulation stuff
 * MUST come after the main Vue instance is initialized because
 * of Vue's virtual DOM implementation.
 */
plugins.createCopyright("#year");
plugins.copyButtonConfirm("[data-clipboard-target]", 1500);
plugins.setIndeterminate("#checkbox-indeterminate");
plugins.stickySupportForm();

// Custom analytics event tracking
plugins.analyticsTracking();

console.log("Enjoy using Rivet and let us know if you have any questions!");

/**
 * Notifications
 */

(function() {
  const notificationsApi =
    "https://dcd-notifications.apps.iu.edu/notifications/search/byTenants?names=Rivet";

  const notificationsContainer =
    document.getElementById('notifications-center');

  if (!notificationsContainer) return;

  function formatDate(value) {
    const date = new Date(value);

    return date.toLocaleString('en-us', {
      day: '2-digit',
      month: 'short',
      year: 'numeric'
    });
  }

  function displayNotifications(data) {
    return data.map(item => {
      return `
        <li class="rvtd-notification">
          <time class="rvtd-notification__meta rvt-text-uppercase rvt-text-bold rvt-ts-12 rvt-m-bottom-xs">
            ${formatDate(item.liveAt)}
          </time>
          <div class="rvtd-notification__body">
            <h2 class="rvt-ts-18">
              <a href="${item.url}">${item.title}</a>
            </h2>
            <p>${item.description}</p>
          </div>
        </li>
      `;
    })
    .join('');
  }

  axios.get(notificationsApi)
    .then(response => {
      const allNotifications =
        response.data._embedded.notifications;

      const notificationsList = document.createElement('ol');

      notificationsList.classList.add('rvt-plain-list');

      notificationsList.innerHTML =
        displayNotifications(allNotifications);

      notificationsContainer.appendChild(notificationsList);
    });
})();
