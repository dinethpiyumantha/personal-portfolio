//Vue
import Vue from 'vue'
import App from './App.vue'

import firebase from "firebase/app";

//Vue Router
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import Router from './routes/index.js'


import Vuelidate from 'vuelidate'
Vue.use(Vuelidate)

//Toast
import VueToast from 'vue-toast-notification';
//Import one of the available themes
//import 'vue-toast-notification/dist/theme-default.css';
import 'vue-toast-notification/dist/theme-sugar.css';
Vue.use(VueToast);


new Vue({
  el: '#app',
  router: Router,
  render: h => h(App)
})
