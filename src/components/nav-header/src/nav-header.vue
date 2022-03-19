<!--
 * @Author: cuibx
 * @Date: 2022-03-13 23:48:02
 * @Description: 面包屑组件
-->

<template>
  <div class="nav-header">
    <el-icon class="fold-menu" @click="handleFoldClick">
      <expand v-if="isFold" />
      <fold v-else />
    </el-icon>
    <div>
      <!-- 面包屑 -->
      <bx-breab-crumb class="content" :breakcrumbs="breadcrumbs" />
      <!-- 用户信息 -->
      <el-dropdown class="userInfo">
        <el-avatar
          class="head-portrait"
          :size="25"
          :src="'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png'"
        />
        <span class="el-dropdown-link">
          {{ name }}
          <el-icon class="el-icon--right">
            <arrow-down />
          </el-icon>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item :icon="'UserFilled'">用户信息</el-dropdown-item>
            <el-dropdown-item :icon="'Switch'">切换身份</el-dropdown-item>
            <el-dropdown-item :icon="'Key'">修改密码</el-dropdown-item>
            <el-dropdown-item :icon="'RefreshRight'" divided>退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue'
import { useStore } from '@/store'
import BxBreabCrumb from '@/base-ui/breadcrumb'
import { pathMapBreadcrumbs } from '@/utils/map-menus'
import { useRoute } from 'vue-router'

export default defineComponent({
  emits: ['foldChange'],
  components: {
    BxBreabCrumb
  },
  setup(props, { emit }) {
    const store = useStore()
    const name = computed(() => store.state.login.userInfo.name)

    const isFold = ref(false)
    const handleFoldClick = () => {
      isFold.value = !isFold.value
      emit('foldChange', isFold.value)
    }

    // 传递面包屑数据 -> Objext
    const breadcrumbs = computed(() => {
      const userMenus = store.state.login.userMenus
      const route = useRoute()
      const currentPath = route.path
      return pathMapBreadcrumbs(userMenus, currentPath)
    })

    return {
      handleFoldClick,
      isFold,
      name,
      breadcrumbs
    }
  }
})
</script>

<style>
.example-showcase .el-dropdown-link {
  cursor: pointer;
  color: var(--el-color-primary);
  display: flex;
  align-items: center;
}
.el-dropdown-link {
  vertical-align: super;
  cursor: pointer;
}
</style>

<style lang="less" scoped>
.nav-header {
  display: flex;
  width: 100%;
  align-items: center;
  .fold-menu {
    font-size: 30px;
    cursor: pointer;
  }
  div {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    .content {
      display: flex;
      justify-content: start;
      padding: 0px 20px;
    }
    .userInfo {
      display: flex;
      min-width: 80px;
      justify-content: end;
      .head-portrait {
        margin-right: 10px;
      }
    }
  }
}
</style>
