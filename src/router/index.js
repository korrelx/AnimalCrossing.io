import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'
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
    {
      path: '/Home',
      name: 'Home',
      component: Home
    },
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    },
  ]
})
