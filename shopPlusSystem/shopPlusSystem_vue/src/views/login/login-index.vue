<template>
  <div>
    <!-- 头部导航 -->
    <header_titleBar title="登录"></header_titleBar>
    <main>
      <div class="logo">
        <!--<img :src="logo" alt="logo" />-->
      </div>

      <!-- 注册表单 -->
      <div v-show="!ONLOGIN" class="register-form">
        <van-form @submit="onRegister">

          <van-field
            v-model="username"
            type="text"
            name="user_name"
            label="昵称"
            placeholder="昵称"
            :rules="[{ required: true, message: '请填写昵称' }]"
          />
          <van-field
            v-model="account"
            type="text"
            name="user_account"
            label="账户"
            placeholder="设置账户"
            :rules="[{ required: true, message: '请填写账户' }]"
          />
          <van-field
            v-model="password"
            type="password"
            name="user_password"
            label="密码"
            placeholder="设置密码"
            :rules="[{ required: true, message: '请填写密码' }]"
          />


          <div style="margin: 0.2rem">
            <van-button
              :disabled="!isable"
              type="primary"
              round
              block
              native-type="submit"
            >
              注册
            </van-button>
          </div>
        </van-form>
      </div>

      <!-- 登录表单 -->
      <div v-show="ONLOGIN" class="login-form">
        <van-form @submit="onLogin">
          <van-field
            v-model="username"
            name="user_account"
            label="用户名"
            placeholder="用户名"
            :rules="[{ required: true, message: '请填写用户名' }]"
          />
          <van-field
            v-model="password"
            type="password"
            name="user_password"
            label="密码"
            placeholder="密码"
            :rules="[{ required: true, message: '请填写密码' }]"
          />
          <div style="margin: 0.2rem">
            <van-button
              type="primary"
              round
              block
              native-type="submit"
            >
              登录
            </van-button>
            <van-button
              v-show="ONLOGIN"
              @click="getRegister"
              type="primary"
              plain
              block
              native-type="button"
            >注册
            </van-button
            >
          </div>
        </van-form>
      </div>
    </main>
  </div>
</template>

<script>
import header_titleBar from "../../components/header-titileBar";

export default {
  name: "login-index",
  data() {
    return {
      username: "",
      emailaddress: "",
      validatecode: "",
      password: "",
      account: "",
      ONLOGIN: true,
      isable: true,

    };
  },
  methods: {
    async onRegister(values) {
      await this.asyncValidator("value");
      let res = await this.$http.register(values)
      console.log(res)
    },
    async onLogin(values) {

      let res = await this.$http.postLogin(values)
      localStorage.setItem("token", res.token)
      let token = res.token;
      let userinfo = await this.$http.userInfo({token})
      localStorage.setItem("userOnlogin", userinfo.user_name)

      await this.$router.push({path: "/my"});

    },
    getRegister() {
      this.ONLOGIN = false;
    },
    getValidateCode() {
      alert("send");
    },
    asyncValidator(val) {
      return new Promise((resolve) => {
        this.$toast.loading("验证中...");
        this.isable = false;
        setTimeout(() => {
          this.$toast.clear();
          resolve(/\d{6}/.test(val));
          this.isable = true;
        }, 2000);
      });
    },
  },
  components: {header_titleBar},
};
</script>
<style scoped>
main {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.logo {
  margin: 1rem;
  height: 2rem;
  width: 3rem;
  border: #000000 solid 0.1rem;
}

.logo img {
  object-fit: cover;
  width: 100%;
  height: 100%;
}

.van-form .van-field {
  height: 1.2rem;
}

.van-button {
  margin: 0.1rem;
  width: 5rem;
}
</style>
