<template>
  <div class="login-container">
    <van-sticky>
      <van-button type="primary" style="width: 100%;">Todo 系统</van-button>
    </van-sticky>
    <van-form @submit="onSubmit">
      <van-field
        v-model="form.user_account"
        name="username"
        label="用户名"
        placeholder="用户名"
        :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <van-field
        v-model="form.user_password"
        type="password"
        name="password"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <div style="margin: 16px">
        <van-button round block type="info" native-type="submit">提交
        </van-button>
      </div>
    </van-form>
  </div>
</template>

<script>

export default {
  data() {
    return {
      form:{
        user_account: "",
        user_password: "",
      }
    };
  },
  methods: {
    onSubmit(values) {
      this.$emit("submit", values);
    },
  },
};
</script>

<style scoped>

</style>
