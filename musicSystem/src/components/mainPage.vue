<template>
  <div>
    <van-sticky>
    <van-button type="info" style="width: 100%;">音乐之声</van-button>
    </van-sticky>

    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="item in songList[0].swiperImg" :key="item">
        <img :src="item" alt="">
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
          :thumb="item.logoImg"
          v-for="(item,index) in songList"
          :key="index"
          @click="clickSong(index)"
        />
      </van-collapse-item>
    </van-collapse>

    <audio :src="precentSong" ref="audioRef">
      当前浏览器不支持audio
    </audio>

  </div>
</template>
<script>

import {get} from "../utils/http";
export default {
  data() {
    return {
      test:0,
      active: 0,
      checked: false,
      defaultVal: 0,
      isPlay:false,
      precentIndex:0,
      songList:[{
        link:"",
        logoImg: "",
        swiperImg: [],
        song:"",
        singer: ""
      }],
      activeNames: ['1'],
    }
  },

  computed:{
    precentSong(){
      return this.songList[this.precentIndex].link;
    },
    iconName(){
      return this.checked===true?"pause":"play";
    },
  },
  created() {
    get().then(res=>{
      this.songList=res;
      console.log(this.songList);
    })
  },

  mounted() {
    this.audio=this.$refs.audioRef;
    console.log(this.audio);
  },

  methods:{

    clickSong(index){
      console.log('播放第'+(index+1)+"首歌")
      this.precentIndex=index
      this.toPlaySong();
      this.isPlay=true;
      this.checked=true;
      this.audio.currentTime=0;
    },

    onChange(index) {
      this.checked=true;
      let ratio=this.audio.duration*(index/100);
      this.audio.currentTime=ratio;
      this.audio.play();
      this.isPlay=true;
      console.log(this.defaultVal)
    },

    nextSong(){
      this.precentIndex++;
      this.toPlaySong();
      this.isPlay=true;
      this.checked=true;
      this.audio.currentTime=0;
    },
    lastSong(){
      if(this.precentIndex>0){
        this.precentIndex--;
        this.toPlaySong();
        this.checked=true;
        this.isPlay=true;
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
</style>
