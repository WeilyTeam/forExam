<template>
  <div>
    <el-divider><i class="el-icon-mobile-phone"/>我的TODO</el-divider>

    <keep-alive>
      <ul class="todo-container">
        <li v-for="(item, index) in list" :key="item + index">
          <el-card class="box-card">
            <el-checkbox
              v-model="item.todo_status"
              @change="handleSetTodoStatus(item.todo_status,item.todo_id)"
            />
            <span style="font-size: 14px">{{ item.todo_content }}</span>
            <van-tag v-if="item.todo_status" type="success">已完成</van-tag>
            <van-tag v-else> 未完成</van-tag>

            <el-button type="success"
                       plain
                       size="small"
                       style="float: right"
                       @click="handleAddTodo"
                       v-show="index===list.length-1"
            >新增
            </el-button>
            <el-button type="success"
                       style="float: right"
                       size="small"
                       plain
                       @click.prevent="handleSharedTodo(item.todo_id)"
                       v-show="!item.todo_shared_status"
            >分享
            </el-button>
            <el-button type="danger"
                       style="float: right"
                       size="small"
                       plain
                       @click.prevent="handleDelShare(item.todo_id)"
                       v-show="item.todo_shared_status"

            >取消分享
            </el-button>
          </el-card>

        </li>
      </ul>
    </keep-alive>
    <el-dialog
      title="请输入"
      :visible.sync="show"
    >

      <el-card class="box-card">
        <el-form ref="form" label-width="80px">
          <el-form-item label="TODO">
            <el-input v-model="value" placeholder="请填入Todo"/>
          </el-form-item>
        </el-form>
      </el-card>

      <span slot="footer" class="dialog-footer">
      <el-button @click="show = false">取 消</el-button>
      <el-button type="primary" @click="handleFinishAdd(value)">确 定</el-button>
    </span>
    </el-dialog>
  </div>
</template>
<script>
export default {
  // props: {
  //   list: {
  //     default() {
  //       return [];
  //     },
  //   }
  // },
  data() {
    return {
      active: 0,
      show: false,
      value: null,
      list: []
    };
  },
  mounted() {
    this.handleGetMyTodo()
  },
  methods: {
    handleAddTodo() {
      this.show = true
    },
    async handleGetMyTodo() {
      const token = localStorage.getItem("token")
      let res = await this.$http.getTodoList({token});
      console.log(res)
      res.list.forEach(val=>val.todo_status=!!val.todo_status)
      this.list = res.list
    },
    async handleFinishAdd(value) {
      if (!value) return this.$alert("请输入")
      const token = localStorage.getItem("token");

      let res = await this.$http.postTodo({todo_content: value, token});
      // console.log(res)
      this.$router.go(0)
    },
    async handleSharedTodo(todo_id) {
      console.log(todo_id)
      const token = localStorage.getItem("token");

      let res = await this.$http.sharedMyTodo({todo_id, token})
      console.log(res)
      this.$router.go(0)

    }, async handleDelShare(todo_id) {
      console.log(todo_id)
      const token = localStorage.getItem("token");

      let res = await this.$http.delMyShare({todo_id, token})
      this.$router.go(0)

      console.log(res)
    },
    async handleSetTodoStatus(value, todo_id) {

      const token = localStorage.getItem("token");

      if (value) {
        console.log({token, todo_id})
        return this.$http.start({token, todo_id})

      }
      return this.$http.end({token, todo_id})

    }
  },

};
</script>
<style>
.van-checkbox__label {
  display: block;
  width: 100%;
}
</style>
