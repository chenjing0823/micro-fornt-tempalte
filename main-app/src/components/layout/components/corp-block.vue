<!--
 * @Author: jing.chen
 * @Date: 2021-08-18 21:11:18
 * @LastEditors: jing.chen
 * @LastEditTime: 2021-08-18 21:11:57
 * @Description:
-->
<template>
  <div class="corp-block">
    <span>{{ corpName }}</span>
  </div>
</template>

<script>
export default {
  name: 'corp-block',

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
    corpName () {
      try {
        const userMessage = JSON.parse(localStorage.getItem('userMessage'))
        return userMessage.corp
      } catch (error) {
        return '--'
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
