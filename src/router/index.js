import Vue from 'vue'
import VueRouter from 'vue-router'
import Mainpage from '../components/Mainpage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Mainpage',
    component: Mainpage
  }

]

const router = new VueRouter({
  routes
})

export default router
