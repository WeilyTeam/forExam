<template>
  <todo-list :list="list"></todo-list>
</template>

<script>
import todoList from './todoList';

export default {
  components: {
    todoList
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
