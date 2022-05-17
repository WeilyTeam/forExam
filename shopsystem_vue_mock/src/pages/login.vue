<template>
  <div class="login">
    <van-tabs type="card">
      <van-tab title="DENGLU❤">
        <van-form @submit="onSave">
          <van-field
            v-model="userAccount"
            name="user_account"
            label="用户名"
            placeholder="用户名"
            :rules="[{ required: true, message: '请填写用户名' }]"
          />
          <van-field
            v-model="password"
            type="password"
            name="password"
            label="密码"
            placeholder="密码"
            :rules="[{ required: true, message: '请填写密码' }]"
          />
          <div style="margin: 16px;">
            <van-button round block type="info" native-type="submit">提交</van-button>
          </div>
        </van-form>
      </van-tab>
      <van-tab title="ZHUCE😀">
        <van-form @submit="onSubmit">
          <van-field
            v-model="username"
            name="username"
            label="用户名"
            placeholder="用户名"
            :rules="[{ required: true, message: '请填写用户名' }]"
          />
          <van-field
            v-model="userAccount"
            name="userAccount"
            label="账号名"
            placeholder="账号名"
            :rules="[{ required: true, message: '请填写账号' }]"
          />
          <van-field
            v-model="telephone"
            type="text"
            name="phone"
            label="手机号"
            placeholder="手机号"
            :rules="[{ required: true, message: '请填写手机号' }]"
          />
          <van-field
            v-model="password"
            type="password"
            name="password"
            label="密码"
            placeholder="密码"
            :rules="[{ required: true, message: '请填写密码' }]"
          />
          <van-field
            v-model="confirmPass"
            type="password"
            name="confirmPassword"
            label="确认密码"
            placeholder="再输入一次你的密码哦"
            :rules="[{ required: true, message: '请确认',validator:Validator }]"
          />
          <van-field
            v-model="address"
            type="text"
            name="address"
            label="输入地址"
            placeholder="请输入你的地址"
            :rules="[{ required: true, message: '请输入你的地址',validator:Validator }]"
          />
          <!--          <van-address-edit-->
          <!--            :area-list="areaList"-->
          <!--            :area-columns-placeholder="['请选择', '请选择', '请选择']"-->
          <!--            :change-area="areaInfo"-->
          <!--            :click-area="areaclick"-->
          <!--          />-->
          <div style="margin: 16px;">
            <van-button round block type="info" native-type="submit">提交</van-button>
          </div>


        </van-form>
      </van-tab>
    </van-tabs>
  </div>


</template>

<script>
import {areaList} from "@vant/area-data";

export default {
  name: 'login',
  data() {
    return {
      areaList: areaList,
      searchResult: [],
      username: '',
      password: '',
      confirmPass: '',
      telephone: '',
      address: "",
      userAccount: ''
    };
  },
  methods: {
    async onSave(e) {
      let params = {
        user_account: e.user_account,
        password: e.password}
      console.log(params)

      const res = await this.$http.postLogin(params);
      // console.log(res);
      // if (res.ret === 0) {
      //   localStorage.setItem('token', res.token);
      // }
      await this.$router.push({path:"/main"});


      // await this.$router.push("/main");
      // localStorage.setItem('', e['username']);
      // console.log(e);
    },
    async onSubmit(e) {
      if (!e.address) {

      }
      let user = {
        username: e.username,
        user_account: e.userAccount,
        password: e.password,
        phone: e.phone,
        receiveAddress: e.address
      }
      await this.$http.postRegister(user);
      await this.$router.push({path:"/main"});

      // await this.$http.getAllProducts();
      // console.log('submit', values);
    },
    areaclick() {
      console.log(1)
    },
    areaInfo(values) {
      console.log(values);
    },
    Validator() {
      return this.password === this.confirmPass;
    },
    onChangeDetail(val) {
      if (val) {
        this.searchResult = [
          {
           },
        ];
      } else {
        this.searchResult = [];
      }
    },
  },
};
</script>

<style scoped>

/*>>>.van-address-edit>.van-address-edit__fields>.van-field:nth-of-type(1),*/
/*>>>.van-address-edit>.van-address-edit__fields>.van-field:nth-of-type(2),*/
/*>>>.van-cell__value--alone,*/
/*>>>.van-address-edit__buttons*/
/*{*/
/*  display: none;*/
/*}*/
</style>
