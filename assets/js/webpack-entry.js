/*
    swap vue.min out for vue if you need vue devtools
*/
const Vue = require('vue/dist/vue');
// const Vue = require('vue/dist/vue.min')
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
        return moment(value, 'YYYYMMDD').fromNow();
    }
});

Vue.filter('capitalize', (value) => {
    if (!value) return '';
    value = value.toString();
    return value.charAt(0).toUpperCase() + value.slice(1);
});

/**
 * Main Vue.js Instance.
 */
new Vue({
    el: '#wrapper',
    components: {
        oneSearch: require('./components/one-search.vue'),
        searchForm: require('./components/search.vue'),
        notificationsMenu: require('./components/notifications-menu.vue'),
        notificationsCenter: require('./components/notifications-center.vue')
    },
    data: {
        // Controls the toggle of the section nav menu on mobile
        navIsVisible: false,
        isDrawerOpen: false,
        notifications: [],
        errors: [],
        loadingNotifications: false
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
        }
    },
    created() {
        /**
         * This is some placeholder data I created, but the structure
         * closesly resembles what the notifications API will give back
         * once it's ready.
         */
        let apiURL = 'https://api.myjson.com/bins/kl0dh';

        this.loadingNotifications = true;

        axios.get(apiURL)
            .then(response => {
                this.notifications = response.data;

                this.loadingNotifications = false;
            })
            .catch(e => {
                this.errors.push(e);

                console.log(this.errors);
            })
    },
})

/**
 * One-off scripts for random sutff. See 'plugins.js'
 */

 // Third-party libraries
plugins.clipboardInit();
plugins.tippyInit();

/**
 * Site-specific DOM scripting - Any DOM manipulation stuff
 * MUST come after the main Vue instance is initialized because
 * of Vue's virtal DOM implementation.
 */
plugins.createCopyright('#year');
plugins.setIndeterminate('#checkbox-indeterminate');

// Custom analytics event tracking
plugins.analyticsTracking();

console.log('Rivet 0.4.0 is ready!');

