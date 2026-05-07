import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import vuetify from './plugins/vuerify'

createApp(App)
  .use(createPinia()) // piniaを使うためにuseする
  .use(router)
  .use(vuetify)
  .mount('#app')
