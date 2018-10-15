<template>
  <div class="job-container">
    <header class="search-head">
      <div class="search-logo-container">
        <img src="/assets/img/bj_gzhu.png" alt="">
      </div>
      <div class="search-bar" @click="$router.push('/layoutBase/search')">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-fangdajing"></use>
        </svg>
        搜索公司/职位
      </div>
    </header>
    <filter-menu/>
    <two-lines title="为你推荐的好职位"/>
    <div class="job-list-container">
      <job-list-item v-for="i in 20" :key="i" :index="i"></job-list-item>
    </div>
  </div>
</template>
<script>
  import FilterMenu from "../components/FilterMenu.vue"
  import TwoLines from "../components/TwoLines.vue"
  import JobListItem from "../components/JobListItem.vue"
  export default {
    components:{
      FilterMenu,
      TwoLines,
      JobListItem
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

    .job-list-container
      box-sizing border-box
      padding 0 .3rem .9rem
      .text-division
        width 1px
        height .2rem
        display inline-block
        vertical-align middle
        background-color: #e4e4e4;

</style>