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
        navIsVisible: false
    },
    methods: {
        // Toggles the visibility of the section nav on mobile
        toggleNav: function() {
            this.navIsVisible = !this.navIsVisible;
        }
    },
    mounted() {

    },
    watch: {
        navIsVisible(isVisible) {
            if(isVisible) {
                drawer = document.querySelector('.rvt-drawer')
                // set the drawer height to the height of the page minus 70px for the header
                drawer.style.height = (document.body.scrollHeight-70)+"px"
            }
        }
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
