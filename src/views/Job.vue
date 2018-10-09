<template>
  <div class="job-container">
    <header class="search-head">
      <div class="search-logo-container">
        <img src="/assets/img/bj_gzhu.png" alt="">
      </div>
      <div class="search-bar">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-fangdajing"></use>
        </svg>
        搜索公司/职位
      </div>
    </header>
    <filter-menu></filter-menu>
  </div>
</template>
<script>
  import FilterMenu from "../components/FilterMenu.vue"
  export default {
    components:{
      FilterMenu
    }
  }
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
  .job-container
    .search-head
      height 2.1rem
      padding-bottom .2rem
      background-color: #00b38a;
      text-align center
      .search-logo-container
        height 1rem
        padding-top .2rem
        >img
          height 100%
      .search-bar
        width 90%
        height .6rem
        line-height .6rem
        color #999
        margin .2rem auto 0
        background-color: white;
        border-radius .5rem

</style>