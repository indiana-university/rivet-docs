<template>
    <a :href="url" :target="linkTarget">
        <article class="rvt-notification" :class="{'rvt-notification--is-unread' : isUnread}">
            <time class="rvt-notification__time">
                {{ date }}
            </time>
            <h1 class="rvt-notification__title">{{ title }}</h1>
            <p class="rvt-notification__teaser">{{ description }}</p>
            <div v-if="isExternal" class="rvt-notification__icon">
                <span class="rvt-sr-only">External Link</span>
                <svg role="img" alt="" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                    <g fill="currentColor">
                        <path d="M10.75,15H2.25A1.25,1.25,0,0,1,1,13.75V5.25A1.25,1.25,0,0,1,2.25,4H6A1,1,0,0,1,6,6H3v7h7V10a1,1,0,0,1,2,0v3.75A1.25,1.25,0,0,1,10.75,15Z"/>
                        <path d="M14.71,1.29A1,1,0,0,0,13.87,1l-.12,0H9A1,1,0,0,0,9,3h2.59L7.29,7.29A1,1,0,1,0,8.71,8.71L13,4.41V7a1,1,0,0,0,2,0V2.25a1.17,1.17,0,0,0,0-.12A1,1,0,0,0,14.71,1.29Z"/>
                    </g>
                </svg>
            </div>
        </article>
    </a>
</template>

<script>
    const isExternalLink = require('../plugins').isExternalLink;

    module.exports = {
        name: 'notifications-item',
        computed: {
            isExternal() {
                return isExternalLink(this.url);
            },
            linkTarget() {
                return isExternalLink(this.url) ? '_blank' : '_self';
            }
        },
        props: {
            date: {
                type: String
            },
            title: {
                type: String
            },
            description: {
                type: String
            },
            url: {
                type: String
            },
            isUnread: {
                type: Boolean,
                default: true
            }
        }
    }
</script>

