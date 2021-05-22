<template>
  <div class="main-container">
    <router-view/>
    <van-tabbar v-model="active" fixed>
      <van-tabbar-item icon="home-o" @click="handleChangeRouter('home')">播放</van-tabbar-item>
      <van-tabbar-item icon="setting-o" @click="handleChangeRouter('mine')">个人设置</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>

import {get} from "../utils/http";

export default {
  data() {
    return {
      active: 0,
      songList:[]
    };
  },
  methods: {
    handleChangeRouter(api) {
      this.$router.push({
        name:api
      }).catch(err=>{})
    }
  }
};
</script>

<style scoped>
>>>.van-tabbar-item--active{
  background-color: var(--color-tint);
}
</style>
