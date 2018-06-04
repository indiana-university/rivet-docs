/*
    swap vue.min out for vue if you need vue devtools
*/
// const Vue = require('vue/dist/vue');
const Vue = require('vue/dist/vue')
const VeeValidate = require('vee-validate')
Vue.use(VeeValidate);

const plugins = require('./plugins')
const polyfills = require('./polyfills')
const axios = require('axios')
const moment = require('moment');

/**
 * Initialize polyfils here.
 */

// Plolyfills to add functionality to IE.
polyfills.forEachPolyfill();
polyfills.promisePolyfill();


/**
 * Register global Vue filters
 */
Vue.filter('formatDate', (value) => {
    if (value) {
        value = value.toString();
        return moment(value, 'YYYY-MM-DDThh:mm:ss.SSSZ').fromNow();
    }
});

Vue.filter('capitalize', (value) => {
    if (!value) return '';
    value = value.toString();
    return value.charAt(0).toUpperCase() + value.slice(1);
});

const comparePublishDates = (a, b) => {
    a = moment(a.publishedDate);
    b = b.publishedDate;
    return a.isSame(b)
            ? 0
            : a.isBefore(b) ? 1 : -1;
}

/**
 * Main Vue.js Instance.
 */
new Vue({
    el: '#wrapper',
    components: {
        oneSearch: require('./components/one-search.vue'),
        searchForm: require('./components/search.vue'),
        notificationsMenu: require('./components/notifications-menu.vue'),
        notificationsCenter: require('./components/notifications-center.vue'),
        changelog: require('./components/changelog.vue'),
        addOns: require('./components/add-ons.vue')
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
        quarter: null,
        isFormSubmitted: false,
        supportFormFields: {
            name: '',
            email: '',
            description: '',
        },
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
            this.isDrawerOpen = !this.isDrawerOpen

            this.$nextTick(()=>{
                if(this.isDrawerOpen) {
                    let drawer = document.querySelector('.rvt-drawer')
                    // set the drawer height to the height of the page minus 70px for the header
                    drawer.style.height = (document.body.scrollHeight-70)+"px"
                }
            })
        },

        loadNotifications() {
            const apiURL = 'https://dcd-notifications.apps.iu.edu/notifications/search/byTenants?names=Rivet';
            this.loadingNotifications = true;
            axios.get(apiURL)
                .then(response => {
                    if(response.data._embedded && Array.isArray(response.data._embedded.notifications)) {
                        this.notifications = response.data._embedded.notifications;
                    } else {
                        this.errorLoadingNotifications = true;
                        console.log('Error loading notifications - API response must contain an array')
                    }
                    this.loadingNotifications = false;
                })
                .catch(e => {
                    this.notificationErrors.push(e);
                    this.errorLoadingNotifications = true;
                    this.loadingNotifications = false;
                })
        },

        clearNotifications() {
            this.notificationsLastViewedAt = moment();
            if(polyfills.localStorageAvailable()) {
                localStorage.setItem('notificationsLastViewedAt', this.notificationsLastViewedAt.format());
            }
        },
        focusFirstInvalidInput: function() {
            var fields = Object.values(this.errors.items);
            var firstField = fields[0];
            if(!firstField) {return false;}
            var input = document.querySelector('body [name='+firstField.field+']');
            if(input) {
                input.focus();
            }
        },
        resetSupportHandler: function() {
            this.isFormSubmitted = false;
            this.supportFormFields.description = ""
        },
        supportFormHandler: function() {
            this.$validator.validateAll()
            setTimeout(function() {
                if (this.errors.any()) {
                    this.focusFirstInvalidInput();
                    this.checkErrors = true;
                    return false;
                } else {
                    if(!this['supportFormFields']) {
                        return false;
                    }


                    this.isFormSubmitted = true;
                    var request = new XMLHttpRequest();
                    var data = new FormData();
                    for(var key in this['supportFormFields']) {
                        data.append(key, this['supportFormFields'][key]);
                    }


                    // send data to UXO
                    var request = new XMLHttpRequest();
                    request.open('POST', '/form-submit/support/index.php');
                    request.send(data);
                }
            }.bind(this), 200);

        },

    },
    created() {
        this.loadNotifications();

        this.notificationsLastViewedAt = plugins.getLastViewedAt();
    },
})

/**
 * One-off scripts for random sutff. See 'plugins.js'
 */

 // Third-party libraries
plugins.clipboardInit();

/**
 * Site-specific DOM scripting - Any DOM manipulation stuff
 * MUST come after the main Vue instance is initialized because
 * of Vue's virtal DOM implementation.
 */
plugins.createCopyright('#year');
plugins.copyButtonConfirm('[data-clipboard-target]', 1500);
plugins.setIndeterminate('#checkbox-indeterminate');

// Custom analytics event tracking
plugins.analyticsTracking();

console.log('Enjoy using Rivet and let us know if you have any questions!');

