/*
 * @Author: jing.chen
 * @Date: 2021-08-16 09:52:44
 * @LastEditors: jing.chen
 * @LastEditTime: 2021-08-16 15:09:15
 * @Description: mock接口
 */
const menuList = [
  { alias: 'home', path: '/home', name: '首页', subMenuList: [], icon: 'el-icon-s-home' },
  { alias: 'about', path: '/about', name: '关于', subMenuList: [], icon: 'el-icon-s-shop' },
  {
    alias: 'group',
    name: '分组',
    subMenuList: [
      { alias: 'page1', path: '/group/page1', name: '分组page1', icon: 'el-icon-s-shop' },
      { alias: 'page2', path: '/group/page2', name: '分组page2', icon: 'el-icon-s-shop' }
    ],
    icon: 'el-icon-s-shop'
  },
  {
    alias: 'vue',
    name: 'vue微应用',
    subMenuList: [
      { alias: 'vuehome', path: '/vue', name: '主页', subMenuList: [], icon: 'el-icon-s-help' },
      { alias: 'vuelist', path: '/vue/list', name: '列表', subMenuList: [], icon: 'el-icon-help' }
    ],
    icon: 'el-icon-s-help'
  },
  {
    alias: 'react',
    name: 'react微应用',
    subMenuList: [
      { alias: 'reacthome', path: '/react', name: '主页', subMenuList: [], icon: 'el-icon-s-tools' },
      { alias: 'reactlist', path: '/react/list', name: '列表', subMenuList: [], icon: 'el-icon-setting' }
    ],
    icon: 'el-icon-s-tools'
  }
]
/**
 * @description mock axios请求菜单地址
 */
export const getMenu = () => {
  return new Promise((resolve) => {
    resolve(menuList)
  })
}
