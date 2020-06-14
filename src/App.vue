<template>
  <div id="app">
    <el-container>
      <el-header>
        <el-menu class="el-menu-demo" mode="horizontal" default-active="1" @select="handleSelect" router>
          <el-menu-item index="1" route="/flower">花卉杂交</el-menu-item>
          <el-menu-item index="2" route="/HelloWorld">HelloWorld</el-menu-item>
        </el-menu>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </div>
</template>

<script>
  export default {
    name: 'App',
    methods: {
      handleSelect(tab, event) {
        console.log(tab, event);
      }
    }
  }
</script>

<style>
#app {
  font-family: Georgia, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  line-height: 1.7;
  font-size: 14px;
  color: rgba(0,0,0,.65);
}
</style>
