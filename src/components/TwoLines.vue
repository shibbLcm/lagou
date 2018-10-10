<template>
  <div class="two-lines-container">
    {{title}}
  </div>
</template>
<script>
  export default {
    props:["title"]
  }
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
  .two-lines-container
    text-align center
    color #666
    height 1rem
    line-height 1rem
    position relative
    &::before
      content ""
      width 1.5rem
      height 2px
      background-color: #e4e4e4;
      position absolute
      left .5rem
      top 50%
      margin-top -1px
    &::after
      content ""
      width 1.5rem
      height 2px
      background-color: #e4e4e4;
      position absolute
      right .5rem
      top 50%
      margin-top -1px
</style>