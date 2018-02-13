<template>
    <div class="rvt-notifications-center">
        <transition name="rvt-fade">
        <div class="rvt-loading" v-if="isLoading">
            <div class="rvt-loading__fake-heading">&nbsp;</div>
            <div class="rvt-loading__fake-text">&nbsp;</div>
            <div class="rvt-loading__fake-text-short">&nbsp;</div>
            <div class="rvt-loading__fake-heading">&nbsp;</div>
            <div class="rvt-loading__fake-text">&nbsp;</div>
            <div class="rvt-loading__fake-text-short">&nbsp;</div>
            <div class="rvt-loading__fake-heading">&nbsp;</div>
            <div class="rvt-loading__fake-text">&nbsp;</div>
            <div class="rvt-loading__fake-text-short">&nbsp;</div>
            <div class="rvt-loading__fake-heading">&nbsp;</div>
            <div class="rvt-loading__fake-text">&nbsp;</div>
            <div class="rvt-loading__fake-text-short">&nbsp;</div>
            <div class="rvt-loading__fake-heading">&nbsp;</div>
            <div class="rvt-loading__fake-text">&nbsp;</div>
            <div class="rvt-loading__fake-text-short">&nbsp;</div>
            <div class="rvt-loading__fake-heading">&nbsp;</div>
            <div class="rvt-loading__fake-text">&nbsp;</div>
            <div class="rvt-loading__fake-text-short">&nbsp;</div>
        </div>
        <ol v-else class="rvt-plain-list rvt-notifications-center-feed">
            <li v-for="notification in fakeUnreadNotifications" :key="notification.id">
                <article class="rvt-feed-item rvt-feed-item--is-unread">
                    <div class="rvt-grid">
                        <div class="rvt-grid__item-2-md-up">
                            <time :datetime="notification.createdDate" class="rvt-feed-item__meta">{{ notification.createdDate | formatDate }}</time>
                        </div>
                        <div class="rvt-grid__item-10-md-up">
                            <div class="rvt-feed-item__body">
                                <h1 class="rvt-feed-item__title">
                                    <a :href="notification.url">{{ notification.title | capitalize }}</a>
                                </h1>
                                <p class="rvt-feed-item__desc">{{ notification.description }}</p>
                            </div>
                        </div>
                    </div>
                </article>
            </li>
            <!--
                    There is some duplication here because I'm faking the
                    is unread state.
                -->
            <li v-for="notification in fakeReadNotifications" :key="notification.id">
                <article class="rvt-feed-item">
                    <div class="rvt-grid">
                        <div class="rvt-grid__item-2-md-up">
                            <time datetime="" class="rvt-feed-item__meta">{{ notification.createdDate | formatDate }}</time>
                        </div>
                        <div class="rvt-grid__item-10-md-up">
                            <div class="rvt-feed-item__body">
                                <h1 class="rvt-feed-item__title">
                                    <a :href="notification.url">{{ notification.title | capitalize }}</a>
                                </h1>
                                <p class="rvt-feed-item__desc">{{ notification.description }}</p>
                            </div>
                        </div>
                    </div>
                </article>
            </li>
        </ol>
        </transition>
    </div>
</template>

<script>
const moment = require('moment');
const axios = require('axios');

module.exports =  {
    name: 'notifications-center',

    props: {
        notifications: {
            type: Array
        },
        isLoading: {
            type: Boolean
        }
    },

    computed: {
        fakeReadNotifications() {
            return this.notifications.slice(4, 49);
        },

        fakeUnreadNotifications() {
            return this.notifications.slice(0, 3);
        }
    }
}

</script>
