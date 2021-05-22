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
      this.list = await this.$http()

    }
  },
  mounted() {
    this.handleGetList()
  }
};
</script>

<style scoped>
</style>
