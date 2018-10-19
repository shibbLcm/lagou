<template>
  <div class="layout-container">
    <transition name="footer-fade" mode="out-in"><!-- -->
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </transition>
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
    overflow-x hidden
    /*带脚的router-view*/
  .footer-fade-enter-active,.footer-fade-leave-active
    transition all .8s
  .footer-fade-enter
    transform translateX(100vw)
    opacity 0
  .footer-fade-leave-active
    transform translateX(-100vw)
    opacity 0
</style>