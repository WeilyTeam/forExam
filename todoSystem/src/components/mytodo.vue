<template>
  <div>
    <van-sticky>
      <van-button type="primary" style="width: 100%;">
        我的 Todo
      </van-button>
    </van-sticky>
    <keep-alive>
    <ul class="todo-container">
      <li v-for="(item, index) in list" :key="item + index">
        <div class="title">
          <van-checkbox v-model="item.isFinish"
          ><span>{{ item.task }}</span>
            <van-tag v-if="item.isFinish" type="success">已完成</van-tag>
            <van-tag v-else> 未完成</van-tag>
          </van-checkbox
          >
        </div>
      </li>
    </ul>
    </keep-alive>
    <van-button
      v-on:click="handleAddTodo"
      style="width: 100%; margin-top: 2em"
      type="info"
    >新增
    </van-button>
    <van-popup
      v-model="show"
      closeable
      round
      position="bottom"
      v-bind:style="{ height: '30%' }"
      @close="handleFinishAdd(value)"
    >
      <van-cell-group>
        <br>
        <van-field v-model="value" label="Todo" placeholder="请输入Todo"/>
      </van-cell-group>
    </van-popup>
  </div>
</template>
<script>
export default {
  props: {
    list: {
      default() {
        return [
          {
            id: 1,
            task: "拯救世界",
            isFinish: true,
          },
        ];
      },
    }
  },
  data() {
    return {
      active: 0,
      show: false,
      value: null
    };
  },
  methods: {
    handleAddTodo() {
      this.show = true
    },
    handleFinishAdd(value) {
      let list = this.list
      list.push({
        id: list.length,
        task: value,
        isFinish: false,
      })
    }
  },

};
</script>
<style scoped>
.todo-container li {
  border: solid 1px white;
  background-color: beige;
  margin-top: 1em;
  border-radius: 2em;
  padding: 0.5em;
}
</style>
