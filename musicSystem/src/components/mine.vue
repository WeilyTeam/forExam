<template>
 <div>
   <van-sticky>
     <van-button type="info" style="width: 100%;">我的信息</van-button>
   </van-sticky>

   <van-contact-card type="edit" :name="myInfo.userName" :tel="myInfo.userPhone" :editable="false" />

   <div style="margin: 30px">
     <van-switch :value="checked" @input="onInput" />
     我的歌单状态:{{checked?"public":"私有"}}
   </div>
  <van-button style="float:right" type="danger" @click="logout">退出登录</van-button>
   <van-uploader  :after-read="afterRead" >
     <van-button icon="plus" style="width: 100%" type="primary">上传我的歌曲</van-button>
   </van-uploader>
  </div>
</template>
<script>


import acount from "./acount";
import {post} from "../utils/http";
import { Dialog } from 'vant';
import {getStatus,getProfile,changeStatus} from "../utils/query";

export default {
  props: {

  },
  data(){
    return {
      isEdit:false,
      active:0,
      loading: false,
      finished: false,
      chooseAcount:false,
      checked: true,
      myInfo: {}
    }
  },
  components:{

  },
  created() {
    getProfile().then(res=>{
      console.log(res);
      this.myInfo=res.data[0];
    }).catch(err=>{
      console.log(err);
    })
  },
  methods:{
    onSelect(){
      // this.chooseAcount=false
    },
    click(){
      this.chooseAcount=!this.chooseAcount
    },
    onDelete() {

    },
    afterRead(myfile) {
      // 此时可以自行将文件上传至服务器

      let file=new FormData();
      file.append("file",myfile.file);
      // console.log(myfile)
      console.log(file)
      post("/user/fileupload", {file},{
        headers: {'Content-Type': 'multipart/form-data'}
      }).then(res=>{
        console.log(res)
      }).catch(err=>{
        console.log(err);
      })

    },
    onInput() {
      Dialog.confirm({
        title: '提醒',
        message: '是否切换共享状态？',
      }).then(() => {
        this.checked = !this.checked;

        changeStatus().then(res=>{
          console.log(res).catch(err=>{
            console.log(err);
      })
      })
      });
    },
    async logout(){
      await localStorage.clear()
      this.$router.replace("/")
    }

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
.van-contact-list>>>.van-contact-list__bottom{
  display: none;
}
.van-contact-list{
  padding-bottom: 20px;
}
</style>
