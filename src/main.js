import Vue from 'vue'
import { configRouter } from './routeConfig'
import VueRouter from 'vue-router'

// import PeoplePage from './pages/People'
import App from './App'
/* eslint-disable no-new */
Vue.use(VueRouter)

const router = new VueRouter({
  history: true,
  saveScrollPosition: true
})
// configure router
configRouter(router)

// boostrap the app
// const App = Vue.extend(require('./App.vue'))
router.start(App, '#app')
