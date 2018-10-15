<template>
  <div>
    <div class="job-item" @click="$router.push('/layoutBase/jobDetail/'+index)">
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
</template>
<script>
  export default {
    props:["index"]
  }
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
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