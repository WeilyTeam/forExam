<template>
  <div>
    <el-carousel >
      <el-carousel-item v-for="item in imgList" :key="item">
        <img  :src="item" alt="">
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
const Mock = require('mockjs');
const Random = Mock.Random
export default {
  name: "swipper",
  data() {
    return {
      imgList: [
        "http://h2.ioliu.cn/bing/BBNPGrande_ZH-CN4071551965_1920x1080.jpg?imageslim",
        "http://h2.ioliu.cn/bing/SocaCycles_ZH-CN3583247274_1920x1080.jpg?imageslim",
        "http://h2.ioliu.cn/bing/BBNPGrande_ZH-CN4071551965_1920x1080.jpg?imageslim",
        "http://h2.ioliu.cn/bing/SocaCycles_ZH-CN3583247274_1920x1080.jpg?imageslim",
      ]
    }
  },
  computed: {
    todoImg() {
      // return
    }
  },
  methods: {
    async handleGetImg() {}

  },
  mounted() {
    this.handleGetImg()
  },

}
</script>

<style scoped>

</style>
