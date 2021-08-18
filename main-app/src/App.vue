<!--
 * @Author: jing.chen
 * @Date: 2021-08-11 10:29:34
 * @LastEditors: jing.chen
 * @LastEditTime: 2021-08-16 09:46:19
 * @Description:
-->
<template>
  <div class="main-app">
    <viewMessage v-if="dialogVisible"></viewMessage>
    <router-view />
    <div id="microapp"></div>
  </div>
</template>

<script>
export default {
  computed: {
    dialogVisible () {
      return this.$store.state.viewMessage.dialogVisible
    }
  }
}
</script>
<style scope>
.main-app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}
</style>
