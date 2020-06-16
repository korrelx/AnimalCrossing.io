import Vue from 'vue'
import Router from 'vue-router'
import flower from '@/components/flower'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/', redirect: '/flower'
    },
    {
      path: '/flower',
      name: 'flower',
      component: flower
    },
  ]
})
