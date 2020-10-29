import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/page'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'defaultPage',
      component: () => import('@/layout/default'),
      redirect: '/index',
      children: [{
        path: 'index',
        name: 'index',
        component: Index
      }]
    },
    {
      path: '/blank',
      name: 'blankPage',
      component: () => import('@/layout/blank')
    },
  ]
})
