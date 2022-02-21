import './main.scss';

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import {createVuetify} from "vuetify";

const app = createApp(App)

app.use(router)
app.use(createVuetify())

app.mount('#app')
