<!--
 * @Author: jing.chen
 * @Date: 2021-08-12 09:56:54
 * @LastEditors: jing.chen
 * @LastEditTime: 2021-08-13 14:08:50
 * @Description:
-->
<template>
  <div class="login">
    <div class="lgoin-box">
      用户名：<el-input v-model="name"></el-input>
      密码：<el-input v-model="password"></el-input>
    </div>
    <div class="login-btn">
      <el-button @click="login">登录</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'login',

  data () {
    return {
      name: '',
      password: ''
    }
  },

  methods: {
    login () {
      if (this.name === 'admin' && this.password === 'admin') {
        localStorage.setItem('userMessage', JSON.stringify({
          user: '游客',
          corp: '杭州xxx有限公司'
        }))
        window.location = '/'
      } else {
        this.$message({
          message: '测试账号密码均为 admin',
          type: 'warning'
        })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.login {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .lgoin-box {
    width: 300px;
  }
  .login-btn {
    width: 300px;
    display: flex;
    justify-content: flex-end;
  }
}
</style>
