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
    <filter-menu/>
    <two-lines title="为你推荐的好职位"/>
    <div class="job-list-container">
      <div class="job-item" v-for="i in 20" :key="i" @click="$router.push('/layoutBase/jobDetail/'+i)">
        <div class="job-logo-container">
          <img src="https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=2112281579,3544070908&fm=58&bpow=1262&bpoh=944" alt="">
        </div>
        <div class="job-info">
          <p class="job-name">前端开发工程师</p>
          <p class="job-company">北京中康时代医院投资集团</p>
          <p class="job-condition">
            <span>北京</span>
            <span class="text-division"></span>
            <span>胜利</span>
            <span class="text-division"></span>
            <span>3-5年</span>
            <span class="text-division"></span>
            <span>本科</span>
          </p>
        </div>
        <div class="salary-and-date">
          <p class="salary">10K-15K</p>
          <p class="date">10月05日</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import FilterMenu from "../components/FilterMenu.vue"
  import TwoLines from "../components/TwoLines.vue"
  export default {
    components:{
      FilterMenu,
      TwoLines
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
      .job-item
        height 1.8rem
        padding .25rem 0
        display flex
        border-bottom 1px solid #e4e4e4
        .job-logo-container
          width 26%
          margin-right .2rem
          >img
            width 100%
        .job-info
          flex-grow 1
          flex-shrink 1
          margin-right .2rem
          .job-name
            font-size .38rem
            margin-bottom .13rem
          .job-company
            font-size .3rem
            color #888
            margin-bottom .15rem
          .job-condition
            >span
              color #999
              margin-right .15rem
              font-size .28rem
        .salary-and-date
          .salary
            color #ff741b
            font-size .29rem
            margin-bottom .6rem
          .date
            color #999
            font-size .27rem
</style>