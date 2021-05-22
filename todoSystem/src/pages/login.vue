<template>
  <div class="login-container-main">
    <img :src="src" class="bg-login" />


    <el-card class="box-card"  >
      <login-form @submit="handleToSubmit"/>
    </el-card>
    <Vcode
      :show="active"
      @success="handleConfirmSubmit(form)"
      />
  </div>
</template>

<script>
import loginForm from "@/components/loginForm";
import Vcode from "vue-puzzle-vcode";

export default {
  data() {
    return {
      active: false,
      form:null,
      src: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg'
    };
  },
  components: {
    loginForm,
    Vcode
  },
  methods: {
    async handleToSubmit(form) {
      this.active = true;
      this.form = form;
      // Notify({
      // });
      // await this.$router.push({path: "/main"});
    },

    async handleConfirmSubmit(form){

      let params = {
        user_account: form.username,
        user_password: form.password
      }
      let res = await this.$http.postLogin(params)
      console.log(res)
      this.active = false

      if (!res.token) {
        return this.$message({
          message: res.msg,
          type: "danger"
        })

      }
      this.$message({
        message: res.msg,
        type: "success"
      })

      localStorage.setItem("token", res.token);
      await this.$router.push({path: "/main"})
    }

  },
};
</script>

<style scoped>
.login-container-main{
  overflow: hidden;width: 100vw;
  height: 100vh;
}
.box-card{
  width: 400px;
  position: absolute;
  top: 2em;
  left: 40%;
}
.bg-login{
  width: 100vw;
  height: 100vh;
  overflow: hidden;

}
</style>
