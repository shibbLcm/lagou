<template>
  <div>
    <div class="now-rescuit-jobs-list">
      <div class="now-rescuit-jobs-list-item" v-for="i in 9" :key="i">
        <div class="now-rescuit-jobs-info">
          <div class="now-rescuit-job-title">内容运营主管</div>
          <div class="now-rescuit-job-condition">广州/1-3年/本科</div>
        </div>
        <div class="now-rescuit-jobs-salary-and-date">
          <p class="now-rescuit-jobs-salary">8K-12K</p>
          <p class="now-rescuit-jobs-date">1天前发布</p>
        </div>
      </div>
      <p class="last-text">没有更多了</p>
    </div>
  </div>
</template>
<script>
  export default {}
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
  .now-rescuit-jobs-list
    .now-rescuit-jobs-list-item
      box-sizing border-box
      padding .2rem 0
      border-bottom 1px solid #e4e4e4
      display flex
      justify-content space-between
      .now-rescuit-jobs-info
        .now-rescuit-job-title
          font-size .35rem
          margin-bottom .2rem
        .now-rescuit-job-condition
          font-size .3rem
          color #888
      .now-rescuit-jobs-salary-and-date
        .now-rescuit-jobs-salary
          font-size .3rem
          margin-bottom .2rem
          color #ff9d40
        .now-rescuit-jobs-date
          font-size .25rem
          color #777
    .last-text
      height .8rem
      line-height .8rem
      text-align center
      font-size .28rem
      color #888
</style>