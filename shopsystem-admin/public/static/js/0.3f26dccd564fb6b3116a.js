webpackJsonp([0],{beoU:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("mvHQ"),r=n.n(i),s=n("Dd8w"),o=n.n(s),a={name:"Swiper",data:function(){return{SlideCount:0,TotalWidth:0,SwiperStyle:{},CurrentIndex:1,Scrolling:!1,firstWidth:document.body.offsetWidth,isResize:!1}},props:{Interval:{type:Number,default:3e3},TransitionTime:{type:Number,default:400},MoveRatio:{type:Number,default:.25},ShowIndicator:{type:Boolean,default:!1}},created:function(){},mounted:function(){var t=this;setTimeout(function(){t.handleDom(),t.startTimer()},300);var e=this;window.onresize=function(){e.firstWidth=document.body.offsetWidth}},watch:{firstWidth:function(){if(!this.isResize){this.isResize=!0;var t=this;setTimeout(function(){var e=document.querySelector(".swiper");t.TotalWidth=e.offsetWidth,t.setTransform(-t.TotalWidth*t.CurrentIndex),t.isResize=!1},t.TransitionTime)}}},methods:{startTimer:function(){var t=this;this.setTimer=setInterval(function(){t.CurrentIndex++,t.startScrolling(-t.CurrentIndex*t.TotalWidth)},this.Interval)},stopTimer:function(){clearInterval(this.setTimer)},handleDom:function(){var t=document.querySelector(".swiper"),e=t.getElementsByClassName("slide");if(this.SlideCount=e.length,this.SlideCount>1){var n=e[0].cloneNode(!0),i=e[this.SlideCount-1].cloneNode(!0);t.insertBefore(i,e[0]),t.appendChild(n),this.TotalWidth=t.offsetWidth,this.SwiperStyle=t.style}this.setTransform(-this.TotalWidth)},setTransform:function(t){this.SwiperStyle.transform="translate3d("+t+"px, 0, 0)",this.SwiperStyle["-webkit-transform"]="translate3d("+t+"px), 0, 0",this.SwiperStyle["-ms-transform"]="translate3d("+t+"px), 0, 0"},startScrolling:function(t){this.Scrolling=!0,this.SwiperStyle.transition="transform "+this.TransitionTime+"ms ease",this.setTransform(t),this.checkPosition(),this.Scrolling=!1},checkPosition:function(){var t=this;setTimeout(function(){t.SwiperStyle.transition="",t.CurrentIndex>=t.SlideCount+1?(t.CurrentIndex=1,t.setTransform(-t.CurrentIndex*t.TotalWidth)):t.CurrentIndex<=0&&(t.CurrentIndex=t.SlideCount,t.setTransform(-t.CurrentIndex*t.TotalWidth))},this.TransitionTime)},touchStart:function(t){this.Scrolling||(this.stopTimer(),this.startX=t.touches[0].pageX)},touchMove:function(t){this.currentX=t.touches[0].pageX,this.distance=this.currentX-this.startX;var e=-this.CurrentIndex*this.TotalWidth+this.distance;this.setTransform(e)},touchEnd:function(t){var e=Math.abs(this.distance);0!==e&&(this.distance>0&&e>this.TotalWidth*this.MoveRatio?this.CurrentIndex--:this.distance<0&&e>this.TotalWidth*this.MoveRatio&&this.CurrentIndex++,this.startScrolling(-this.CurrentIndex*this.TotalWidth),this.startTimer())}}},u={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"my-swiper"}},[n("div",{staticClass:"swiper",on:{touchstart:t.touchStart,touchmove:t.touchMove,touchend:t.touchEnd}},[t._t("default")],2),t._v(" "),n("div",{staticClass:"indicator"},t._l(t.SlideCount,function(e,i){return n("div",{key:i,staticClass:"indi-item",class:{indiActive:i===t.CurrentIndex-1}})}),0)])},staticRenderFns:[]};var d=n("VU/8")(a,u,!1,function(t){n("pRk9")},"data-v-4c9b3244",null).exports,c={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"slide"},[this._t("default")],2)},staticRenderFns:[]};var l=n("VU/8")({name:"SwiperItem"},c,!1,function(t){n("g5D5")},"data-v-304045c3",null).exports,h=n("3pLw"),f={components:{Swiper:d,SwiperItem:l},data:function(){return{active:0,banners:[],goods:[]}},created:function(){var t=this;Object(h.a)().then(function(e){t.banners=e}),Object(h.a)("/goodsInfo").then(function(e){t.goods=e})},props:{list:{default:function(){return[{id:"1",name:"张三",tel:"13000000000",task:"拯救世界",isFinish:!0},{id:"2",name:"小四",tel:"12930",task:"获得吉尼斯纪录",isFinish:!1}]}}},methods:{intoCart:function(t){var e=JSON.parse(sessionStorage.getItem("cartGoods"))||[];console.log(e);var n=this.goods.findIndex(function(e){return e.id===t}),i=e.findIndex(function(e){return e.id===t});-1===i?e.push(o()({goodNum:1},this.goods[n])):e[i].goodNum++,sessionStorage.setItem("cartGoods",r()(e))}}},m={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("van-sticky",[n("van-button",{staticStyle:{width:"100%"},attrs:{type:"danger"}},[t._v("商品推荐")])],1),t._v(" "),n("swiper",t._l(t.banners,function(t,e){return n("swiper-item",{key:e},[n("img",{attrs:{src:t.img,alt:""}})])}),1),t._v(" "),t._l(t.goods,function(e,i){return n("van-card",{key:i,attrs:{num:e.num+" 剩余储量",price:e.price,desc:e.desc,title:e.title,thumb:e.img},scopedSlots:t._u([{key:"tags",fn:function(){return t._l(e.keyWord,function(e,i){return n("van-tag",{key:i,attrs:{plain:"",type:"danger"}},[t._v(t._s(e))])})},proxy:!0},{key:"footer",fn:function(){return[n("van-button",{attrs:{size:"mini"},on:{click:function(n){return t.intoCart(e.id)}}},[t._v("加入购物车")])]},proxy:!0}],null,!0)})})],2)},staticRenderFns:[]};var p=n("VU/8")(f,m,!1,function(t){n("nKxA")},"data-v-236ad048",null);e.default=p.exports},g5D5:function(t,e){},mvHQ:function(t,e,n){t.exports={default:n("qkKv"),__esModule:!0}},nKxA:function(t,e){},pRk9:function(t,e){},qkKv:function(t,e,n){var i=n("FeBl"),r=i.JSON||(i.JSON={stringify:JSON.stringify});t.exports=function(t){return r.stringify.apply(r,arguments)}}});
//# sourceMappingURL=0.3f26dccd564fb6b3116a.js.map