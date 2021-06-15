<template>
  <div>
    <van-contact-list
      v-model="chosenContactId"
      :list="list"
      default-tag-text="默认"
      @select="onSelect($event)"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      chosenContactId: "b",
    };
  },

  props:{
    list:{
      type:Array
    }
  },
  methods: {
    onSelect(e){

    }
  },
};
</script>

<style scoped>
>>>.van-contact-list__add{
  display: none;
}
</style>
