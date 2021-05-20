<template>
  <div>
    <van-sticky>
      <van-button type="danger" style="width: 100%">商品推荐</van-button>
    </van-sticky>
    <swiper>
      <swiper-item v-for="(item, index) in banners" :key="index">
        <img :src="item.img" alt="" />
      </swiper-item>
    </swiper>

    <van-card
      :num="item.num + ' 剩余储量'"
      :price="item.price"
      :desc="item.desc"
      :title="item.title"
      :thumb="item.img"
      v-for="(item, index) in goods"
      :key="index"
    >
      <template #tags>
        <van-tag
          plain
          type="danger"
          v-for="(item, index) in item.keyWord"
          :key="index"
          >{{ item }}</van-tag
        >
      </template>
      <template #footer>
        <van-button size="mini" @click="intoCart(item.id)"
          >加入购物车</van-button
        >
      </template>
    </van-card>
  </div>
</template>
<script>
import { Swiper, SwiperItem } from "./Swiper/useSwiper";
import { get } from "../utils/http";
export default {
  components: {
    Swiper,
    SwiperItem,
  },
  data() {
    return {
      active: 0,
      banners: [],
      goods: [],
    };
  },
  created() {
    get().then((res) => {
      this.banners = res;
    });
    get("/goodsInfo").then((res) => {
      this.goods = res;
    });
  },
  props: {
    list: {
      default() {
        return [
          {
            id: "1",
            name: "张三",
            tel: "13000000000",
            task: "拯救世界",
            isFinish: true,
          },
          {
            id: "2",
            name: "小四",
            tel: "12930",
            task: "获得吉尼斯纪录",
            isFinish: false,
          },
        ];
      },
    },
  },
  methods: {
    intoCart(id) {
      let cartArr = JSON.parse(sessionStorage.getItem("cartGoods")) || [];
      console.log(cartArr);
      let index = this.goods.findIndex((value) => value.id === id);
      let cartIndex = cartArr.findIndex((value) => value.id === id);
      if (cartIndex === -1) {
        cartArr.push({
          goodNum: 1,
          ...this.goods[index],
        });
      } else {
        cartArr[cartIndex].goodNum++;
      }

      sessionStorage.setItem("cartGoods", JSON.stringify(cartArr));
    },
  },
};
</script>
<style scoped>
.todo-container li {
  border: solid 1px white;
  background-color: beige;
  margin-top: 1em;
  padding: 0.2em;
}
.main {
  font-size: 0.7em;
}
</style>
