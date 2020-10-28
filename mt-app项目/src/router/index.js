import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    name: 'defaultPage',
    component: () => import('@/layout/default')
  },
  {
    path: '/blank',
    name: 'blankPage',
    component: () => import('@/layout/blank')
  },
]

export default new VueRouter({
  routes
})