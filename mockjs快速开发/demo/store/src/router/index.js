import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import Checkout from '@/pages/Checkout'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/checkout',
      component: Checkout
    }
  ]
})
