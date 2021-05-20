<template>
  <div class="cart">
    <van-sticky>
      <van-button type="danger" style="width: 100%"> 购物车 </van-button>
    </van-sticky>

    <van-card
      :num="item.goodNum"
      :price="item.price"
      :desc="item.desc"
      :title="item.title"
      :thumb="item.img"
      v-for="(item, index) in cartGoods"
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
    <van-submit-bar
      :price="3050"
      button-text="提交订单"
      @submit="onSubmit"
      class="van-submit-bar"
    >
      <van-checkbox v-model="checked">全选</van-checkbox>
    </van-submit-bar>
  </div>
</template>
<script>
import { get } from "../utils/http";
export default {
  props: {},
  data() {
    return {
      active: 0,
      show: false,
      value: null,
      checked: false,
      cartGoods: [],
    };
  },
  methods: {
    onSubmit() {},
  },
  created() {
    let cartArr = JSON.parse(sessionStorage.getItem("cartGoods")) || [];
    this.cartGoods = cartArr;
  },
};
</script>
<style scoped>
.van-submit-bar {
  bottom: 50px;
}
.cart {
  padding-bottom: 100px;
}
</style>
