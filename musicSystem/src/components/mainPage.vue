<template>
  <div>
    <van-sticky>
    <van-button type="info" style="width: 100%;">音乐之声</van-button>
    </van-sticky>

    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item >
        <img :src="songList[precentIndex].imginfo" alt="" style="height: 150px">
      </van-swipe-item>
    </van-swipe>

    <van-row gutter="30" type="flex" justify="center" style="margin: 10px">
      <van-col span="8" style="text-align: right">
        <van-icon name="arrow-left" size="40" @click="lastSong"/>
      </van-col>
      <van-col span="8" style="text-align: center" class="switchBox">
        <van-switch v-model="checked" size="31px" @click="toPlaySong"/>
        <van-icon :name="iconName" />
      </van-col>
      <van-col span="8">
        <van-icon name="arrow" size="40" @click="nextSong"/>
      </van-col>
    </van-row>

    <van-slider v-model="defaultVal" @change="onChange" style="margin: 20px 0"/>

    <van-collapse v-model="activeNames" style="padding-bottom: 50px">
      <van-collapse-item title="歌曲列表" name="1">
        <van-card
          :desc="'原唱：'+item.singer"
          :title="item.song"
          :thumb="songList[index].imginfo"
          v-for="(item,index) in songList"
          :key="index"
          @click="clickSong(index)"
          :class="{activeCard:precentIndex===index}"
        />
      </van-collapse-item>
    </van-collapse>

    <audio :src="precentSong" ref="audioRef">
      当前浏览器不支持audio
    </audio>
    <div class="backtome" v-if="isOther" @click="backtome">
      分享列表
      <van-icon name="https://b.yzcdn.cn/vant/icon-demo-1126.png" size="30"/>
    </div>
  </div>
</template>
<script>
import {getMySong,PublicUserSong} from "../utils/query";

export default {
  data() {
    return {
      aa:this.active,
      test:0,
      active: 0,
      checked: false,
      defaultVal: 0,
      isPlay:false,
      precentIndex:0,
      songList:[{
        url:"",
        logoImg: "",
        imginfo: "",
        song:"",
        singer: ""
      }],
      activeNames: ['1'],
      isOther:false
    }
  },

  computed:{
    precentSong(){
      return this.songList[this.precentIndex].url;
    },
    iconName(){
      return this.checked===true?"pause":"play";
    },
  },
  created() {
    this.userId=this.$route.params.id;
    if(this.userId){
      this.isOther=true
      PublicUserSong(this.userId).then(res=>{
        this.songList=res.data;
      }).catch(err=>{
        console.log(err);
      })
    }else{
      getMySong().then(res=>{
        this.songList=res.data;
        console.log(this.songList)
      }).catch(err=>{
        console.log(err);
      })
    }
  },

  mounted() {
    this.audio=this.$refs.audioRef;

  },

  methods:{
    clickSong(index){
      this.precentIndex=index
      this.isPlay=false;
      this.checked=false;
      this.audio.currentTime=0;
      setTimeout(this.toPlaySong,150)
    },
    onChange(index) {
      this.checked=true;
      let ratio=this.audio.duration*(index/100);
      this.audio.currentTime=ratio;
      this.audio.play();
      this.isPlay=true;
    },
    nextSong(){
      if(this.precentIndex<this.songList.length) {
        this.precentIndex++;
        this.isPlay=false;
        this.checked=false;
        this.audio.currentTime=0;
      }
    },
    lastSong(){
      if(this.precentIndex>0){
        this.precentIndex--;
        this.checked=false;
        this.isPlay=false;
        this.audio.currentTime=0;
        }
    },
    toPlaySong(){
      this.checked=!this.checked;
      this.isPlay=!this.isPlay;
      let intervalTime;
      if(this.isPlay){
        this.audio.play();
        intervalTime=setInterval(()=>{
          this.defaultVal=this.audio.currentTime/this.audio.duration*100
        },500);
      }else {
        this.audio.pause();
        clearInterval(intervalTime);
      }
    },
    backtome(){
      this.$router.push({
        name:"share"
      })
      // this.$router.push({
      //   name:"home"
      // })
    }
  }
};
</script>
<style scoped>
.todo-container li {
  border: solid 1px white;
  background-color: beige;
  margin-top: 1em;
  padding: .2em;
}
.activeCard{
  border: #666666 1px solid;
}
.main{
  font-size: .7em;
}
.van-badge{
  font-size: 1.5em;
}
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: #39a9ed;
}
.switchBox{
  display: flex;
  align-items: center;
  justify-content: center;
}
.backtome{
  position: fixed;
  bottom: 300px;
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 12px;
  text-align: center;
  border: #666666 1px solid;
  border-radius: 50px;
  height: 60px;
  width: 60px;
  background-color: #ff5777;
  opacity: .5;
}
</style>
