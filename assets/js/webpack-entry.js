/*
    swap vue.min out for vue if you need vue devtools
*/
// const Vue = require('vue/dist/vue');
const Vue = require('vue/dist/vue.min')
const plugins = require('./plugins')
const polyfills = require('./polyfills')

/**
 * Initialize polyfils here.
 */

// Plolyfil for using forEach() array method on NodeLists in IE.
polyfills.forEachPolyfill();
polyfills.promisePolyfill();

/**
 * Main Vue.js Instance.
 */
new Vue({
    el: '#wrapper',
    components: {
        oneSearch: require('./components/one-search.vue'),
        searchForm: require('./components/search.vue')
    },
    data: {
        // Controls the toggle of the section nav menu on mobile
        navIsVisible: false,
        isDrawerOpen: false,
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
    mounted() {

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
plugins.createCopyright('year');
plugins.setIndeterminate('#checkbox-indeterminate');

// Custom analytics event tracking
plugins.analyticsTracking();

