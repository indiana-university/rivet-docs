/*
    swap vue.min out for vue if you need vue devtools
*/
const Vue = require('vue/dist/vue');
// const Vue = require('vue/dist/vue.min');


new Vue({
    el: '#wrapper',
    components: {
        searchForm: require('./components/search.vue')
    },
    mounted() {

    }
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
 * Section Subnav menu
 */
const Subnav = (function() {

    const subnavTrigger = document.querySelector('.rvtd-sidebar__nav-toggle');
    const subnavEl = document.querySelector('.rvtd-nav');

    var init = function() {
        subnavTrigger.addEventListener('click', function() {
            toggleBtnState(this);
            toggleHiddenState(subnavEl);
        });
    }

    var toggleBtnState = function (buttonEl) {
        var isExpanded = buttonEl.getAttribute('aria-expanded') === 'true' || false;
        buttonEl.setAttribute('aria-expanded', !isExpanded);
    }

    var toggleHiddenState = function (itemToToggle) {
        var itemState = itemToToggle.getAttribute('aria-hidden') === 'true' || false;
        itemToToggle.setAttribute('aria-hidden', !itemState);
    }

    return {
        init: init
    }

})();

Subnav.init();
