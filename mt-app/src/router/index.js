import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/page'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'defaultPage',
      component: () => import('@/layout/default'),
      redirect: '/index',
      children: [
        {
          path: 's/:name',
          name: 'goods',
          component: () => import('@/page/goodList.vue')
        },
        {
          path: 'index',
          name: 'index',
          component: Index
        },
        {
          path: 'changeCity',
          name: 'changeCity',
          component: () => import('@/page/changeCity.vue')
        },
      ]
    },
    {
      path: '/blank',
      name: 'blankPage',
      component: () => import('@/layout/blank'),
      children: [
        {
          path: '/login',
          name: 'login',
          component: () => import('@/page/login')
        },
        {
          path: '/register',
          name: 'register',
          component: () => import('@/page/register')
        },
      ]
    },

  ]
})
