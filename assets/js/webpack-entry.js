/*
    swap vue.min out for vue if you need vue devtools
*/
// const Vue = require('vue/dist/vue');
const Vue = require('vue/dist/vue.min');


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

const Clipboard = require('clipboard')
new Clipboard('.rvtd-example__copy')


const tippy = require('tippy.js')
const tip = tippy('.rvtd-example__copy', {
    trigger: 'click',
    animation: 'fade',
    onShown: function () {
        setTimeout(() => { tip.hide(this) }, 1000)
    }
})

/**
 * forEach polyfill that will allow use to use the forEach method
 * on Arrays without destroying all of our JS in IE 11.
 *
 * https://github.com/imagitama/nodelist-foreach-polyfill/blob/master/index.js
 */
if (window.NodeList && !NodeList.prototype.forEach) {
    NodeList.prototype.forEach = function (callback, thisArg) {
        thisArg = thisArg || window;
        for (var i = 0; i < this.length; i++) {
            callback.call(thisArg, this[i], i, this);
        }
    };
}

// analytics event tracking
if(window.telemetrics) {
    let eventTriggers = document.querySelectorAll('[data-analytics-action]');
    eventTriggers.forEach(trigger => {
        let action = trigger.dataset.analyticsAction
        let category = trigger.dataset.analyticsCategory ? trigger.dataset.analyticsCategory : 'click'
        let label = trigger.dataset.analyticsLabel ? trigger.dataset.analyticsLabel : trigger.href
        trigger.addEventListener('click', e => {
            window.telemetrics(category, action, label)
        })
    })
}

/**
 * Wrapping this little one-offs in IIFEs to keep them contained
 */

/**
 * Dynamic copyright for footer.
 */
(function() {
    var year = document.getElementById('year');

    // The span with 'year' id should be on every page, but just in case...s
    if (year == null) return;

    var currentYear = new Date().getFullYear();

    year.innerHTML = currentYear;
})();


/**
 * Interterminate checkbox demo
 */
(function() {
    var indCheck = document.querySelector('#checkbox-indeterminate');
    // If its not the checkbox docs page bail.
    if (indCheck == null) return;
    // Set the demo checkbox.
    indCheck.indeterminate = true;
})();

