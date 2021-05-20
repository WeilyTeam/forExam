<template>
  <div class="main-container">
    <router-view/>
    <van-tabbar v-model="active">
      <van-tabbar-item icon="home-o" @click="handleChangeRouter('/home')">主页</van-tabbar-item>
      <van-tabbar-item icon="friends-o" @click="handleChangeRouter('/mytodo')">我的TODO</van-tabbar-item>
      <van-tabbar-item icon="setting-o" @click="handleChangeRouter('/mine')">个人信息</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0,
    };
  },
  methods: {
    handleChangeRouter(api) {
      this.$router.push(api).catch(e => {
      })
    }
  }
};
</script>

<style scoped>
</style>
