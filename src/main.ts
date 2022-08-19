import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import { Button } from 'ant-design-vue';

import './assets/main.css'
import 'ant-design-vue/dist/antd.css';

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(Button)

app.mount('#app')
