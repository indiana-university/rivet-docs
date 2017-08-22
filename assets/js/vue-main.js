/*
    swap vue.min out for vue if you need vue devtools
*/
// const Vue = require('vue/dist/vue');
const Vue = require('vue/dist/vue.min');

new Vue({
    el: '#wrapper',
    components: {
        searchForm: require('./components/search.vue')
    },
    mounted() {

    }
})
