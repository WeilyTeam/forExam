<template>
  <div>
  <van-sticky>
    <van-button type="info" style="width: 100%;">参与分享吧</van-button>
  </van-sticky>

  <van-contact-card type="edit" :name="i.userName" :tel="i.userPhone"  v-for="(i,index) in users" :key="index"
  @click="clickuser(index)"
  />
  </div>
</template>

<script>
import {getPublicUser} from "../utils/query";

export default {
  name: "share",
  data(){
    return{
      users:[]
    }
  },
  created() {
    getPublicUser().then(res=>{
      console.log(res)
      this.users=res.data;
    })
  },
  methods:{
    clickuser(index){
      console.log(5)
      this.$router.push({
        name: 'home',
        params: {
          id: this.users[index].userId
      }
      })
    }
  }
}
</script>

<style scoped>

</style>
