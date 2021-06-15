<template>
  <div class="cart">
    <van-sticky>
      <van-button type="danger" style="width: 100%"> 购物车</van-button>
    </van-sticky>

    <van-card
      :num="item.amount"
      :price="item.price"
      :desc="item.product_desc"
      :title="item.product_name"
      :thumb="item.image"
      v-for="(item, index) in cartGoods"
      :key="index"
    >
      <template #tags>
        <van-tag
          plain
          type="danger"
          v-for="(item, index) in item.keyWord"
          :key="index"
        >{{ item }}
        </van-tag
        >
      </template>

    </van-card>
    <van-submit-bar
      :price="totalPrice"
      button-text="提交订单"
      @submit="onSubmit"
      class="van-submit-bar"
    >

      <van-checkbox v-model="checked">全选</van-checkbox>
    </van-submit-bar>

    <van-submit-bar
      button-text="删除"
      @submit="onDelete"
      class="van-submit-bar1"
    >

    </van-submit-bar>


  </div>
</template>
<script>

export default {
  props: {},
  data() {
    return {
      active: 0,
      show: false,
      value: null,
      checked: false,
      cartGoods: [],
      totalPrice: 0
    };
  },
  methods: {
    onSubmit() {

    },
    async onDelete() {
      if (this.checked) {
        let size = this.cartGoods.length;
        let cartCopy = this.cartGoods;
        this.cartGoods = [];
        this.totalPrice = 0;
        for (let i = 0; i < size; i++) {
          await this.$http.deleteMyCart({cartId: cartCopy[i].cart_id});
        }
      }
    }
  },
  async created() {
    // let cartArr = JSON.parse(sessionStorage.getItem("cartGoods")) || [];
    let cartArr = await this.$http.getMyCart();
    this.cartGoods = cartArr.data;
    console.log(this.cartGoods.length)
    for (let i = 0; i < this.cartGoods.length; i++) {
      this.totalPrice += ~~this.cartGoods[i].price * 100;
    }
  },
};

</script>
<style scoped>
.van-submit-bar {
  bottom: 100px;

}

.van-submit-bar1 {
  bottom: 50px;
}

.cart {
  padding-bottom: 100px;
}
</style>
