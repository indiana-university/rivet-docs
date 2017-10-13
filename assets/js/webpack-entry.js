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
