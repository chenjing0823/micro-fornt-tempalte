/*
 * @Author: jing.chen
 * @Date: 2021-08-11 10:29:34
 * @LastEditors: jing.chen
 * @LastEditTime: 2021-08-18 20:41:58
 * @Description: 路由
 */

// demo 在frame.vue 内加菜单 同时在本路由页面配置路由
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

// 解决vue路由重复导航错误
// 获取原型对象上的push函数
const originalPush = VueRouter.prototype.push
// 修改原型对象中的push方法
VueRouter.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}

const routes = [
  {
    path: '/',
    redirect: '/home',
    name: 'about',
    component: () => import(/* webpackChunkName: "app-layout" */ '@/components/layout/frame.vue'),
    children: [
      {
        path: 'home',
        name: 'home',
        component: () => import(/* webpackChunkName: "homeIndex" */ '@/views/Home.vue')
      }
    ]
  },
  {
    path: '/about',
    redirect: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "app-layout" */ '@/components/layout/frame.vue'),
    children: [
      {
        path: '/',
        name: 'about',
        component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue')
      }
    ]
  },
  {
    path: '/group',
    redirect: '/group/page1',
    name: 'group',
    component: () => import(/* webpackChunkName: "app-layout" */ '@/components/layout/frame.vue'),
    children: [
      {
        path: 'page1',
        name: 'page1',
        component: () => import(/* webpackChunkName: "group" */ '@/views/page1.vue')
      },
      {
        path: 'page2',
        name: 'page2',
        component: () => import(/* webpackChunkName: "group" */ '@/views/page2.vue')
      }
    ]
  },
  {
    path: '/vue',
    name: 'vue',
    component: () => import(/* webpackChunkName: "app-layout" */ '@/components/layout/frame.vue'),
    children: [
      {
        path: '/',
        name: 'vuehome'
      },
      {
        path: 'list',
        name: 'vuelist'
      }
    ]
  },
  {
    path: '/react',
    name: 'react',
    component: () => import(/* webpackChunkName: "app-layout" */ '@/components/layout/frame.vue'),
    children: [
      {
        path: '/',
        name: 'reacthome'
      },
      {
        path: 'list',
        name: 'reactlist'
      }
    ]
  },
  {
    path: '/vue/communication',
    name: 'vuecommunication',
    component: () => import(/* webpackChunkName: "app-layout" */ '@/components/layout/frame.vue')
  }
  // {
  //   path: '/vue/list',
  //   name: 'vuelist',
  //   component: () => import(/* webpackChunkName: "app-layout" */ '@/components/layout/frame.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: window.__POWERED_BY_QIANKUN__ ? '/vue' : '/',
  routes
})

export default router
