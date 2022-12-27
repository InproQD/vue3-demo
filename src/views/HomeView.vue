<template>
  <div class="home">
    <el-container>
      <el-header class="header">
        <el-row :gutter="20">
          <el-col :span="4"><img src="@/assets/logo.png" class="header-logo"/></el-col>
          <el-col :span="16"><h2>Marvel Managing System</h2></el-col>
          <el-col :span="4">
            <el-button link class="logout">Logout</el-button>
          </el-col>
        </el-row>
      </el-header>
      <el-container>
        <el-aside width="200px">Aside</el-aside>
        <el-main>Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';

export default defineComponent({
  name: 'HomeView',
  components: {},
});
</script>
<style lang="sass" scoped>
.header
  height: 80px!important
  background: rgb(84, 92, 100)
  &-logo
    height: 80px

  h2, .logout
    text-align: center
    height: 80px
    line-height: 80px
    color: #FAB74FFF!important
</style>
