<template>
  <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
    <el-tab-pane v-for="item in items" :key="item.message" :name="item.message">
      <span slot="label">{{ item.message }}</span>
      <el-row type="flex">
        <el-row v-for="(o) in 2" :key="o">
          <el-card class="flower_card" :body-style="{ padding: '0px', display: 'flex' }">
            <img src="../assets/flower_rose_red.png">
            <div><div>RRyyWWSs</div><div>种子</div></div>
          </el-card>
        </el-row >
      </el-row>
    </el-tab-pane>
  </el-tabs>
</template>

<script>
export default {
  name: "flower",
  data() {
      return {
        activeName: 'Foo',
        items: [
          { message: 'Foo' },
          { message: 'Bar' }
        ],
        flowers: [
          {flower: "1"},
          {flower: "1"}
        ],
      };
  },
  methods: {
      handleClick(tab, event) {
          console.log(tab, event);
      }
  }
}
</script>

<style scoped>
.flower_card {
    width: 132px;
    border-radius: 4px;
    background: #dcd1a0;
    padding: 6px 0;
    display: "flex";
} img {
  width: 52px;
  height: 52px;
}
</style>
