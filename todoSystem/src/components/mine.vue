<template>
  <div>
    <el-divider><i class="el-icon-mobile-phone"/>我的信息</el-divider>
    <el-card class="box-card">
      <van-contact-card
        type="edit"
        :tel="myInfo.user_mobile"
        :name="myInfo.username"
        :editable="false"/>
    </el-card>

  </div>
</template>
<script>
export default {
  data() {
    return {
      active: 0,
      myInfo: {
        user_id: 1,
        username: "张三",
        user_mobile: "13000000000",
      }
    }
  },
  async mounted() {
    const token = localStorage.getItem("token")
    let res = await this.$http.getUserInfo({token})
    console.log(res)
    this.myInfo = res
    localStorage.setItem("userInfo",res)
  }
};
</script>
<style scoped>
.todo-container li {
  border: solid 1px;
  background-color: beige;
  margin-top: 1em;
  border-radius: 2em;
  padding: 1em;
}
</style>
