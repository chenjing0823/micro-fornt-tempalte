<template>
  <div class="frame-sidebar">
    <el-menu
      :default-active="defaultMenu"
      :default-openeds="[defaultSubMenu]"
      :unique-opened="true"
      :collapse="!extendsMenu"
      class="frame-sidebar__menu--el-menu-container"
      :active-text-color="themeColor">
      <template v-for="item in menu">
        <!-- 一级、二级菜单 -->
        <!-- subMenu下有子菜单被选中，则打开，样式改变 -->
        <el-submenu
          v-if="item.subMenuList && item.subMenuList.length"
          :index="item.alias"
          :key="item.alias"
          popper-class="popper-subMenu-item"
          :popper-append-to-body="true"
          :class="defaultSubMenu === item.alias?'el-submenu-curr-actived':''"
          @click="routerTo(item.path)">
          <template slot="title">
            <i :class="item.icon"></i>
            <span slot="title">{{ item.name }}</span>
          </template>
          <el-menu-item
            v-for="subItem in item.subMenuList"
            :index="subItem.alias"
            :key="subItem.alias"
            @click="routerTo(subItem.path)">
            <i :class="subItem.icon"></i>
            <span slot="title" class="slot">{{ subItem.name }}</span>
          </el-menu-item>
        </el-submenu>
        <!-- 一级菜单 -->
        <el-menu-item
          v-else
          :key="item.alias"
          :index="item.alias"
          @click="routerTo(item.path)">
          <i :class="item.icon"></i>
          <span slot="title" class="slot">{{ item.name }}</span>
        </el-menu-item>
      </template>
    </el-menu>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'frame-sidebar',

  components: {
  },

  filters: {
  },

  mixins: [],
  props: {
    // 菜单栏数组
    menu: {
      type: Array,
      required: true
    },
    // 是否展开/收起，侧边菜单栏
    extends: {
      type: Boolean,
      default: true
    }
  },

  data () {
    return {
    }
  },

  computed: {
    ...mapState({
      // 当前默认选中menu
      defaultMenu: state => state.currActiveMenu,
      // 当前选中subMenu
      defaultSubMenu: state => state.currActiveSubMenu
    }),
    extendsMenu () {
      return this.extends
    },
    themeColor () {
      return '#409EFF'
    }
  },

  watch: {
  },

  mounted () {
  },

  methods: {
    ...mapMutations(['saveCurrActiveMenu']),
    // 路由跳转
    routerTo (path) {
      // 保存当前点击的菜单栏
      // this.saveCurrActiveMenu(alias)
      // 跳转
      this.$router.push(path)
    }
  }
}
</script>

<style lang="scss" scoped>
.frame-sidebar {
  ::v-deep .el-menu-item {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  ::v-deep .el-submenu__title {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
}
</style>
