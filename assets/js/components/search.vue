<template>
    <form @submit.prevent="search" class="m-bottom-lg">
        <label for="search-input">Search docs</label>
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
            search: function () {
                //https://www.npmjs.com/package/axios
                console.log("probably use axios for ajax")
            }
        }
    }
</script>
