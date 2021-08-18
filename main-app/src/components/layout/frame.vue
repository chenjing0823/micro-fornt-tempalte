<!--
 * @Author: jing.chen
 * @Date: 2021-08-11 11:14:49
 * @LastEditors: jing.chen
 * @LastEditTime: 2021-08-18 13:40:04
 * @Description: 主布局
-->
<template>
  <el-container class="layout-index">
    <el-header class="layout-index-header">
      <div>杭州xxx有限公司</div>
      <user-block></user-block>
    </el-header>
    <el-container class="layout-index-container">
      <el-aside
        class="layout-index-container__sider"
        :class="{ 'layout-index-container__sider--extend': isSideBarExtend }">
        <!-- 菜单栏组件e-menu -->
        <frame-sidebar :menu="menuList" :extends="isSideBarExtend" />
        <!-- 折叠按钮 -->
        <div class="layout-index-container__sider--control">
          <i
            :class="isSideBarExtend ? 'el-icon-s-fold' : 'el-icon-s-unfold'"
            @click="isSideBarExtend = !isSideBarExtend">
          </i>
        </div>
        </el-aside>
      <el-main class="main">
        <router-view></router-view>
        <div id="microapp" class="micro-app"></div>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import FrameSidebar from '@/components/layout/frame-sidebar.vue' // 侧边栏

import userBlock from './components/user-block.vue'

import { getMenu } from '@/api/index'

import actions from '@/shared/actions'
export default {
  name: 'index',

  components: {
    FrameSidebar,
    userBlock
  },
  data () {
    return {
      menuList: [],
      isSideBarExtend: true // 侧边栏展开
    }
  },
  mounted () {
    getMenu().then(res => {
      this.menuList = res
    })
    // 注册一个观察者函数
    actions.onGlobalStateChange((state, prevState) => {
      // state: 变更后的状态; prevState: 变更前的状态
      console.log('主应用观察者：user 改变前的值为 ', prevState.user)
      console.log('主应用观察者：登录状态发生改变，改变后的 user 的值为 ', state.user)
    })

    const { user } = JSON.parse(localStorage.getItem('userMessage'))
    console.log(user)
    actions.setGlobalState({ user })
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
.layout-index {
  height: 100%;
  width: 100%;
  position: relative;
  background-color: #F5F7FA;
  .main {
    background: #ffffff;
    height: 100%;
    width: 100%;
    position: relative;
    .micro-app {
      height: 100%;
      width: 100%;
      position: relative;
    }
  }
  .layout-index-header {
    position: relative;
    line-height: 60px;
    background-color: #FFFFFF;
    display: flex;
    justify-content: space-between;
    box-shadow: 0px 0px 10px 0px rgba($base-black, 0.1);
  }
  .layout-index-container {
    margin-top: 5px;
    &__sider {
      position: relative;
      box-sizing: border-box;
      overflow: hidden;
      z-index: 100;
      height: 100%;
      width: 64px !important;
      padding-bottom: 64px;
      box-shadow: 0px 0px 10px 0px rgba($base-black, 0.1);
      background-color: rgba($text-white, 1);
      transition: width 0.3s;
      &--extend {
        width: 158px !important;
      }
      &--control {
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 64px;
        background-color: $bg-blue;
        i {
          position: absolute;
          right: 0;
          display: block;
          width: 64px;
          height: 64px;
          line-height: 64px;
          text-align: center;
          font-size: 32px;
          &:hover {
            color: $text-white;
            background: $base-orange;
            cursor: pointer;
          }
        }
      }
    }
  }
}
</style>
<style lang="scss">
.layout-index {
  background-color: $base-lineGray;
  .el-main {
    position: relative;
    padding: 0;
    margin-left: 10px;
    margin-top: 1px;
    min-width: 1030px;
    background-color: $base-lineGray;
  }
}
</style>
