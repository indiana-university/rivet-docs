<template>
<div>
<div class="rvt-container rvt-container--center rvt-container--junior">
  <nav @keyup="handleKeyup($event)" class="rvtd-navbar" aria-label="Add-ons tags">
    <ul class="rvtd-navbar__list rvt-plain-list rvt-display-flex">
      <li
        v-for="(filter, i) in uniqueTags"
        :key="i"
        class="rvtd-navbar__list-item"
      >
        <button
          @click="filterAddOns($event)"
          ref="navBar"
          :data-filter="filter"
          :aria-selected="currentTag === filter ? 'true' : 'false'"
          role="button"
        >
          {{ filter }}
        </button>
      </li>
    </ul>
  </nav>
</div>

<div class="rvtd-subtle-wrapper">
  <div class="rvt-container rvt-container--center rvt-container--junior">
    <h2 class="rvt-ts-23 rvt-text-bold rvt-m-bottom-xl">{{ title }}</h2>
    <ul class="rvt-grid rvt-plain-list">
      <li
        v-for="(addon, i) in filteredTags"
        :key="i"
        class="rvt-grid__item-4-md-up rvt-m-bottom-lg"
      >
        <a :href="addon.permalink" class="rvtd-card__wrapper-link">
          <div class="rvtd-card">
            <figure
              class="rvtd-thumbnail "
              :class="addon.tags[1] ? 'rvtd-thumbnail--' +  addon.tags[1].toLowerCase() : ''">
              <img :src="'../img/add-ons/' + addon.thumbnail" alt="">
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
      title: 'All Add-ons',
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
    },

    resetFilter: function() {
      this.filteredTags = this.allAddOns;
      this.currentTag = 'All';
    },

    handleKeyup(event) {
      console.log(this.$refs.navBar);
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
  }
}
</script>

<style>

</style>
