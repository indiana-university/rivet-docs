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
        }
    }
</script>
