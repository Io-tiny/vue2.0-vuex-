import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
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
})
