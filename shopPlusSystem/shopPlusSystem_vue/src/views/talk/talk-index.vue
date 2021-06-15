<template>
  <div>
    <header>
      <h4 style="text-align:center;font-size:28px;">
        消息中心
      </h4>
    </header>
    <main>
      <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
        <van-list
          v-model="loading"
          :finished="finished"
          finished-text="没有更多了"
          @load="onLoad"
        >
          <div v-for="item in list"
               class="chat-btn"
               :key="item.user_id"
               @click="handleToTalkDetail"
          >

            <van-image
              id="avatar"
              round
              fit="cover"
              width="0.6rem"
              height="0.6rem"
              :src="item.user_avatar"
            />
            <span class="badge">{{ item.user_name }}</span>

          </div>
        </van-list>
      </van-pull-refresh>
    </main>
    <footer>
      <footer_tabBar :active="3"></footer_tabBar>
    </footer>
  </div>
</template>

<script>
import footer_tabBar from "../../components/footer-tabBar";

export default {
  name: "talk-index",
  data() {
    return {
      storename: ["咸鱼润", "下手"],
      list: [],
      loading: false,
      finished: false,
      refreshing: false,
    };
  },
  mounted() {
    this.setChatList()
  },
  methods: {
    handleToTalkDetail(live_id) {
      this.$router.push({
        path: "/talk-detail", meta: {
          live_id
        }
      })
    },
    async setChatList(){
      let res =await this.$http.getChatList({})
      console.log(res)
      this.list = res.list
    },
    onLoad() {
      setTimeout(() => {
        if (this.refreshing) {
          this.refreshing = false;
        }

        this.loading = false;

        if (this.list.length >= 10) {
          this.finished = true;
        }
      }, 1000);
    },
    onRefresh() {
      // 清空列表数据
      this.finished = false;

      // 重新加载数据
      // 将 loading 设置为 true，表示处于加载状态
      this.loading = true;
      this.onLoad();
    },
  },
  components: {footer_tabBar},
};
</script>

<style scoped>
.chat-btn {

}
.badge {
  font-size: 12px;
  line-height: 12px;
  float: right;
}
</style>
