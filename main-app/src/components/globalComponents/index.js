/*
 * @Author: jing.chen
 * @Date: 2021-08-12 10:50:16
 * @LastEditors: jing.chen
 * @LastEditTime: 2021-08-12 10:51:40
 * @Description: 全局组件
 */

import Vue from 'vue'

Vue.component('viewMessage', () => import(/* webpackChunkName: "global-components" */ '@/components/view-message'))
