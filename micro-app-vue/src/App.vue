<!--
 * @Author: jing.chen
 * @Date: 2021-08-16 09:19:50
 * @LastEditors: jing.chen
 * @LastEditTime: 2021-08-16 10:32:34
 * @Description: 
-->
<template>
  <div id="app">
    <el-menu
      router
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      <el-menu-item index="/">主页</el-menu-item>
      <el-menu-item index="/list">列表页</el-menu-item>
    </el-menu>
    <router-view/>
  </div>
</template>

<script>
export default {
  data () {
    return {
      activeIndex: '/'
    }
  },
  watch: {
    '$route.path': {
      handler (val) {
        this.activeIndex = val
      }
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
