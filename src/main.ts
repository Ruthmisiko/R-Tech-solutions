import { createApp } from 'vue'
import App from './App.vue'
import router from './router'   // <-- import your router
import './style.css'

createApp(App)
  .use(router)                 // <-- tell Vue to use the router
  .mount('#app')
