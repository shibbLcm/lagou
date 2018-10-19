<template>
    <transition name="no-footer-fade" mode="out-in">
      <keep-alive>
        <router-view style="height: 100%"/>
      </keep-alive>
    </transition>
</template>
<script>
  export default {}
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
  .no-footer-fade-enter-active,.no-footer-fade-leave-active
    transition all .5s
  .no-footer-fade-enter,.no-footer-fade-leave-active
    transform translateY(1rem)
</style>