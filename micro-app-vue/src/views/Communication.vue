<!--
 * @Author: jing.chen
 * @Date: 2021-08-18 20:34:04
 * @LastEditors: jing.chen
 * @LastEditTime: 2021-08-19 20:03:47
 * @Description: 
-->
<template>
  <div class="Communication">
    <div class="Communication-user">
      <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
      <div style="display: flex;"><h1>主应用用户名：</h1>{{ userMseeage.user }}</div>
    </div> 
    <div class="Communication-user">
      <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
      <div style="display: flex;"><h1>主应用公司名：</h1>{{ userMseeage.corp }}</div>
    </div>
    <div class="Communication-form">
      <div class="Communication-form__box">
        <el-form label-position="right" label-width="80px" :model="formLabelAlign">
          <el-form-item label="用户名">
            <el-input v-model="formLabelAlign.user"></el-input>
          </el-form-item>
          <el-form-item label="公司名">
            <el-input v-model="formLabelAlign.corp"></el-input>
          </el-form-item>
        </el-form>
        <el-button @click="change">改变主应用用户显示</el-button>
        <el-button @click="openDialog">调用父组件弹窗</el-button>
      </div>

    </div>
  </div>
</template>

<script>
import actions from '@/actions'

export default {
  name: 'Communication',
  data () {
    return {
      userMseeage: {},
      formLabelAlign: {
        user: '微应用测试',
        corp: '杭州微应用公司'
      }
    }
  },
  mounted () {
  // 注册观察者函数
  // onGlobalStateChange 第二个参数为 true，表示立即执行一次观察者函数
    actions.onGlobalStateChange(state => {
      this.triggerState(state)
      console.log('微应用观察者：', state)
    }, true);
  },
  methods: {
    change () {
      const { user, corp } = this.formLabelAlign
      actions.setGlobalState({
        event: 'user-message',
        value: { user, corp }
      })
    },
    openDialog () {
      actions.setGlobalState({ event: 'open-dialog' })
    },
    triggerState (state) {
      if (state.event === 'user-message') {
        this.userMseeage = state.value
      } else if (state.event === 'open-dialog') {
        console.log('打开父弹窗')
      }
    }
  }
}
</script>

<style scoped>
.Communication-user {
  display: flex;
  justify-content: center;
  align-items: center;
}
.Communication-form {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}
.Communication-form__box {
  width: 30%;
}
</style>
