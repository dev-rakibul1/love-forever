import './assets/main.css'

import { createApp } from 'vue'
import router from './router'
import Nav from './shared/navbar/Nav.vue'

import { OhVueIcon, addIcons } from 'oh-vue-icons'
import { BiList } from 'oh-vue-icons/icons'

const app = createApp(Nav)

app.use(router)

addIcons(BiList)

app.component('v-icon', OhVueIcon)
app.mount('#app')
