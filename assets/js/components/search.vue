<template>
<form @submit.prevent="search" class="m-bottom-lg">
    <label for="search-input">Search docs</label>
    <input v-model="query" type="text" id="search-input">
    <button type="submit" class="u-v-hide">Search</button>
</form>
</template>

<script>
const http = require('axios');
const lunr = require('lunr');

module.exports = {
    data: function() {
        return {
            query: "",
            index: null
        }
    },
    methods: {
        search: function() {
            if(this.index) {
                var result = this.index.search(this.query)
                console.log(result);
            }
        }
    },
    mounted() {
        http.get('/lunr.json')
            .then((response) => {
                this.index = lunr(function() {
                    this.ref('uri')
                    this.field('content')
                    this.field('tags')
                    this.field('title')

                    response.data.forEach(function(doc) {
                        this.add(doc)
                    }, this)
                })
            })
            .catch(function(error) {
                console.log(error);
            });
    }
}
</script>
