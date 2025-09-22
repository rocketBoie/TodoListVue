import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Vue3Toastify from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'
import './style.css'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import  GoogleLoginPlugin  from 'vue3-google-login'    

const app = createApp(App)
const pinia = createPinia()

pinia.use(piniaPluginPersistedstate)

app.use(router)
app.use(Vue3Toastify)
app.use(pinia)

app.use(GoogleLoginPlugin, {
  clientId: '412563316620-vkgga7js6pp734qtb6km2bnrp3rrehom.apps.googleusercontent.com' 
})

app.mount('#app')
