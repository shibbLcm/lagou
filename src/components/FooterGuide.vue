<template>
  <div class="footer-guide">
    <router-link to="/layout/job" class="guide-item" :class="$route.path==='/layout/job'?' active':''">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-gongwenbao"></use>
      </svg>
      <span>职位</span>
    </router-link>
    <router-link to="/layout/company" class="guide-item" :class="$route.path==='/layout/company'?' active':''">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-company"></use>
      </svg>
      <span>公司</span>
    </router-link>
    <router-link to="/layout/personal" class="guide-item" :class="$route.path==='/layout/personal'?' active':''">
      <svg class="icon too-big" aria-hidden="true">
        <use xlink:href="#icon-tab_personal"></use>
      </svg>
      <span>我的</span>
    </router-link>
  </div>
</template>
<script>
  export default {}
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
  .footer-guide
    width 100%
    position fixed
    bottom 0
    left 0
    height .9rem
    background-color: white;
    display flex
    box-shadow: 0 0 13px 0 #e9eaef;
    .guide-item
      width 33.33333%
      display flex
      flex-direction column
      justify-content center
      align-items center
      &.active
        color #00b38a
        background-color:white ;
      .icon
        font-size .5rem
        margin-top .1rem
        &.too-big
          font-size .4rem
</style>