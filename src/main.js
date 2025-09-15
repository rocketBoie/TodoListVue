import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Vue3Toastify from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'
import './style.css'

const app = createApp(App)

app.use(router)  
app.use(Vue3Toastify) 

app.mount('#app')
