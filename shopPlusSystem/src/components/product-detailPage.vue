<template>
  <div>
    <van-icon @click="onBackward" name="arrow-left"/>
    <main>
      <div class="banner-image">
        <van-swipe class="my-swipe">
          <van-swipe-item
            class="van-swipe-item"

          >
            <img v-lazy="goods.product_img"/>
          </van-swipe-item>
        </van-swipe>
      </div>

      <div class="info showboard">
        <p class="price">￥{{ goods.product_price }}</p>
        <p class="title">{{ goods.product_name }}</p>

      </div>

      <div class="divider"></div>

      <div class="team">
        <div class="team-title">
          <p class="title" style="left: 0">加入拼团</p>
          <p class="title" style="right: 0">更多</p>
        </div>
        <div class="team-list">
          <van-image
            v-for="user in userList"
            round
            :key="user.user_id"
            fit="cover"
            width="1rem"
            height="1rem"
            :src="user.user_avatar"
          />
        </div>
      </div>

      <div class="divider"></div>

      <div class="comment">
        <div class="team-title">
          <p class="title" style="left: 0">评价</p>
          <p class="title" style="right: 0">查看全部</p>
        </div>
        <div class="comment-list"
             v-for="comment in commentList"
            :key="comment.comment_id"
        >
          <van-image
            round
            fit="cover"
            width="1rem"
            height="1rem"
            :src="comment.user_avatar"
          />
          <p class="comment">{{comment.comment_info.comment_content}}</p>
        </div>
      </div>

      <div class="divider"></div>

      <div class="detail">
        <van-image
          fit="cover"
          width="100%"
          height="100%"
          v-for="item in detailImg"
          :key="item"
          :src="item"
        />
      </div>
    </main>
    <footer>
      <van-goods-action>
        <van-goods-action-icon icon="chat-o" text="客服"/>
        <van-goods-action-icon icon="shop-o" text="店铺"/>
        <van-goods-action-button
          color="#49B259"
          type="warning"
          text="单独购买"
        />
        <van-goods-action-button
          color="#69FF80"
          type="danger"
          text="发起拼团购买"
        />
      </van-goods-action>
    </footer>
  </div>
</template>
<script>
export default {
  name: "product-detailPage",
  data() {
    return {
      goods: {},
      images: [],
      detailImg: [],
      userList: [],
      commentList: [],
    };
  },
  mounted() {
    this.setProductDetail()
    this.setProductDetailComment()
    this.setProductDetailGoods()
    this.setProductUsers()
  },
  methods: {
    onBackward() {
      this.$router.go(-1);
    },
    async setProductDetail() {
      let res = await this.$http.getProductDetail({});
      // console.log(res)
      this.goods = res.product_info
    },
    async setProductDetailComment() {
      let res = await this.$http.getProductDetailComment({});
      console.log(res)
      this.commentList = res.list
    },
    async setProductDetailGoods() {
      let res = await this.$http.getProductDetailGoodsImg({});
      this.detailImg = res.list
    },
    async setProductUsers() {
      let res = await this.$http.getProductUsers({});
      this.userList = res.list;
    }
  },
};
</script>
<style scoped>
.divider {
  height: 0.1rem;
  width: 100%;
  background: #b3b3b369;
}

.price {
  padding: 0.1rem;
  color: red;
  font-size: 0.5rem;
}

.team-title {
  display: flex;
  position: relative;
  width: 100%;
  justify-content: space-between;
}

.team-list {
  text-align: center;
}

.comment-list p {
  font-size: 0.3rem;
  padding: 0.5rem;
}

.detail {
  margin-bottom: 2rem;
}

.title {
  color: #000000;
  font-weight: bold;
  font-size: 0.3rem;
  margin: 0.1rem;
}

/* override Vant-ui */
.van-tag {
  margin: 0.1rem;
}

.van-icon {
  font-size: 0.6rem;
  background: #59595949;
  color: #eeeeee;
  border-radius: 50%;
  position: absolute;
  z-index: 10;
  margin: 0.2rem;
}

.my-swipe .van-swipe-item {
  height: 7rem;
}

.van-swipe-item > img {
  object-fit: cover;
  height: 100%;
  width: 100%;
}
.comment-list{
  display: flex;
  align-content: center;
  justify-content: flex-start;
}
.comment{

}
</style>
