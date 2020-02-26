import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home'
import Rim from '@/views/Rim'
import Crowd from '@/views/Crowd'
import Center from '@/views/Center'
import Search from '@/views/Search'
import City from '@/views/City'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    component: Home
  },
  {
    path: '/rim',
    component: Rim
  },
  {
    path: '/crowd',
    component: Crowd
  },
  {
    path: '/center',
    component: Center
  },
  {
    path: '/search',
    component: Search
  },
  {
    path: '/city',
    component: City
  },
  {
    path: '*',
    redirect: '/home'
  }
]

const router = new VueRouter({
  routes
})

export default router
