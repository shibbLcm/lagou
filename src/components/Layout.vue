<template>
  <div class="layout-container">
    <router-view></router-view>
    <footer-guide></footer-guide>
  </div>
</template>
<script>
  import FooterGuide from "./FooterGuide.vue"
  export default {
    components:{
      FooterGuide
    }
  }
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
  .layout-container
    height 100%
</style>