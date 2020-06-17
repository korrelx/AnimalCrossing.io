<template>
<div>
  <div class="tip">Tips：一号白玫瑰和一号紫玫瑰杂交产生的紫玫瑰后代可以直接自我复制再自交，三代内不出白玫瑰可直接丢弃。</div>
  <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane v-for="(flowerName, nameIndex) in flowerSpecies" :key="nameIndex" :name="flowerName" :label="flowerName">
    </el-tab-pane>
  </el-tabs>
  <el-row class="el-row-wrap" type="flex">
    <el-row class="el-row-flower" type="flex" align="middle" v-for="(flowerItem, itemIndex) in flowers[activeName]" :key="itemIndex" >
      <el-col>
        <div v-for="(parent, parentIndex) in flowerItem.parents" :key="parentIndex">
          <img class="plus" src="../assets/plus.png" :style="{ 'display': parentIndex > 0 ? 'block' : 'none' }">
          <el-card class="flower_card" :body-style="{ padding: '6px 0', display: 'flex' }">
            <img :src="require(`../assets/flower_${ activeName }_${ parent.color }.png`)">
            <div><div>{{ parent.gene }}</div><div>{{ parent.desc }}</div></div>
          </el-card>
        </div>
      </el-col>
      <img class="arrow" src="../assets/arrow.png">
      <el-col>
        <el-card v-for="(child, childIndex) in flowerItem.children" :key="childIndex" :style="{ 'margin-top': childIndex > 0 ? '20px' : '0px' }"  class="flower_card" :body-style="{ padding: '6px 0', display: 'flex' }">
          <img :src="require(`../assets/flower_${ activeName }_${ child.color }.png`)">
          <div><div>{{ child.gene }}</div><div>{{ child.desc }}</div></div>
        </el-card>
      </el-col>
    </el-row>
  </el-row>
</div>
</template>

<script>
import {flowers} from '../data/flower'
export default {
  name: "flower",
  data() {
      return {
        activeName: 'rose',
        flowerSpecies: [
          'rose',
          'mums',
        ],
        flowers: flowers
      };
  },
  methods: {
      handleClick(tab, event) {
          // this.flowers = flowers[tab.name]
      }
  }
}
</script>

<style scoped>
.tip {
  margin: 12px;
  color: black;
}
div >>> .el-tabs__header {
    margin: 0px 12px;
}
div >>> .el-tabs__nav-wrap::after {
  display: none;
}
div >>> .el-tabs__item {
    display: inline;
    border-radius: 4px;
    font-size: 14px;
    cursor: pointer;
    background: #dcd1a0;
    margin: 0 6px 6px 0;
    padding: 5px 20px !important;
}
div >>> .is-active {
    background: #8a7b66;
    color: white;
}
div >>> .el-tabs__item:hover {
  color: #8a7b66;
}
div >>> .is-active:hover {
  color: white;
}
.el-row-wrap {
  flex-flow: row wrap;
}
.el-row-flower {
  padding: 8px 12px;
}
.el-row-flower:before {
  position: absolute;
  display: block;
  content: "";
  bottom: 0;
  width: 80%;
  left: 10%;
  border-bottom: 2px dashed #8a7b66;
}
.el-row-flower:after {
  position: absolute;
  display: block;
  content: "";
  right: 0;
  height: 80%;
  border-right: 2px dashed #8a7b66;
}
.flower_card {
    width: 132px;
    border: none;
    border-radius: 4px;
    background: #dcd1a0;
}
.flower_card img
{
  width: 52px;
  height: 52px;
}
.arrow {
    width: 24px;
    margin: 0 12px;
}
.plus {
  width: 24px;
  margin: 6px auto;
}
</style>
