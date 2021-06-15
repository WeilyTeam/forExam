<template>
  <div>
    <!--    <van-sticky>-->
    <!--      <van-button type="primary" style="width: 100%;">Todo 首頁</van-button>-->
    <!--    </van-sticky>-->

    <ul class="todo-container">
      <li v-for="(item, index) in list" :key="item + index">
        <el-card :body-style="{ padding: '14px' }" style="margin-top: 1em">
          <span style="font-size: 14px">{{ item.todo_content }}</span>
          <van-tag v-if="item.todo_status" type="success">已完成</van-tag>
          <el-tag size="mini" plain v-else type="warning">未完成</el-tag>
          <!--            <el-badge :value="200" :max="99" class="item"  style="float: right">-->
          <!--            <el-button type="info" size="mini" plain> </el-button>-->
          <!--            </el-badge>-->
          <span style="font-size: 14px;color: gray;float: right">{{ item.todo_start_time }}</span>

        </el-card>

        <el-divider><i class="el-icon-mobile-phone"/></el-divider>

      </li>
    </ul>
  </div>
</template>
<script>
export default {
  props: {
    list: {
      default() {
        return [];
      },
    },
  },
};
</script>
<style scoped>


</style>
