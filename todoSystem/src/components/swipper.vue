<template>
  <div>
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="(item,index) in imgList" :key="item+index">
        <img :src="item" alt="item">
      </van-swipe-item>

    </van-swipe>
  </div>
</template>

<script>
const Mock = require('mockjs');
const Random = Mock.Random
export default {
  name: "swipper",
  data() {
    return {
      imgList: []
    }
  },
  methods: {
    async handleGetImg() {
      this.imgList.push(Random.image('200x100', '#4A7BF7', "Todo"))
      for (let i = 0; i < 5; i++) {
        this.imgList.push(Random.image('200x100', '#4A7BF7', Random.csentence(5)))
      }
    }

  },
  mounted() {
    this.handleGetImg()
  },

}
</script>

<style scoped>

img {
  width: 100%;
}
</style>
