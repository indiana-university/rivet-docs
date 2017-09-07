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
