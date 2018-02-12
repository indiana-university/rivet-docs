<template>
    <div class="rvt-notifications-center">
        <ol class="rvt-plain-list rvt-notifications-center-feed">
            <li>
                <article class="rvt-feed-item">
                    <div class="rvt-feed-item__body">
                        <h1>The title</h1>
                        <p>Similique illum dolores dolorem optio odio. Numquam voluptatum ab ea illo. Aliquam impedit iste odio dolores omnis dolores quam. Aut incidunt sequi qui vel fugiat quas.</p>
                    </div>
                    <div class="rvt-feed-item__meta">
                        <time datetime="" class="rvt-feed-item__meta">
                            Jan. 15
                        </time>
                    </div>
                </article>
            </li>
        </ol>

    </div>
</template>

<script>
const moment = require('moment');
const axios = require('axios');

module.exports =  {
    name: 'notifications-center',

    data: function() {
        return {
            centerNotifications: [],
            loadingNotifications: false,
            errors: []
        }
    },

    methods: {
        fetchNotifications() {
            /**
             * This is some placeholder data I created, but the structure
             * closesly resembles what the notifications API will give back
             * once it's ready.
             */

        },

        created() {
            let apiURL = 'https://api.myjson.com/bins/kl0dh';

            this.loadingNotifications = true;

            axios.get(apiURL)
                .then(response => {
                    this.centerNotifications = response.data;

                    this.loadingNotifications = false;
                })
                .catch(e => {
                    this.errors.push(e);

                    console.log(this.errors);
                })
        }
    }
}

</script>
