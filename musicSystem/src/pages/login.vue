<template>
  <div class="login">
    <van-nav-bar
      title="welcome"
    />
    <van-notice-bar
      left-icon="volume-o"
      text="欢迎来到音乐的世界，快来添加属于你自己的音乐吧！"
    />
    <van-notice-bar scrollable text="用户xxx加入了我们" />
    <van-notice-bar scrollable text="用户xxx加入了我们" />
    <van-notice-bar scrollable text="用户xxx加入了我们" />
    <van-notice-bar scrollable text="用户xxx加入了我们" />

    <van-button type="primary" size="large" @click="click">开始！</van-button>
  </div>

</template>

<script>

export default {
  data() {
    return {

    };
  },
  methods: {
    click(){
      this.$router.replace("/main")
    }
  },
};
</script>

<style scoped>
</style>
