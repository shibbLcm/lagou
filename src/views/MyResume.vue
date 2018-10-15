<template>
  <div class="my-resume-container">
    <div class="my-resume-item">
      <div class="my-resume-item-title">
        <span style="color: #00b38a">在线简历</span>
        <span class="little-text">完整度：15%</span>
      </div>
      <svg class="icon right" aria-hidden="true">
        <use xlink:href="#icon-right1"></use>
      </svg>
    </div>
    <div class="my-resume-item">
      <div class="my-resume-item-title">
        <span>上传简历</span>
        <span class="little-text">上传附件简历</span>
      </div>
      <svg class="icon right" aria-hidden="true">
        <use xlink:href="#icon-right1"></use>
      </svg>
    </div>
    <div class="my-resume-item">
      <div class="my-resume-item-title">
        <span style="color: #777">选择默认投递</span>
        <span class="little-text">没有默认简历</span>
      </div>
      <svg class="icon right" aria-hidden="true">
        <use xlink:href="#icon-right1"></use>
      </svg>
    </div>
    <p class="already-deliver">今日已投递：0/10</p>
  </div>
</template>
<script>
  export default {}
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
  .my-resume-container
    position fixed
    top 0
    left 0
    right 0
    bottom 0
    margin auto
    background-color: #f7f7f7;
    .my-resume-item
      background-color: #fff;
      padding .3rem .2rem
      margin-bottom .2rem
      display flex
      align-items center
      .my-resume-item-title
        font-size .35rem
        flex-grow 1
        flex-shrink 1
        display flex
        justify-content space-between
        .little-text
          color #888
      .right
        margin-left .2rem
        color #888
    .already-deliver
      margin-top .4rem
      font-size .25rem
      color #999
      text-align center
</style>