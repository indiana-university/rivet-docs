<template>
  <section class="rvtd-changelog" id="changelog">
    <div class="rvt-container rvt-container--junior rvt-container--center">
      <h1 class="rvtd-section__title m-bottom-xxl">Changelog</h1>
      <transition name="rvt-fade" mode="out-in">
        <div class="rvtd-changelog__list">
          <div class="rvt-grid m-top-xxl" v-if="new Date(release.created_at) > new Date('2018-01-01') && releases.length > 0" v-for="(release, index) in releases" :key="release.id">
            <div class="rvt-grid__item-3-md-up">
              <div class="rvtd-changelog__version" :class="{'ts-23':index>0}">Rivet {{ version(release.tag_name) }}</div>
              <div class="rvtd-changelog__date rvt-m-bottom-xl rvt-m-top-xs">{{ release.published_at | formatDate }}</div>
              <a v-if="index==0" href="https://github.iu.edu/UITS/rivet/archive/master.zip" class="rvt-button rvt-button--bright-blue rvtd-changelog__download">
                <svg style="margin-right: 10px" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                  <title>Download</title>
                  <g fill="currentColor">
                    <path d="M14.25,11a1,1,0,0,0-1,1v1H2.75V12a1,1,0,0,0-2,0v1.75A1.25,1.25,0,0,0,2,15H14a1.25,1.25,0,0,0,1.25-1.25V12A1,1,0,0,0,14.25,11Z"/>
                    <path d="M7.29,10.71a1,1,0,0,0,1.41,0l4-4a1,1,0,0,0-1.41-1.41L9,7.59V1A1,1,0,0,0,7,1V7.59L4.71,5.29A1,1,0,0,0,3.29,6.71Z"/>
                  </g>
                </svg>
                Download {{ version(release.tag_name) }}
              </a>
            </div>
              <div class="rvt-grid__item-4-md-up rvtd-changelog__overview">
                <div class="rvtd-changelog__section-title" v-if="release.body">Overview</div>
                <div v-html="overview(release.body)"></div>
              </div>
              <div class="rvt-grid__item-4-md-up rvt-grid__item--last rvtd-changelog__details" v-if="release.pulls.items.length > 0">
                <div class="rvtd-changelog__section-title">Details</div>

                <ul>
                  <li v-for="(detail, detailIndex) in release.pulls.items" v-if="showAllDetails[index] || detailIndex<5" :key="detailIndex">{{ detail.title }}</li>
                </ul>

                <p class="rvtd-changelog__view-all-details" v-if="release.pulls.items.length > 5 && !showAllDetails[index]">
                  <button class="rvt-button rvt-button--small rvt-button--secondary rvt-button--reverse" @click.prevent="showDetails(index)" >Show All +</button>
                </p>
              </div>
          </div>

          <div class="rvt-loading" v-if="loadingReleases">
            <template v-for="n in 6">
              <div class="rvt-grid m-top-xxl" :key="n">
                <div class="rvt-grid__item-3-md-up"><div class="rvt-loading__fake-version">&nbsp;</div></div>
                <div class="rvt-grid__item-4-md-up rvtd-changelog__overview"><div class="rvt-loading__fake-overview">&nbsp;</div></div>
                <div class="rvt-grid__item-4-md-up rvtd-changelog__details"><div class="rvt-loading__fake-details">&nbsp;</div></div>
              </div>
            </template>
          </div>
          <div v-else-if="errorLoadingReleases" class="rvt-notifications-error" style="background-color:transparent">
            <div class="rvt-notifications-error__icon">
              <svg role="img" alt="" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 16 16">
                <g fill="currentColor">
                  <path d="M8,16a8,8,0,1,1,8-8A8,8,0,0,1,8,16ZM8,2a6,6,0,1,0,6,6A6,6,0,0,0,8,2Z"/>
                  <path d="M8,9A1,1,0,0,1,7,8V5A1,1,0,0,1,9,5V8A1,1,0,0,1,8,9Z"/>
                  <circle cx="8" cy="11" r="1"/>
                </g>
              </svg>
            </div>
            <p class="rvt-notifications-error__text">There was an error connecting to GitHub.</p>
            <p><a class="button" href=".">Reload</a></p>
          </div>
          <div class="rvtd-changelog__cta">
            <a class="rvt-button rvt-button--bright-blue" href="https://github.iu.edu/UITS/rivet-source/releases">View all on Github.IU</a>
          </div>
        </div>
      </transition>
    </div>
  </section>
</template>

<script>
const moment = require("moment");
const axios = require("axios");
const Remarkable = require("remarkable");

module.exports = {
  name: "changelog",

  created() {
    this.loadReleases();
  },

  data: function() {
    return {
      changelogErrors: [],
      releases: [],
      loadingReleases: false,
      errorLoadingReleases: false,
      showAllDetails: []
    };
  },

  methods: {
    showDetails(index) {
      this.$set(this.showAllDetails, index, true);
    },
    loadReleases() {
      const apiURL = "https://githubapi.iu.edu/api/uits/rivet-source/releases";
      this.loadingReleases = true;
      axios
        .get(apiURL)
        .then(response => {
          if (response.data && Array.isArray(response.data)) {
            this.releases = response.data;
          } else {
            this.errorLoadingReleases = true;
            console.log(
              "Error loading releases - API response must contain an array"
            );
          }
          this.loadingReleases = false;
        })
        .catch(e => {
          this.changelogErrors.push(e);
          this.errorLoadingReleases = true;
          this.loadingReleases = false;
        });
    },
    version(tag) {
      return tag.replace("v", "");
    },
    overview(body) {
      let md = new Remarkable();
      return (
        md.render(body.substr(0, body.indexOf("<!-- end-overview -->"))) ||
        md.render(body)
      );
    },
    url(version) {
      return (
        "https://github.iu.edu/UITS/rivet-source/archive/" + version + ".zip"
      );
    }
  }
};
</script>
