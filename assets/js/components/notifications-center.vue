<template>
  <div class="rvt-notifications-center">
    <transition name="rvt-fade" mode="out-in">
      <ol v-if="notifications.length > 0" class="rvt-plain-list rvt-notifications-center-feed">
        <li v-for="notification in notifications" :key="notification.id">
          <article class="rvt-feed-item" :class="{'rvt-feed-item--is-unread': isUnread(notification)}">
            <div class="rvt-grid">
              <div class="rvt-grid__item-2-md-up">
                <time datetime="" class="rvt-feed-item__meta">{{ notification.liveAt | formatDate }}</time>
              </div>
              <div class="rvt-grid__item-10-md-up">
                <div class="rvt-feed-item__body">
                  <h1 class="rvt-feed-item__title">
                    <a :href="notification.url" :target="linkTarget(notification.url)">{{ notification.title | capitalize }}</a>
                  </h1>
                  <p class="rvt-feed-item__desc">{{ notification.description }}</p>
                </div>
              </div>
            </div>
          </article>
        </li>
      </ol>
      <div class="rvt-loading" v-else-if="loadingNotifications">
        <template v-for="n in 6">
          <div :key="n" class="rvt-loading__fake-heading">&nbsp;</div>
          <div :key="n" class="rvt-loading__fake-text">&nbsp;</div>
          <div :key="n" class="rvt-loading__fake-text-short">&nbsp;</div>
        </template>
      </div>
      <div v-else-if="errorLoadingNotifications" class="rvt-notifications-error">
        <div class="rvt-notifications-error__icon">
          <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 16 16">
            <g fill="currentColor">
              <path d="M8,16a8,8,0,1,1,8-8A8,8,0,0,1,8,16ZM8,2a6,6,0,1,0,6,6A6,6,0,0,0,8,2Z"/>
              <path d="M8,9A1,1,0,0,1,7,8V5A1,1,0,0,1,9,5V8A1,1,0,0,1,8,9Z"/>
              <circle cx="8" cy="11" r="1"/>
            </g>
          </svg>
        </div>
        <p class="rvt-notifications-error__text">There was an error connecting to the notifications service.</p>
        <p><button class="button--secondary" @click.stop="reload">Reload</button></p>
      </div>
      <div v-else class="rvt-notifications-empty">
        <div class="rvt-notifications-empty__icon">
          <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 16 16">
            <path fill="currentColor" d="M8,16A8,8,0,1,1,10.29.33a1,1,0,0,1-.57,1.92A6,6,0,1,0,14,8a1,1,0,1,1,2,0A8,8,0,0,1,8,16Z"/>
            <path fill="currentColor" d="M7.95,11.89a1.26,1.26,0,0,1-.75-.25L3.4,8.8A1,1,0,1,1,4.6,7.2L7.77,9.58,14.18.43a1,1,0,0,1,1.64,1.15L9,11.36a1.25,1.25,0,0,1-.83.52Zm-.62-1.68h0Z"/>
          </svg>
        </div>
        <p class="rvt-notifications-empty__text">There are no current notifications.</p>
      </div>
    </transition>
  </div>
</template>

<script>
const moment = require("moment");
const axios = require("axios");
const localStorageAvailable = require("../polyfills.js").localStorageAvailable;
const isExternalLink = require("../plugins.js").isExternalLink;

module.exports = {
  name: "notifications-center",

  methods: {
    isUnread(notification) {
      if (moment.isMoment(this.notificationsLastViewedAt)) {
        return this.notificationsLastViewedAt.isBefore(notification.liveAt);
      }
      return true;
    },
    linkTarget(url) {
      return isExternalLink(url) ? "_blank" : "_self";
    }
  },

  mounted() {
    // set notifications as viewed after 4 seconds
    setTimeout(() => {
      this.$emit("clear-notifications");
    }, 2000);
  },

  props: {
    notifications: {
      type: Array
    },
    loadingNotifications: {
      type: Boolean,
      default: false
    },
    errorLoadingNotifications: {
      type: Boolean,
      default: false
    },
    notificationsLastViewedAt: {
      default: null
    }
  }
};
</script>
