<template>
  <div>
    <header class="headerNav">
      <img class="logo" src="../../assets/logo.png"/>
      <div class="centerFix">
        <router-link to="/search">
          <van-search
            style="height: 100%"
            input-align="center"
            v-model="value"
            @click="goSearch"
            disabled
            placeholder="商品搜索"
          />
        </router-link>
      </div>
    </header>
    <main>
      <div class="swiper">
        <van-swipe class="my-swipe" :autoplay="3000">
          <van-swipe-item
            class="van-swipe-item"
            v-for="(hot_product, index) in images"
            :key="hot_product.product_img"
          >
            <img v-lazy="hot_product.product_img"/>
          </van-swipe-item>
        </van-swipe>
      </div>
      <div class="advertise">
        <van-grid :column-num="3" icon-size="10px">
          <van-grid-item icon="smile" text="限时秒杀"/>
          <van-grid-item icon="service" text="限量抢购"/>
          <van-grid-item icon="friends" text="砍价聚惠"/>
        </van-grid>
      </div>
      <div class="hotProduct">
        <p class="desText">热销商品</p>

        <van-grid clickable :column-num="2" square>
          <van-grid-item
            v-for="banner in hotBanner"
            :key="banner.product_img"
          >
            <van-image
              :src="banner.product_img"
            />
          </van-grid-item>
        </van-grid>
      </div>
      <p class="desText">爆款推荐</p>
      <div
        v-for="(info, index) in productList"
        :key="info.product_id"
        class="productList"
      >

        <router-link to="/product-detail">
          <van-card
            :num="info.product_number"
            tag="火爆售卖"
            :price="info.product_price"
            :desc="info.product_desc"
            :title="info.product_name"
            :thumb="info.product_img"

          />
        </router-link>
      </div>
    </main>

    <!--底部导航 -->
    <footer_tabBar :active="0"></footer_tabBar>
  </div>
</template>

<script>
import footer_tabBar from "../../components/footer-tabBar";

export default {
  name: "home-index",
  data() {
    return {
      value: "",
      images: [],
      productList: [],
      hotBanner: []
    };
  },
  components: {footer_tabBar},
  methods: {
    goSearch() {
    },
    async setHotList() {
      let token = localStorage.getItem("token");
      let res = await this.$http.getHotList({token});
      this.productList = res.list
      // console.log(res)
    },
    async setBanner() {
      let token = localStorage.getItem("token");

      let res = await this.$http.getBanner({token});
      // console.log(res)
      this.images = res.list
    },
    async setHotBanner() {
      let token = localStorage.getItem("token");

      let res = await this.$http.getHotBanner({token});
      console.log(res)
      this.hotBanner = res.list
    }
  },
  mounted() {
    this.setHotList()
    this.setBanner()
    this.setHotBanner()
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.desText {
  font-size: 0.3rem;
  padding: 0.1rem;
  color: grey;
  background-color: #ffffff;
}

.productList * {
  margin: 0 0 0.1rem 0;
  border-radius: 0.1rem;
}

.headerNav {
  background: #ffffff;
  z-index: 10;
  position: sticky;
  top: 0;
  display: flex;
  align-self: center;
  justify-content: center;
  height: 1rem;
}

.logo {
  width: 0.6rem;
  height: 0.6rem;
  display: inline-block;
  margin: 0.1rem 0 0 0.1rem;

}

.centerFix {
  flex-grow: 1;
}

.my-swipe .van-swipe-item {
  height: 5rem;
}

.van-swipe-item > img {
  object-fit: cover;
  height: 100%;
  width: 100%;
}

@media screen and (max-width: 400px) {
  .my-swipe .van-swipe-item {
    height: 3.5rem;
  }
}
</style>
