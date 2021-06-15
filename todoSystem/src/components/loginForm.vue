<template>
  <div class="login-container">
    <van-sticky>
      <van-button type="primary" style="width: 100%;" @click="form.isRegister=!form.isRegister">Todo 系统</van-button>
    </van-sticky>
    <van-form @submit="onSubmit">
      <van-field
        v-model="form.username"
        name="username"
        label="昵称"
        placeholder="昵称"
        :rules="[{ required: true, message: '请填写用户名' }]"
      /><van-field
        v-model="form.user_account"
        name="user_account"
        label="用户名"
        placeholder="用户名"
        :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <van-field
        v-model="form.user_password"
        type="password"
        name="user_password"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <van-field
        v-model="form.user_mobile"
        type="text"
        name="user_mobile"
        v-if="form.isRegister"
        label="手机号"
        placeholder="手机号"
        :rules="[{ required: true, message: '请填写手机号' }]"
      />  <van-field
        v-model="form.user_address"
        type="text"
        name="user_address"
        v-if="form.isRegister"

        label="地址"
        placeholder="地址"
        :rules="[{ required: true, message: '请填写地址' }]"
      />  <van-field
        v-model="form.user_sex"
        type="text"
        name="user_sex"
        label="性别"
        v-if="form.isRegister"

        placeholder="性别"
        :rules="[{ required: true, message: '请填写性别' }]"
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
        user_mobile:"",
        user_address:"",
        user_sex:"",
        username:"",
        isRegister:false
      },
    };
  },
  methods: {
    onSubmit(values) {
      this.$emit("submit", this.form);
    },
  },
};
</script>

<style scoped>

</style>
