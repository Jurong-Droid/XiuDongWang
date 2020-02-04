import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home'
import Rim from '@/views/Rim'
import Crowd from '@/views/Crowd'
import Center from '@/views/Center'

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
    path: '*',
    redirect: '/home'
  }
]

const router = new VueRouter({
  routes
})

export default router
