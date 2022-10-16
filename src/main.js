import Vue from 'vue'
import App from './App.vue'
import {router} from "./router"
import {store} from "./store/store"
import Vuelidate from "vuelidate"

Vue.use(Vuelidate)
export const eventBus = new Vue();

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
