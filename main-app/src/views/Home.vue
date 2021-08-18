<!--
 * @Author: jing.chen
 * @Date: 2021-08-11 10:29:34
 * @LastEditors: jing.chen
 * @LastEditTime: 2021-08-17 15:53:00
 * @Description:
-->
<template>
  <div class="home">
    homepage
    <el-button @click="openMessage">查看信息</el-button>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'Home',
  props: {
  },

  methods: {
    ...mapActions([
      'viewMessage'
    ]),

    openMessage () {
      this.viewMessage()
    }
  }

}
</script>
