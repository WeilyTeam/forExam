<template>
  <div id="app">
    <transition appear-active-class="animate__animated animate__fadeIn">
      <router-view/>
    </transition>
  </div>
</template>

<script>

export default {
  name: 'App'
}
</script>

<style>
body {
  width: 100vw;
  height: 100vh;
}
</style>
