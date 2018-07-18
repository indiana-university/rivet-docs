<template>
<div class="rvt-m-top-xl">
  <div class="rvt-container rvt-container--center rvt-container--junior">
    <nav @keyup="handleKeyup($event)" class="rvtd-navbar" aria-label="Add-ons tags">
      <ul class="rvtd-navbar__list rvt-plain-list rvt-display-flex" role="tablist">
        <li
          v-for="(filter, i) in uniqueTags"
          :key="i"
          class="rvtd-navbar__list-item"
        >
          <button
            @click.prevent="filterAddOns($event)"
            ref="navBar"
            :data-filter="filter"
            :aria-selected="currentTag === filter ? 'true' : 'false'"
            role="tab"
          >
            {{ filter }}
          </button>
        </li>
      </ul>
    </nav>
  </div>

  <div class="rvtd-subtle-wrapper">
    <div class="rvt-container rvt-container--center rvt-container--junior">
      <div class="rvt-display-flex rvt-vertical-center rvt-m-bottom-xl">
        <h2 class="rvt-ts-23 rvt-text-bold">{{ title }}</h2>
        <div class="rvtd-add-ons-cta">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
            <g fill="currentColor">
              <path d="M8,16a8,8,0,1,1,8-8A8,8,0,0,1,8,16ZM8,2a6,6,0,1,0,6,6A6,6,0,0,0,8,2Z"/>
              <path d="M8,12a1,1,0,0,1-1-1V8A1,1,0,0,1,9,8v3A1,1,0,0,1,8,12Z"/>
              <circle cx="8" cy="5" r="1"/>
            </g>
          </svg>
          <p class="rvt-m-left-xs rvt-m-top-remove rvt-m-bottom-remove rvt-m-right-sm">Have an idea for an add-on?</p>
          <a
            class="rvt-button rvt-button--subtle"
            href="https://github.com/indiana-university/rivet-add-on-boilerplate"
            target="_blank"
            rel="noopener"
          >
            Use this boilerplate
          </a>
        </div>
      </div>

      <ul class="rvt-grid rvt-plain-list">
        <li
          v-for="(addon, i) in filteredTags"
          :key="i"
          class="rvt-grid__item-4-md-up rvt-m-bottom-lg"
        >
          <a :href="addon.permalink" class="rvtd-card__wrapper-link">
            <div class="rvtd-card">
              <figure
                class="rvtd-thumbnail"
                :class="addon.tags[1] ? 'rvtd-thumbnail--' +  addon.tags[1].toLowerCase() : ''"
              >
                <img v-if="addon.thumbnail !== '<no value>'" :src="'../img/add-ons/' + addon.thumbnail" alt="">
                <img v-else :src="'../img/add-ons/add-on-placeholder.jpg'" alt="">
              </figure>
              <h3 class="rvtd-card__title">{{ addon.title }}</h3>
              <p class="rvtd-card__description">{{ addon.description }}</p>
              <div class="rvtd-card__meta">
                  <span
                    v-for="(tag, i) in addon.tags.slice(1)"
                    :key="i"
                    class="rvt-badge rvt-badge--secondary"
                  >
                    {{ tag }}
                  </span>
              </div>
            </div>
          </a>
        </li>
      </ul>
    </div>
  </div>
</div>
</template>

<script>
const axios = require('axios');

module.exports = {
  name: 'add-ons',
  data: function() {
    return {
      title: '',
      allAddOns: [],
      filteredTags: [],
      currentTag: "All"
    }
  },

  methods: {
    getAddOns() {
      axios.get('../add-ons/index.json')
        .then(response => {
          this.allAddOns = response.data;
          this.filteredTags = response.data;
        });
    },

    filterAddOns(event) {
      var currentFilter = event.target.getAttribute("data-filter");

      this.currentTag = currentFilter;

      var filteredTagsArr = this.allAddOns.filter(function(addOn) {
        return addOn.tags.indexOf(currentFilter) > -1;
      })

      this.filteredTags = filteredTagsArr;
      this.title = this.currentTag;
    },

    resetFilter: function() {
      this.filteredTags = this.allAddOns;
      this.currentTag = 'All';
    },

    handleKeyup($event) {
      let firstFilter = this.$refs.navBar[0];
      let lastFilter = this.$refs.navBar[this.$refs.navBar.length - 1];
      let currentFilter = $event.target;

      let nextFilter = this.$refs.navBar.indexOf(currentFilter) + 1;
      let previousFilter = this.$refs.navBar.indexOf(currentFilter) - 1;

      // Handle moving foucs based on up or down arrow key
      switch ($event.keyCode) {
        // Right arrow key
        case 39:

          if (this.$refs.navBar[nextFilter] === undefined) return;

          this.$refs.navBar[nextFilter].focus();

          break;
        // Right arrow key
        case 37:

          if (this.$refs.navBar[previousFilter] === undefined) return;

          this.$refs.navBar[previousFilter].focus();

          break;
      }
    }
  },

  computed: {
    uniqueTags() {
      allTags = [];

      this.allAddOns.forEach(function(addOn) {
        addOn.tags.forEach(function(tag) {
          allTags.push(tag);
        })
      })

      /**
       * This is a nice trick to return a unique array with all
       * duplicate items removed.
       *
       * http://mikeheavers.com/tutorials/removing_duplicates_in_an_array_using_javascript/
       */
      var uniqueTags = allTags.filter(function(tag, index) {
        return allTags.indexOf(tag) == index
      })

      return uniqueTags
    }
  },

  filters: {
    urlize(value) {
      return value.toLowerCase();
      // TODO: replace spaces with "-"
    }
  },

  mounted() {
    this.getAddOns();
    this.title = this.currentTag;
  }
}
</script>

<style>

</style>
