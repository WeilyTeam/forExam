<template>
  <div class="login">
    <van-nav-bar title="注册并登录" />
    <div class="login-container">
      <van-address-edit
        :area-list="areaList"
        show-search-result
        :search-result="searchResult"
        :area-columns-placeholder="['请选择', '请选择', '请选择']"
        @save="onSave"
        @change-detail="onChangeDetail"
        save-button-text="注册"
      />
    </div>
  </div>
</template>

<script>
import { areaList } from "@vant/area-data";

export default {
  data() {
    return {
      areaList: areaList,
      searchResult: [],
    };
  },
  methods: {
    onSave() {
      this.$router.push("/main");
    },
    onChangeDetail(val) {
      if (val) {
        this.searchResult = [
          {
            name: "成都五城区",
            address: "武侯区小花园",
          },
        ];
      } else {
        this.searchResult = [];
      }
    },
  },
};
</script>

<style scoped>
</style>
