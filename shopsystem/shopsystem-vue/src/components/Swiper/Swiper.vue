<template>
  <div id="my-swiper" >
    <div class="swiper" @touchstart="touchStart" @touchmove="touchMove" @touchend="touchEnd">
    <slot></slot>
    </div>

    <div class="indicator">
      <div v-for="(item,index) in SlideCount" class="indi-item" :class="{indiActive:index===CurrentIndex-1}" :key="index"></div>
    </div>
  </div>
</template>

<script>

export default {
  name: "Swiper",
  data(){
    return{
      SlideCount:0,
      TotalWidth:0,
      SwiperStyle:{},
      CurrentIndex:1,
      Scrolling:false,
      firstWidth:document.body.offsetWidth,
      isResize:false
    }
  },
  props:{
    Interval:{
      type:Number,
      default:3000
    },
    TransitionTime:{
      type:Number,
      default: 400
    },
    MoveRatio:{
      type:Number,
      default:0.25
    },
    ShowIndicator:{
      type:Boolean,
      default:false
    }
  },
  created() {

  },
  mounted() {
    setTimeout(()=>{
      this.handleDom();
      this.startTimer();
    },300)
    let _this=this;
    window.onresize=function (){
      _this.firstWidth=document.body.offsetWidth;
      }
  },
  watch:{
    firstWidth:function (){
      if(!this.isResize){
        this.isResize=true;
        let _this=this;
        setTimeout(function (){
          let SwiperEl=document.querySelector(".swiper");
          _this.TotalWidth=SwiperEl.offsetWidth;
          _this.setTransform(-_this.TotalWidth*_this.CurrentIndex);
          _this.isResize=false;
        },_this.TransitionTime);
      }
    }
  },
  methods:{
    startTimer(){
      this.setTimer=setInterval(()=>{

        this.CurrentIndex++;
        this.startScrolling(-this.CurrentIndex*this.TotalWidth);
      },this.Interval)
    },

    stopTimer(){
      clearInterval(this.setTimer);
    },

    handleDom(){
      let SwiperEl=document.querySelector(".swiper");

      let SlideEls=SwiperEl.getElementsByClassName("slide")

      this.SlideCount=SlideEls.length;

      if(this.SlideCount>1){
        let CloneFirst=SlideEls[0].cloneNode(true);
        let CloneLast=SlideEls[this.SlideCount-1].cloneNode(true);
        SwiperEl.insertBefore(CloneLast,SlideEls[0]);
        SwiperEl.appendChild(CloneFirst);
        this.TotalWidth=SwiperEl.offsetWidth;
        this.SwiperStyle=SwiperEl.style;
      }


      this.setTransform(-this.TotalWidth);

    },

    setTransform(Position){
      // this.SwiperStyle.transform=`translateX(${Position}px)`;
      this.SwiperStyle.transform = `translate3d(${Position}px, 0, 0)`;
      this.SwiperStyle['-webkit-transform'] = `translate3d(${Position}px), 0, 0`;
      this.SwiperStyle['-ms-transform'] = `translate3d(${Position}px), 0, 0`;
    },

    startScrolling(CurrentPosition){
      this.Scrolling=true;
      // 'transform '+ this.TransitionTime + 'ms'
      this.SwiperStyle.transition=`transform ${this.TransitionTime}ms ease`;
      this.setTransform(CurrentPosition);

      this.checkPosition();
      this.Scrolling = false;

    },

    checkPosition(){
      setTimeout(()=>{
        this.SwiperStyle.transition="";
        if(this.CurrentIndex>=this.SlideCount+1){
          // this.SwiperStyle.transition="";
          this.CurrentIndex=1;
          this.setTransform(-this.CurrentIndex*this.TotalWidth);
        }
        else if(this.CurrentIndex<=0){
          // this.SwiperStyle.transition="";
          this.CurrentIndex=this.SlideCount;
          this.setTransform(-this.CurrentIndex*this.TotalWidth);
        }
      },this.TransitionTime)
    },

    touchStart(ev){
      if(this.Scrolling)
        return;
      this.stopTimer();
      this.startX=ev.touches[0].pageX;
    },

    touchMove(ev){

      this.currentX=ev.touches[0].pageX;
      this.distance=this.currentX-this.startX;

      let currentPosition=-this.CurrentIndex*this.TotalWidth;
      let moveDestination=currentPosition+this.distance;

      this.setTransform(moveDestination);
    },
    touchEnd(ev){
      let distance=Math.abs(this.distance);

      if(distance===0){
        return;
      }
      else if(this.distance > 0 && distance > this.TotalWidth * this.MoveRatio){
        this.CurrentIndex--;
      }
      else if(this.distance < 0 && distance > this.TotalWidth * this.MoveRatio){
        this.CurrentIndex++;
      }

      this.startScrolling(-this.CurrentIndex * this.TotalWidth);

      this.startTimer();

    }

  }

//待优化问题：1.设置的Scrolling属性没有起到实际作用
//2.问题1导致的触摸事件快速发生时，第一次手动切换轮播图时的timeout中设置过渡时间为0在第二次手动切换的过渡时间内发生，
//导致过渡到一半直接结束动画了。
//3.pc复用未解决
}

</script>

<style scoped>
#my-swiper{
  overflow: hidden;
  position: relative;
}

.swiper{
  display: flex;
}

.indicator{
  position: absolute;
  bottom: 5px;
  left: 0px;
  right: 0px;
  display: flex;
  justify-content: center;

}
.indi-item{
  height: 10px;
  width: 10px;
  border-radius: 5px;
  background-color: rgba(100,100,100,.4);
  margin: 0 5px;
}

.indiActive{
  background-color: rgba(100,100,100,.9);
}
</style>
