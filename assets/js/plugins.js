const tippy = require('tippy.js')
const Clipboard = require('clipboard')
const localStorageAvailable = require('./polyfills').localStorageAvailable;
const moment = require('moment')

module.exports = {
    getLastViewedAt() {
        if(localStorageAvailable()) {
            const storedDate = moment(localStorage.getItem('notificationsLastViewedAt'));
            if(storedDate.isValid()) {
                 return storedDate;
            }
        }

        return null;
    },

    /**
     *
     * @param {String} el
     * Accepts a CSS selector where date gets injected on the client.
     */
    createCopyright(el) {
        let year = document.querySelector(el);
        if (year == null) return;
        let currentYear = new Date().getFullYear();
        year.innerHTML = currentYear;
    },

    /**
     *
     * @param {String} checkEl
     * Accepts a CSS selector
     */
    setIndeterminate(checkEl) {
        let indCheck = document.querySelector(checkEl);
        // If its not the checkbox docs page bail.
        if (indCheck == null) return;
        // Set the demo checkbox.
        indCheck.indeterminate = true;
    },

    tippyInit() {
        /**
         * Initialize tooltip library
         */
        const tip = tippy('.rvtd-example__copy', {
            trigger: 'click',
            animation: 'fade',
            onShown: function () {
                setTimeout(() => { tip.hide(this) }, 1000)
            }
        })
    },

    clipboardInit() {
        /**
         * Initialize copy to clipboard functionality for code snippets
         */
        new Clipboard('.rvtd-example__copy')
    },

    analyticsTracking() {
        // analytics event tracking
        if (window.telemetrics) {
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
    }
}


