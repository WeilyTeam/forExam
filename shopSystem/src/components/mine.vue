<template>
  <div>
    <van-sticky>
      <van-button type="danger" style="width: 100%">我的信息</van-button>
    </van-sticky>

    <van-contact-card
      type="edit"
      :name="showWho.name"
      :tel="showWho.tel"
      @click="showMore"
    />
    <van-contact-list
      v-model="chosenContactId"
      :list="list"
      default-tag-text="默认"
      v-if="isEdit"
      class="van-contact-list"
    />

    <van-list :finished="finished">
      <van-cell v-for="item in listName" :key="item" :title="item" />
    </van-list>
  </div>
</template>
<script>
export default {
  props: {},
  data() {
    return {
      isEdit: false,
      active: 0,
      loading: false,
      finished: false,
      listName: ["我的收藏", "收货地址", "快递信息", "推出登录", "意见反馈"],
      chosenContactId: "1",
      list: [
        {
          id: "1",
          name: "张三",
          tel: "13000000000",
          isDefault: true,
        },
        {
          id: "2",
          name: "李四",
          tel: "1310000000",
        },
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
  },
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
