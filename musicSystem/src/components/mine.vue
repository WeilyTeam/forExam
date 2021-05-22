<template>
 <div>
   <van-sticky>
     <van-button type="info" style="width: 100%;">创建个人歌单</van-button>
   </van-sticky>

   <van-address-edit
     show-delete
     @save="onSave"
   />

  </div>
</template>
<script>
export default {
  props: {

  },
  data(){
    return {
      isEdit:false,
      active:0,
      loading: false,
      finished: false
    }
  },
  computed:{

  },
  methods:{
    showMore(){
      this.isEdit=!this.isEdit;
    },
    onSave() {

    },
    onDelete() {

    },

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
.van-contact-list>>>.van-contact-list__bottom{
  display: none;
}
.van-contact-list{
  padding-bottom: 20px;
}
</style>
