/*
 * @Author: jing.chen
 * @Date: 2021-08-11 10:29:34
 * @LastEditors: jing.chen
 * @LastEditTime: 2021-08-16 09:17:17
 * @Description:
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './router/router-hooks'
import store from './store'

// 全局组件
import '@/components/globalComponents/'

import '@/style/index.scss'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import startQiankun from './micro'

Vue.use(ElementUI)
Vue.config.productionTip = false

startQiankun()

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
