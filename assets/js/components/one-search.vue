<template>
<form class="one-search" @submit.prevent="search">
    <label for="one-search" class="sr-only">Search One.IU</label>
    <input type="text" name="one-search" id="one-search" value="**QUERY**" autocomplete="off" placeholder="Search One.IU" v-model="query">
    <button class="sr-only" tabindex="-1">Search</button>
    <div class="one-search__logo" aria-hidden="true">
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 34 34">
            <title>One Icon</title>
            <path d="M0,0V34H34V0ZM10,29H6V5h4Z" fill="#dc0031"/>
        </svg>
    </div>
    <div class="one-search__search-icon" aria-hidden="true">
        <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 23 23">
            <title>Search icon</title>
            <g>
                <circle cx="9" cy="9" r="7.55" fill="none" stroke="#b6b4b6" stroke-linecap="round" stroke-miterlimit="10" stroke-width="3"/>
                <line x1="15" y1="15" x2="21" y2="21" fill="none" stroke="#b6b4b6" stroke-linecap="round" stroke-miterlimit="10" stroke-width="3"/>
            </g>
        </svg>
    </div>
    <div v-if="isShowingResults" class="one-search__results">
        <button class="one-search__clear-button button--plain" @click.prevent="clearSearch">
            <span class="v-hide">Clear search</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 16 16">
                <path d="M10,8l5.63-5.63a1.39,1.39,0,0,0-2-2L8,6,2.37.41a1.39,1.39,0,0,0-2,2L6,8,.41,13.63a1.39,1.39,0,1,0,2,2L8,10l5.63,5.63a1.39,1.39,0,0,0,2-2Z" style="fill: rgb(51, 51, 51);"></path>
            </svg>
        </button>

        <span class="one-search__results-label">Found {{results.length}} {{results.length|pluralizeResult}} for <strong>{{activeQuery}}</strong></span>
        <ul v-if="results.length > 0">
            <li v-for="result in results">
                <a :href="result._links.launch.href.length>0 ? result._links.launch.href : result._links.page.href" target=_blank>{{result.title}}</a>
            </li>
        </ul>
    </div>
</form>
</template>

<script>
var maxResults = 5;
var oneApiUrl = '/form-submit/one-iu/?size=' + maxResults;

module.exports = {
    computed: {
        moreResultsUrl: function() {
            return "https://one.iu.edu?q=" + this.query;
        }
    },
    data: function() {
        return {
            results: [],
            totalResults: 0,
            query: '',
            activeQuery: '',
            isShowingResults: false
        }
    },
    filters: {
        pluralizeResult(n) {
            return n == 1 ? 'result' : 'results'
        }
    },
    methods: {
        search: function() {
            this.clearResults();
            this.activeQuery = this.query;
            var request = new XMLHttpRequest();
            request.open('GET', oneApiUrl + '&q=' + this.activeQuery);
            request.onreadystatechange = () => {
                this.isShowingResults = true;
                if (request.readyState === XMLHttpRequest.DONE) {
                    if (request.status === 200) {
                        /* parse the response from One.IU */
                        var response = JSON.parse(request.responseText);

                        if (response.page.totalElements > 0) {
                            this.results = response._embedded.tasks;
                            this.totalResults = response.page.totalElements;
                        }
                    } else {
                        console.log(request)
                    }
                }
            };
            request.send();
        },
        clearSearch: function() {
            this.query = '';
            this.activeQuery = '';
            this.clearResults();
        },
        clearResults: function() {
            this.results = [];
            this.totalResults = 0;
            this.isShowingResults = false;
        }
    }
}
</script>
