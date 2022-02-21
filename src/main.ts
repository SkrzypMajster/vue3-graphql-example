import './main.scss';

import {createApp, h, provide} from 'vue'
import {createVuetify} from "vuetify";
import {DefaultApolloClient} from "@vue/apollo-composable";
import {ApolloClient, InMemoryCache} from "@apollo/client/core";

import App from './App.vue'
import router from './router'

const cache = new InMemoryCache()

const apolloClient = new ApolloClient({
    cache,
    uri: process.env.VUE_APP_API_URL,
})

const app = createApp({
    setup () {
        provide(DefaultApolloClient, apolloClient)
    },

    render: () => h(App),
})

app.use(router)
app.use(createVuetify())

app.mount('#app')
