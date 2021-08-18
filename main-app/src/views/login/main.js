/*
 * @Author: jing.chen
 * @Date: 2021-08-12 09:56:27
 * @LastEditors: jing.chen
 * @LastEditTime: 2021-08-12 10:12:55
 * @Description:
 */
import Vue from 'vue'
import login from './login.vue'
import router from '@/router'
import store from '@/store'

import '@/style/index.scss'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(login)
}).$mount('#app')
