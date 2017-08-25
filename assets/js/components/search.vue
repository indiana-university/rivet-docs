<template>
    <form @submit.prevent="searchDocs">
        <label for="search-input" class="sr-only">Search docs</label>
        <input v-model="searchInput" type="text" id="search-input">
    </form>
</template>

<script>
    module.exports = {
        data: function() {
            return {
                searchInput: ""
            }
        },
        methods: {
            searchDocs: function () {
                // https://www.npmjs.com/package/axios
                console.log("probably use axios for ajax")

                /*
                axios.get('/api/docs', {
                    params: {
                      query: this.searchInput
                    }
                  })
                  .then(function (response) {
                    // if using $.emit for results or update vuex store
                    console.log(response);
                  })
                  .catch(function (error) {
                    // build a better API
                    console.log(error);
                  });
                */
            }
        }
    }
</script>
