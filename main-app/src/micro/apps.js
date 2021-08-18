/*
 * @Author: jing.chen
 * @Date: 2021-08-16 09:15:01
 * @LastEditors: jing.chen
 * @LastEditTime: 2021-08-16 15:18:18
 * @Description: 微应用列表
 */
const apps = [
  /**
   * name: 微应用名称 - 具有唯一性
   * entry: 微应用入口 - 通过该地址加载微应用
   * container: 微应用挂载节点 - 微应用加载完成后将挂载在该节点上
   * activeRule: 微应用触发的路由规则 - 触发路由规则后将加载该微应用
   */
  {
    name: 'VueMicroApp',
    entry: '//localhost:10200',
    container: '#microapp',
    activeRule: '/vue'
  },
  {
    name: 'ReactMicroApp',
    entry: '//localhost:10100',
    container: '#microapp',
    activeRule: '/react'
  }
]

export default apps
