<template>
  <div>
    <header>
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
    </header>
    <main>
      <van-tree-select
        height="100vh"
        :items="items"
        :main-active-index.sync="active"
      >
        <template #content>
            <div  v-for="(item,index) in product_info" v-if="active === index">
              <van-image
                v-for="({product_id,product_info},index) in item.info"
                :key="product_id"
                v-if="product_info"
                :src="product_info.product_img"
              />
            </div>
        </template>
      </van-tree-select>
    </main>
    <footer>
      <footer_tabBar :active="2"></footer_tabBar>
    </footer>
  </div>
</template>

<script>
import footer_tabBar from "../../components/footer-tabBar";
export default {
  name: "catalog-index",
  data() {
    return {
      value: "",
      active: 0,
      items: [],
      imgList: [{
        product_id: 1,
        product_img: "https://img.yzcdn.cn/vant/apple-3.jpg"
      }],
      product_info:[],
      timer:1
    };
  },
  mounted() {
    this.getItem()
  },
  methods: {
    async getItem() {
      let token = localStorage.getItem("token");
      let res = await this.$http.getCatalog({token});
      console.log(res)
      this.items = res.item.map(val => {
        return {text: val.type}
      })
      this.product_info = res.item
      console.log(this.items)
      console.log(this.product_info)

    },
    goSearch() {
      // console.log("goSearch!");
    },
  },
  components: {footer_tabBar},
};
</script>

<style scoped>
main {
  box-sizing: border-box;
  position: fixed;
  width: 100%;
}
</style>
