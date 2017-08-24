<template>
<div class="rvtd-search m-left-lg">
    <form @submit.prevent="search" class="rvtd-search__form">
        <label class="sr-only" for="search-input">Search query</label>
        <div class="rvt-combo-input">
            <input v-model="query" type="text" id="search-input" autocomplete="off">
            <button type="submit">Search</button>
        </div>
    </form>
    <div v-if="results.length" class="rvtd-search__results">
        <h2 class="sr-only">Search results</h2>
        <div v-for="result in results" class="rvtd-search__result">
            <h3 class="rvtd-search__result-title">
                <a :href="result.uri">
                    {{result.title}}
                </a>
            </h3>

            <div class="rvtd-search__result-body">{{result.preview}}</div>
        </div>
    </div>
</div>
</template>

<script>
const http = require('axios')
const lunr = require('lunr')
const marked = require('marked');

module.exports = {
    data: function() {
        return {
            query: "",
            documents: null,
            index: null,
            matchesInIndex: null,
            results: []
        }
    },
    methods: {
        search() {
            if (this.index) {
                try {
                    this.matchesInIndex = this.index.search(this.query)
                } catch (e) {
                    if (e instanceof lunr.QueryParseError) {
                        this.displayQueryError(this.query, e)
                        return
                    } else {
                        throw e
                    }
                }
                this.results = this.index.search(this.query)
            }
        },
        displayQueryError(q, e) {
            console.log("query error")
            console.log(q)
            console.log(e)
        }
    },
    mounted() {
        http.get('site-index.json')
            .then((response) => {
                this.index = lunr(function() {
                    this.ref('uri')
                    this.field('title')
                    this.field('content')
                    this.field('tags')
                    this.field('rawContent')
                    this.field('description')

                    response.data.forEach((doc) => {
                        this.add(doc)
                    })
                })
                let corpus = response.data
                this.documents = corpus.reduce(function(memo, doc) {
                    memo[doc.uri] = doc
                    return memo
                }, {})
            })
            .catch(function(error) {
                // if there was an error it may be a path issue. Let's try the root
                http.get('/site-index.json')
                .then((response) => {
                    this.index = lunr(function() {
                        this.ref('uri')
                        this.field('title')
                        this.field('content')
                        this.field('tags')
                        this.field('rawContent')

                        response.data.forEach((doc) => {
                            this.add(doc)
                        })
                    })
                    let corpus = response.data
                    this.documents = corpus.reduce(function(memo, doc) {
                        memo[doc.uri] = doc
                        return memo
                    }, {})
                })
                console.log(error)
            })
    },
    watch: {
        matchesInIndex() {
            let regexQuery = new RegExp(this.query)
            let previewLength = 144
            this.results = this.matchesInIndex.map((result) => {
                let document = this.documents[result.ref]

                if(document.description) {
                    document.preview = document.description
                } else {
                    // ugh...
                    let start = 0
                    let firstOccurence = document.rawContent.search(regexQuery)   // find the first whitespace after 144 characters
                    if(firstOccurence > 0 && firstOccurence > (previewLength/2)) {
                        start = firstOccurence - previewLength/2
                        start = document.rawContent.indexOf(' ', start)
                        end = firstOccurence + previewLength/2
                        endOnWhitespace = document.rawContent.indexOf(' ', end)
                        end = endOnWhitespace==-1 ? end : endOnWhitespace
                    } else {
                        start = 0
                        end = previewLength
                    }
                    document.preview = document.rawContent.substring(start, end)
                    if(start!=0) {
                        document.preview = "..."+document.preview
                    }
                    if(end < document.rawContent.length) {
                        document.preview = document.preview+"..."
                    }
                }
                return document
            })
        }
    }
}
</script>
