<template>
  <div class="body">
    <header style="position: sticky; top: 0px">
      <van-icon
        v-show="storeList.length > 5"
        class="moreStore"
        name="arrow"
      />
      <van-icon
        v-show="storeList.length > 5"
        class="moreStore"
        style="left: 0"
        name="arrow-left"
      />
      <h2 style="text-align:center;font-size: 0.3rem; padding: 0.3rem">关注的直播</h2>
      <div class="staredStore">
        <div
          class="storeComponent"
          v-for="user in storeList"
          :key="user.user_id"
        >
          <van-image
            round
            fit="cover"
            width="0.8rem"
            height="0.8rem"
            :src="user.user_avatar"
          />
          <p>{{ user.user_name }}</p>
        </div>
      </div>
    </header>
    <main class="mainView">
      <van-tabs color="green" v-model="active" swipeable sticky animated>
        <van-tab
          v-for="index in ['热门','所有']"
          :key="index"
          :title="index"
        >
          <van-grid :border="false" :column-num="2">
            <van-grid-item v-for="live in live_list" :key="live.live_id" >
              <router-link to="/live">
                <van-image
                  :src="live.live_poster"
                />
                <h3 class="order">{{live.live_name}}</h3>
              </router-link>
            </van-grid-item>
          </van-grid>
        </van-tab>
      </van-tabs>
    </main>
    <footer>
      <footer_tabBar :active="1"></footer_tabBar>
    </footer>
  </div>
</template>

<script>
import footer_tabBar from "../../components/footer-tabBar";

export default {
  name: "live-index",
  data() {
    return {
      storeList: [],
      active: "",
      live_list: []
    };
  },
  components: {footer_tabBar},
  methods: {
    async setStoreList() {
      let res = await this.$http.getStoreList()
      console.log(res)
      this.storeList = res.list
    },
    async setLiveList() {
      let res = await this.$http.getLiveList()
      console.log(res)
      this.live_list = res.list
    },
  },
  mounted() {
    this.setStoreList()
    this.setLiveList()
  }
};
</script>

<style scoped>
.body {
  background: #fafafa;
}

.moreStore {
  z-index: 10;
  position: absolute;
  font-size: 0.3rem;
  bottom: 40%;
  right: 0;
}

.staredStore {
  font-size: 0.2rem;
  text-align: center;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  height: 2rem;
  overflow: scroll;
}

.staredStore > * {
  padding: 0.25rem;
}

.mainView {
  height: 100vh;
  margin-top: 0.2rem;
}

.order {
  font-size: 14px;
  text-align: center;
  color: #93c5f9;
}
</style>
