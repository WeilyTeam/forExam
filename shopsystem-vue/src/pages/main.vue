<template>
  <div class="main-container">
    <router-view />
    <van-tabbar v-model="active" fixed>
      <van-tabbar-item icon="home-o" @click="handleChangeRouter('home')"
        >商品推荐</van-tabbar-item
      >
      <van-tabbar-item icon="friends-o" @click="handleChangeRouter('cart')"
        >购物车</van-tabbar-item
      >
      <van-tabbar-item icon="setting-o" @click="handleChangeRouter('mine')"
        >个人信息</van-tabbar-item
      >
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
      this.$router
        .push({
          name: api,
        })
        .catch((e) => {});
    },
  },
};
</script>

<style scoped>
>>> .van-tabbar-item--active {
  background-color: var(--color-tint);
}
</style>
