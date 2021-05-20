<template>
 <div>
   <van-sticky>
     <van-button type="primary" style="width: 100%;">我的信息</van-button>
   </van-sticky>

  <van-contact-card type="edit" name="张三" tel="13000000000" :editable="false" />
  </div>
</template>
<script>
export default {
  props: {
    list: {
      default() {
        return [
          {
            id: "1",
            name: "张三",
            tel: "13000000000",
            task: "拯救世界",
            isFinish: true,
          },
          {
            id: "2",
            name: "小四",
            tel: "12930",
            task: "获得吉尼斯纪录",
            isFinish: false,
          },
        ];
      },
    },
    data(){
        return {
            active:0
        }
    }
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
</style>
