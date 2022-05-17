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
    <van-tabs type="card" v-model="active">
      <van-tab title="登录">
        <van-form @submit="onSubmit">
          <van-field
            v-model="tel"
            name="用户名"
            label="用户名"
            placeholder="用户名"
            :rules="[{ required: true,
            message: '请填写用户名' ,
            }]"
          />
          <van-field
            v-model="password"
            type="password"
            name="密码"
            label="密码"
            placeholder="密码"
            :rules="[{ required: true, message: '请填写密码' }]"
          />
          <div style="margin: 16px;">
            <van-button round block type="info" native-type="submit">提交</van-button>
          </div>
        </van-form>
      </van-tab>
      <van-tab title="注册">
        <van-form @submit="onSubmit">
          <van-field
            v-model="username"
            name="昵称"
            label="用户名"
            placeholder="用户名"
            :rules="[{ required: true,
            message: '请填写用户名'
            }]"
          />
          <van-field
            v-model="tel"
            type="tel"
            name="手机号"
            label="手机号"
            placeholder="手机号"
            :rules="[{ required: true, message: '请填写你的手机号' }]"
          />
          <van-field
            v-model="password"
            type="password"
            name="密码"
            label="密码"
            placeholder="密码"
            :rules="[{ required: true, message: '请填写密码' }]"
          />
          <van-field
            v-model="confirmPass"
            type="password"
            name="确认密码"
            label="确认密码"
            placeholder="确认密码"
            :rules="[{ required: true, message: '请确认你的密码' ,validator:Validator}]"
          />
          <div style="margin: 16px;">
            <van-button round block type="info" native-type="submit">提交</van-button>
          </div>
        </van-form>
      </van-tab>
    </van-tabs>
  </div>

</template>

<script>
import {register,login} from "../utils/query";

export default {
  data() {
    return {
      username: '',
      password: '',
      confirmPass:'',
      tel:'',
      active:0
    };
  },
  methods: {
    Validator(){
      return this.password===this.confirmPass
    },
    click(){
      this.$router.replace("/main")
    },
    onSubmit(values) {
      if(this.active===0){
        login(this.tel,this.password).then(res=>{
          console.log(res.code);
          if(res.code===0){
            this.$router.replace("/main")
          }
        })
      }else{
        register(this.username,this.password,this.tel).then(res=>{
          if(res.code===0){
            this.$router.replace("/main")
          }
        })
      }

    },
  },
  created() {


  }
};
</script>

<style scoped>
</style>
