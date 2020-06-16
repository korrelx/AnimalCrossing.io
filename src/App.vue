<template>
  <div id="app">
      <el-menu class="el-menu" mode="horizontal" default-active="1" @select="handleSelect" background-color="#f7f4e5" text-color="#8a7b66" active-text-color="#8a7b66" router>
        <el-menu-item index="1" route="/flower">
            <img src="./assets/icon_flower.jpg">
            <span>花卉杂交</span>
        </el-menu-item>
      </el-menu>
      <router-view></router-view>
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
  font-family: Georgia;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  line-height: 1.7;
  font-size: 14px;
  color: rgba(0,0,0,.65);
  margin: 12px;
}

.el-menu {
  display: inline-block;
  border-radius: 10px;
}
.el-menu-item {
  background-color: rgb(247, 244, 229) !important;
  border: none !important;
  display: flex;
  align-items: center;
  height: 30px !important;
  line-height: 30px !important;
  margin: 8px 16px !important;
  padding: 0px;
}
.el-menu-item:hover {
  color: rgba(138, 123, 102, .65) !important;
}
.is-active span {
  position: relative;
}
.is-active span::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    border-bottom: 1px solid #8a7b66;
}
img {
    width: 24px;
    height: 24px;
    margin-right: 2px;
}
</style>
