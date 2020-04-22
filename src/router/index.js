import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home.vue'
import Specs from '../components/Specs.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/specs',
    name: 'Specs',
    component: Specs
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
