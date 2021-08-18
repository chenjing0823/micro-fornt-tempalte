<!--
 * @Author: jing.chen
 * @Date: 2021-08-12 10:50:45
 * @LastEditors: jing.chen
 * @LastEditTime: 2021-08-12 11:08:40
 * @Description: 全局弹窗
-->
<template>
  <div class="index">
    <transition name="el-zoom-in-bottom">
      <el-dialog
        title="提示"
        :visible.sync="dialogVisible"
        width="30%">
        <div>
          <span> 这是一个全局组件 </span>
        </div>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
        </span>
      </el-dialog>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'index',

  components: {
  },

  filters: {
  },

  mixins: [],
  props: {
  },

  data () {
    return {
    }
  },

  computed: {
    dialogVisible: {
      get () {
        return this.$store.state.viewMessage.dialogVisible
      },
      set () {
        this.$store.commit('VIEW_MESSAGE_DIALOG', false)
      }
    }
  },

  watch: {
  },

  mounted () {
  },

  methods: {
  }
}
</script>

<style lang="scss" scoped>

</style>
