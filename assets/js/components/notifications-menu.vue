<template>
    <div class="rvt-notifications">
        <button @click.stop="toggleMenu"
                :aria-expanded="menuVisible ? 'true': 'false'"
                :class="{'rvt-notifications__toggle--has-unread' : userHasUnreadNotifications}"
                class="rvt-notifications__toggle"
                ref="notificationButton">
            <span class="rvt-sr-only">Show notifications</span>
            <span class="rvt-notifications__toggle-loading" v-if="loadingNotifications">
                <svg role="img" alt="" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                    <g fill="currentColor">
                        <circle cx="8" cy="8" r="2"/>
                        <circle cx="14" cy="8" r="2"/>
                        <circle cx="2" cy="8" r="2"/>
                    </g>
                </svg>
            </span>
            <span v-else>
                <svg v-if="menuVisible" class="rvt-close-icon" role="img" alt="" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                    <path fill="currentColor" d="M9.41,8l5.29-5.29a1,1,0,0,0-1.41-1.41L8,6.59,2.71,1.29A1,1,0,0,0,1.29,2.71L6.59,8,1.29,13.29a1,1,0,1,0,1.41,1.41L8,9.41l5.29,5.29a1,1,0,0,0,1.41-1.41Z"/>
                </svg>
                <svg v-else role="img" alt="" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                    <path fill="currentColor" d="M14.57,12.06,13,9.7V6A5,5,0,0,0,3,6V9.7L1.43,12.06a1.25,1.25,0,0,0,1,1.94H6a2,2,0,0,0,4,0h3.53a1.25,1.25,0,0,0,1-1.94ZM8,12H3.87L5,10.3V6a3,3,0,0,1,6,0v4.3L12.13,12Z"/>
                </svg>
                <span v-if="unreadCount" class="rvt-notifications__toggle-count">{{ unreadCount }}</span>
            </span>
        </button>

        <div class="rvt-notifications__menu" ref="menuElement" :aria-hidden="menuVisible ? 'false' : 'true'">
            <ol class="rvt-notifications__menu-list" v-if="notifications.length > 0">
                <li v-for="notification in visibleNotifications" :key="notification.id">
                    <notifications-item
                        :date="notification.liveAt | formatDate"
                        :title="notification.title | capitalize"
                        :description="notification.description"
                        :url="notification.url"
                        :is-unread="isUnread(notification)"
                    />
                </li>
            </ol>
            <div v-else-if="loadingNotifications" class="rvt-notifications-error">
                <p class="rvt-notifications-error__text">Loading notifications</p>
            </div>
            <div v-else-if="errorLoadingNotifications" class="rvt-notifications-error">
                <div class="rvt-notifications-error__icon">
                    <svg role="img" alt="" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 16 16">
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
                    <svg role="img" alt="" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 16 16">
                        <path fill="currentColor" d="M8,16A8,8,0,1,1,10.29.33a1,1,0,0,1-.57,1.92A6,6,0,1,0,14,8a1,1,0,1,1,2,0A8,8,0,0,1,8,16Z"/>
                        <path fill="currentColor" d="M7.95,11.89a1.26,1.26,0,0,1-.75-.25L3.4,8.8A1,1,0,1,1,4.6,7.2L7.77,9.58,14.18.43a1,1,0,0,1,1.64,1.15L9,11.36a1.25,1.25,0,0,1-.83.52Zm-.62-1.68h0Z"/>
                    </svg>
                </div>
                <p class="rvt-notifications-empty__text">There are no current notifications.</p>
            </div>

            <div class="rvt-notifications__actions">
                <a v-if="!errorLoadingNotifications" class="rvt-button rvt-button--secondary rvt-display-flex rvt-text-center rvt-m-bottom-xs" :href="baseURL + 'notification-center'">More notifications</a>
                <a class="rvt-button rvt-notifications__actions-mail" href="https://list.iu.edu/sympa/subscribe/rivet-l">
                    <svg role="img" alt="" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                        <title>Envelope icon</title>
                        <path fill="currentColor" d="M13.5,3H2.5A1.5,1.5,0,0,0,1,4.5v8A1.5,1.5,0,0,0,2.5,14h11A1.5,1.5,0,0,0,15,12.5v-8A1.5,1.5,0,0,0,13.5,3ZM11.41,5,8,7.77,4.59,5ZM3,12V6.29L7.11,9.62l.12.08a1.5,1.5,0,0,0,1.54,0L13,6.29V12Z"/>
                    </svg>
                    <span>Get updates in your inbox</span>
                </a>
            </div>
        </div>
    </div>
</template>

<script>
const moment = require('moment');
const localStorageAvailable = require('../polyfills.js').localStorageAvailable;

module.exports = {
    name: 'notifications-menu',

    components: {
        notificationsItem: require('./notifications-item.vue')
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
    },

    data: function() {
        return {
            menuVisible: false,
            baseURL: baseURL
        }
    },

    computed: {
        visibleNotifications() {
            return this.notifications.slice(0, 3);
        },
        unreadCount() {
            return this.visibleNotifications.filter((n) => this.isUnread(n)).length
        },
        userHasUnreadNotifications() {
            return this.unreadCount > 0;
        },
        mostRecentNotificationDate() {
            return this.notifications[0].liveAt;
        },
    },

    methods: {
        isUnread(notification) {
            if(moment.isMoment(this.notificationsLastViewedAt)) {
                return this.notificationsLastViewedAt.isBefore(notification.liveAt);
            }
            return true;
        },

        toggleMenu() {
            this.menuVisible = !this.menuVisible;
        },

        escapeKeyClose(event) {
            /**
             * Nice way to list for events that bubble up outside the vm
             * https://vuejsdevelopers.com/2017/05/01/vue-js-cant-help-head-body/
             */
            if (event.keyCode == 27 && this.menuVisible) {
                this.menuVisible = false;
                this.$refs.notificationButton.focus();
            }
        },

        handleClickOutside(event) {
            /**
             * Stores a ref to the menu element using Vue's $refs object.
             * https://vuejs.org/v2/api/#ref
             */
            let el =  this.$refs.menuElement;
            let target = event.target;

            if(el !== target && !el.contains(target)) {
                this.menuVisible = false;
            }
        },

        reload() {
            this.$emit('reload-notifications');
        }
    },

    created() {
        document.addEventListener('keyup', this.escapeKeyClose);
        document.addEventListener('click', this.handleClickOutside);
    },
    destroyed() {
        // Clean up the event listeners
        document.removeEventListener('keyup', this.escapeKeyClose);
        document.removeEventListener('click', this.handleClickOutside);
    },

    watch: {
        menuVisible() {
            if(!this.menuVisible) {
                this.$emit('clear-notifications');
            }
        }
    }
}
</script>