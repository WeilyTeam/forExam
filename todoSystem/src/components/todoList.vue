<template>
  <div>
    <van-sticky>
    <van-button type="primary" style="width: 100%;">Todo 首頁</van-button>
    </van-sticky>
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="item in songList[0].swiperImg" :key="item">
        <img :src="item" alt="">
      </van-swipe-item>
    </van-swipe>
    <ul class="todo-container">
      <li v-for="(item, index) in list" :key="item + index">
        <div class="title">
          <span>{{ item.name }}</span>
          <span>{{ item.tel }}</span>
          <van-tag v-if="item.isFinish" type="success">已完成</van-tag>
          <van-tag v-else> 未完成</van-tag>
        </div>
        <p class="main">{{ item.task }}</p>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  props: {
    list: {
      default() {
        return [
          {
            id: "1",
            name: "张三",
            tel: "13000000000",
            task: "拯救世界",
            isFinish: true,
          },
          {
            id: "2",
            name: "小四",
            tel: "12930",
            task: "获得吉尼斯纪录",
            isFinish: false,
          },
        ];
      },
    },
    data() {
      return {
        active: 0,
        songList:[{
          link:"",
          logoImg: "",
          swiperImg: [],
          song:"",
          singer: ""
        }],
      }
    }
  },
};
</script>
<style scoped>
.todo-container li {
  border: solid 1px white;
  background-color: beige;
  margin-top: 1em;
  padding: .2em;
}
.main{
  font-size: .7em;
}
</style>
