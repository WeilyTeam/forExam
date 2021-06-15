<template>
  <div>
    <van-sticky>
      <van-button type="danger" style="width: 100%">我的信息</van-button>
    </van-sticky>

    <van-contact-card
      type="edit"
      :name="user.username"
      :tel="user.phone"
      @click="showMore"
    />
    <van-contact-list
      v-model="chosenContactId"
      :list="list"
      default-tag-text="默认"
      v-if="isEdit"
      @Add="onAdd"
      class="van-contact-list"
    />

    <van-list :finished="finished">
      <van-cell v-for="(item,index) in listName" :key="item" @click="test(index)" :title="item"/>
    </van-list>


  </div>
</template>
<script>
import {Notify} from "vant";

export default {
  props: {},
  data() {
    return {
      isEdit: false,
      active: 0,
      loading: false,
      finished: false,
      listName: ["收货地址", "退出登录", "意见反馈"],
      chosenContactId: "2",
      user: {},
      list: [

      ],
    };
  },
  computed: {
    showWho() {
      return {
        name: "张三",
        tel: "13000000000",
      };
    },
  },
  methods: {
    showMore() {
      this.isEdit = !this.isEdit;
    },
    async logout() {
      // console.log('我在这');
      //  if (localStorage.getItem('token')) {
        localStorage.clear();
        // const res = await this.$http.deleteLogout();

        await this.$router.push('/');
      // }
    },
    test(t) {
      switch (t) {
        case 0:
          Notify({type: 'success', message: '点击上方'})
          break;
        case 1:
          this.logout();
          break;
        case 2:
          Notify({type: 'warning', message: '暂未开通该功能'})
          break;
        default:
          break;
      }
      // console.log(t)
    },
    onAdd() {

    }

  },
  async created() {
    let userInfo = await this.$http.getUserinfo();
    this.user = userInfo.data[0];
    const res = await this.$http.getMyAddress();
    const user = await this.$http.getUserinfo();
    console.log(user)
    let i = res.data.length;
    for (let j = 1; j<= i; j++) {
      console.log(res.data)
      if (j == 1) {
        this.list.push({id: j - 1, name: user.data[0].username, tel: res.data[j - 1].address, isDefault: true})
      } else {
        this.list.push({id: j - 1, name: user.data[0].username, tel: res.data[j - 1].address})
      }
    }

  }
};
</script>
<style scoped>
.todo-container li {
  border: solid 1px;
  background-color: beige;
  margin-top: 1em;
  border-radius: 2em;
  padding: 1em;
}

.van-contact-list >>> .van-contact-list__bottom {
  display: none;
}

.van-contact-list {
  padding-bottom: 20px;
}
</style>
