/*
 * @Author: jing.chen
 * @Date: 2021-08-16 09:19:50
 * @LastEditors: jing.chen
 * @LastEditTime: 2021-08-16 09:51:44
 * @Description: 
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/list',
    name: 'list',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '@/views/List.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: window.__POWERED_BY_QIANKUN__ ? "/vue" : "/",
  routes
})

export default router
