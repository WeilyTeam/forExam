<template>
  <div class="login-container">
    <login-form @submit="handleToSubmit"/>
  </div>
</template>

<script>
import loginForm from "@/components/loginForm";

export default {
  data() {
    return {
      active: 0,
    };
  },
  components: {
    loginForm,
  },
  methods: {
    async handleToSubmit(params) {

      await this.$router.push({path: "/main"});
    },
  },
};
</script>

<style scoped>
</style>
