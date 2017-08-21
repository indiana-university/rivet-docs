const Vue = require('vue/dist/vue');

new Vue({
    el: '#wrapper',
    components: {
        searchForm: require('./components/search.vue')
    }
})
