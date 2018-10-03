<template>
<div class="rvtd-search">
  <form @submit.prevent="search">
    <label for="search-input" class="rvt-sr-only">Search</label>
    <div class="rvt-input-group rvt-p-all-md">
        <input class="rvt-input-group__input" v-model="query" type="search" id="search-input" autocomplete="off" placeholder="Search the docs" ref="search-input">
        <div class="rvt-input-group__append">
            <div class="rvt-button-segmented">
              <button class="rvt-button rvtd-search__submit" type="submit" aria-label="Submit search">
                <span class="rvt-sr-only">Submit search</span>
                <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                  <path fill="currentColor" d="M15.71,14.29,10.89,9.47a6,6,0,1,0-1.42,1.42l4.82,4.82a1,1,0,0,0,1.42,0A1,1,0,0,0,15.71,14.29ZM6,10a4,4,0,1,1,4-4A4,4,0,0,1,6,10Z"/>
                </svg>
              </button>
              <slot></slot>
            </div>
        </div>
    </div>
  </form>
  <div v-if="results.length" class="rvtd-search__results">
    <div class="rvtd-search__results-header" v-if="results.length > resultsPerPage">
      <nav role="navigation" aria-label="Search result pages">
        <ul class="rvt-pagination rvt-pagination--small">
          <li :class="'rvt-pagination__item ' + (currentPage==0 ? 'is-disabled' : '')">
            <a
              href="javascript:void(0)"
              aria-label="Previous page"
              @click='gotoPage(currentPage-1)'
              :tabindex="(currentPage==0?'-1':'0')">
              Previous
            </a>
          </li>
          <li
            v-for="(pageNumber, i) in pages"
            :key="i"
            :class="'rvt-pagination__item ' + (pageNumber-1==currentPage ? 'is-active': '')"
            :aria-current="(pageNumber-1==currentPage?'true':'')"
          >
            <a href="javascript:void(0)" :aria-label="'Page '+pageNumber" @click='gotoPage(pageNumber-1)'>{{pageNumber}}</a>
          </li>
          <li :class="'rvt-pagination__item ' + (currentPage==pages-1 ? 'is-disabled' : '')">
            <a
              href="javascript:void(0)"
              aria-label="Next page"
              @click='gotoPage(currentPage+1)'
              :tabindex="(currentPage==pages-1?'-1':'0')">
              Next
            </a>
          </li>
        </ul>
      </nav>
      <button v-if="activeQuery!=''" class="rvtd-search__cancel rvt-button rvt-button--small rvt-button--plain" @click.prevent="clearSearch">
        <span class="v-hide">Clear search</span>
        <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
          <path fill="currentColor" d="M9.41,8l5.29-5.29a1,1,0,0,0-1.41-1.41L8,6.59,2.71,1.29A1,1,0,0,0,1.29,2.71L6.59,8,1.29,13.29a1,1,0,1,0,1.41,1.41L8,9.41l5.29,5.29a1,1,0,0,0,1.41-1.41Z"/>
        </svg>
      </button>
    </div>
    <div
      v-for="(result, i) in currentPageOfResults"
      :key="i"
      class="rvtd-search__result rvt-m-top-sm"
    >
      <h3 class="rvtd-search__result-title">
        <a :href="baseURL + result.uri" @click="trackClick(baseURL + result.uri)">
          {{result.title}}
        </a>
      </h3>
      <div class="rvtd-search__result-body">{{result.preview}}</div>
    </div>

    <div class="rvtd-search__results-found">Found {{results.length}} {{results.length|pluralizeResult}} for <strong>{{activeQuery}}</strong></div>

    <div class="rvtd-search__results-footer rvt-m-top-sm">
      <p>Is something missing? <a :href="'https://github.iu.edu/UITS/rivet-docs-source/issues/new?title='+activeQuery">Open an issue</a> on GitHub (requires an IU account).</p>
    </div>
  </div>
  <div v-if="activeQuery!='' && results.length==0" class="rvtd-search__results rvtd-search__results--none">
    <div class="rvtd-search__results-found rvt-m-top-sm rvt-m-bottom-sm">
      Your search for <strong class="rvtd-search__no-results-term">{{activeQuery}}</strong> returned no results.
    </div>
    <div class="rvtd-search__results-footer">
      <p>Is something missing? <a :href="'https://github.iu.edu/UITS/rivet-docs-source/issues/new?title='+activeQuery">Open an issue</a> on GitHub (requires an IU account).</p>
    </div>
  </div>
</div>
</template>

<script>
const http = require("axios");
const lunr = require("lunr");
const marked = require("marked");
const debounce = require("lodash/debounce");

const resultsPerPage = 5;
const maxPages = 5;

module.exports = {
  computed: {
    pages() {
      let nPages = Math.ceil(this.results.length / resultsPerPage);
      return nPages > maxPages ? maxPages : nPages;
    },
    currentPageOfResults() {
      return this.results.slice(
        this.currentPage * resultsPerPage,
        this.currentPage * resultsPerPage + resultsPerPage
      );
    }
  },
  data: function() {
    return {
      query: "",
      activeQuery: "",
      documents: null,
      index: null,
      matchesInIndex: [],
      results: [],
      currentPage: 0,
      resultsPerPage: resultsPerPage,
      debouncedSearch: null,
      baseURL: baseURL
    };
  },
  filters: {
    pluralizeResult(n) {
      return n > 1 ? "results" : "result";
    }
  },
  methods: {
    search() {
      if (this.index && this.query != this.activeQuery) {
        this.currentPage = 0;
        this.activeQuery = this.query;
        try {
          this.matchesInIndex = this.index.search(this.activeQuery);
        } catch (e) {
          if (e instanceof lunr.QueryParseError) {
            this.handleQueryError(this.query, e);
            return;
          }
        }

        this.$nextTick(() => {
          if (window.telemetrics) {
            window.telemetrics(
              "search",
              "search",
              this.activeQuery + " (" + this.results.length + " results)",
              this.results.length
            );
          }
        });
      }
    },
    clearSearch() {
      this.query = "";
      this.activeQuery = "";
      this.$refs["search-input"].focus();
    },
    handleQueryError(q, e) {
      console.error(e);
    },
    gotoPage(pageNumber) {
      if (pageNumber < 0) {
        pageNumber = 0;
      }
      if (pageNumber > this.pages - 1) {
        pageNumber = this.pages - 1;
      }
      this.currentPage = pageNumber;
    },
    trackClick(url) {
      if (window.telemetrics) {
        window.telemetrics(
          "search",
          "result click",
          this.activeQuery + " : " + url
        );
      }
    }
  },
  mounted() {
    this.debouncedSearch = debounce(this.search, 1000);
    http
      .get(baseURL + "site-index.json")
      .then(response => {
        this.index = lunr(function() {
          this.ref("uri");
          this.field("title");
          this.field("content");
          this.field("tags");
          this.field("rawContent");
          this.field("description");

          response.data.forEach(doc => {
            this.add(doc);
          });
        });
        let corpus = response.data;
        this.documents = corpus.reduce(function(memo, doc) {
          memo[doc.uri] = doc;
          return memo;
        }, {});
      })
      .catch(function(error) {
        console.log(error);
      });
  },
  watch: {
    query() {
      if (this.query == "") {
        this.activeQuery = "";
        this.matchesInIndex = [];
      }
      //debounce and call search
      this.debouncedSearch();
    },
    matchesInIndex() {
      let regexQuery = new RegExp(this.query);
      let previewLength = 144;
      this.results = this.matchesInIndex.map(result => {
        let document = this.documents[result.ref];

        if (document.description) {
          document.preview = document.description;
        } else {
          // ugh...
          let start = 0;
          let firstOccurence = document.rawContent.search(regexQuery); // find the first whitespace after 144 characters
          if (firstOccurence > 0 && firstOccurence > previewLength / 2) {
            start = firstOccurence - previewLength / 2;
            start = document.rawContent.indexOf(" ", start);
            end = firstOccurence + previewLength / 2;
            endOnWhitespace = document.rawContent.indexOf(" ", end);
            end = endOnWhitespace == -1 ? end : endOnWhitespace;
          } else {
            start = 0;
            end = previewLength;
          }
          document.preview = document.rawContent.substring(start, end);
          if (start != 0) {
            document.preview = "..." + document.preview;
          }
          if (end < document.rawContent.length) {
            document.preview = document.preview + "...";
          }
        }
        return document;
      });
    }
  }
};
</script>
