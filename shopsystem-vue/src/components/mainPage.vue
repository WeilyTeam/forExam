<template>
  <div>
    <van-sticky>
      <van-button type="danger" style="width: 100%">商品推荐</van-button>
    </van-sticky>
    <swiper>
      <swiper-item v-for="(item, index) in banners" :key="index">
        <img :src="item.img" alt=""/>
      </swiper-item>
    </swiper>

    <van-card
      :num="item.stock + ' 剩余储量'"
      :price="item.price"
      :desc="item.product_desc"
      :title="item.product_name"
      :thumb="item.image"
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
        <van-button size="mini" @click="intoCart(item.product_id, item.price,index)"
          >加入购物车</van-button
        >
      </template>
    </van-card>
  </div>
</template>
<script>
import { Swiper, SwiperItem } from "./Swiper/useSwiper";
import { get } from "../utils/http"
import {Notify} from "vant";

export default {
  components: {
    Swiper,
    SwiperItem,
  },
  data() {
    return {
      active: 0,
      banners: [{img: 'https://tse2-mm.cn.bing.net/th/id/OIP.wzzaurqikEdc67s1MQ0wegHaGo?w=188&h=180&c=7&o=5&dpr=1.25&pid=1.7'},{img: 'https://tse2-mm.cn.bing.net/th/id/OIP.wzzaurqikEdc67s1MQ0wegHaGo?w=188&h=180&c=7&o=5&dpr=1.25&pid=1.7'}],
      goods: [],
    };
  },
  async created() {
    let allProducts = await this.$http.getAllProducts();

    this.goods = allProducts.data;
    console.log(this.goods)
  },
  props: {
    list: {
      default() {
        return [
        ];
      },
    },
  },
  methods: {
    async intoCart(id, price,index) {
      let res = await this.$http.addToMyCart({amount: 1, productId: id, totalPrice: 1 * price, price: price});
      if (res.ret === 0) {
        Notify({type: 'success', message:'加入购物车成功'});
      }
      this.goods[index].stock -= 1;

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
