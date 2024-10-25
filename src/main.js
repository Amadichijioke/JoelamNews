
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import store from './store/index.js'
import axios from 'axios'


const app = createApp(App)

app.use(router)
app.use(store)

app.mount('#app')
