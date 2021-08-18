/*
 * @Author: jing.chen
 * @Date: 2020-08-28 16:05:35
 * @LastEditors: jing.chen
 * @LastEditTime: 2021-08-13 14:05:42
 * @Description:
 */

import router from './index'
import store from '@/store'

// 路由跳转前的钩子
router.beforeEach((to, from, next) => {
  /*
  * 2.如果用户信息localStorage 并且在登录页面 ，在直接跳转到应用页面
  */
  const userMessage = localStorage.getItem('userMessage') // 验证token
  if (userMessage && userMessage !== 'undefined') {
    store.commit('saveCurrActiveMenu', to.name) // 获取当前路由name => alias并更新当前选中菜单
    if (to.matched.length > 1) { // 当前选中菜单在subMenu下（拥有两个层级）
      store.commit('saveCurrActiveSubMenu', to.matched[0].name)
    }
    next()
  } else {
    window.location = '/login.html'
  }
})
