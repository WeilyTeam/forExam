<template>
  <div>
    <swipper />
    <todo-list :list="list" />
  </div>

</template>

<script>
import todoList from './todoList';
import swipper from './swipper'
export default {
  components: {
    todoList,swipper
  },
  data() {
    return {
      chosenAddressId: '1',
      list: [],
    };
  },
  methods: {
    async handleGetList() {
      let token = localStorage.getItem("token");
      let res  = await this.$http.getList({token})
      console.log(res)
      this.list = res.list
    }
  },
  mounted() {
    this.handleGetList()
  }
};
</script>

<style scoped>
</style>
