webpackJsonp([0],{"//Vu":function(t,e){},"I/V/":function(t,e){},UWyL:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("Xxa5"),s=n.n(i),a=n("exGp"),r=n.n(a),o={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("ul",{staticClass:"todo-container"},t._l(t.list,function(e,i){return n("li",{key:e+i},[n("el-card",{staticStyle:{"margin-top":"1em"},attrs:{"body-style":{padding:"14px"}}},[n("span",{staticStyle:{"font-size":"14px"}},[t._v(t._s(e.todo_content))]),t._v(" "),e.todo_status?n("van-tag",{attrs:{type:"success"}},[t._v("已完成")]):n("el-tag",{attrs:{size:"mini",plain:"",type:"warning"}},[t._v("未完成")]),t._v(" "),n("span",{staticStyle:{"font-size":"14px",color:"gray",float:"right"}},[t._v(t._s(e.todo_start_time))])],1),t._v(" "),n("el-divider",[n("i",{staticClass:"el-icon-mobile-phone"})])],1)}),0)])},staticRenderFns:[]};var c=n("VU/8")({props:{list:{default:function(){return[]}}}},o,!1,function(t){n("I/V/")},"data-v-483bb7ec",null).exports,l=(n("zNUS").Random,{name:"swipper",data:function(){return{imgList:["http://h2.ioliu.cn/bing/BBNPGrande_ZH-CN4071551965_1920x1080.jpg?imageslim","http://h2.ioliu.cn/bing/SocaCycles_ZH-CN3583247274_1920x1080.jpg?imageslim","http://h2.ioliu.cn/bing/BBNPGrande_ZH-CN4071551965_1920x1080.jpg?imageslim","http://h2.ioliu.cn/bing/SocaCycles_ZH-CN3583247274_1920x1080.jpg?imageslim"]}},computed:{todoImg:function(){}},methods:{handleGetImg:function(){var t=this;return r()(s.a.mark(function e(){return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:case"end":return t.stop()}},e,t)}))()}},mounted:function(){this.handleGetImg()}}),u={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("el-carousel",this._l(this.imgList,function(t){return e("el-carousel-item",{key:t},[e("img",{attrs:{src:t,alt:""}})])}),1)],1)},staticRenderFns:[]};var d={components:{todoList:c,swipper:n("VU/8")(l,u,!1,function(t){n("nb2a")},"data-v-b31a4c18",null).exports},data:function(){return{chosenAddressId:"1",list:[]}},methods:{handleGetList:function(){var t=this;return r()(s.a.mark(function e(){var n,i;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=localStorage.getItem("token"),e.next=3,t.$http.getList({token:n});case 3:i=e.sent,console.log(i),t.list=i.list;case 6:case"end":return e.stop()}},e,t)}))()}},mounted:function(){this.handleGetList()}},p={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("swipper"),this._v(" "),e("todo-list",{attrs:{list:this.list}})],1)},staticRenderFns:[]};var f=n("VU/8")(d,p,!1,function(t){n("//Vu")},"data-v-0d6d11da",null);e.default=f.exports},nb2a:function(t,e){}});
//# sourceMappingURL=0.73ee5df87e64d2620b75.js.map