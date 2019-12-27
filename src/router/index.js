import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/home/Index.vue'
import Login from '@/components/manage/Login.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/index',
      name: 'Index',
      component: Index
    },
    {
      path: '/manage',
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})
