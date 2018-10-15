<template>
  <div class="search-container">
    <header class="top-search-bar">
      <span class="position-selector">
        <span>北京</span>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-downarrow"></use>
        </svg>
      </span>
      <div class="search-input-container">
        <svg class="icon input-icon" aria-hidden="true">
          <use xlink:href="#icon-fangdajing"></use>
        </svg>
        <input type="text">
      </div>
      <span class="cancel-button" @click="$router.back()">取消</span>
    </header>
    <section class="bottom-area">
      <div class="history-search">
        <p class="history-s-text">
          <span>历史搜索</span>
          <span>
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-lajitong"></use>
            </svg>
          </span>
        </p>
        <div class="label-container">
          <span class="search-label" v-for="(label , index) in historyLabelList" :key="index">{{label}}</span>
        </div>
      </div>
      <div class="maybe-search">
        <p class="history-s-text">
          <span>猜你要搜</span>
        </p>
        <div class="label-container">
          <span class="search-label" v-for="(label , index) in maybeLabelList" :key="index">{{label}}</span>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
  export default {
    data(){
      return {
        historyLabelList:[
          "铜板街"
        ],
        maybeLabelList:[
          "铜板街","曹操专车",
          "WECUT","英语",
          "开发","市场",
          "网络",".net",
        ]
      }
    }
  }
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
  .search-container
    .top-search-bar
      box-sizing border-box
      padding .15rem .2rem
      background-color: #fff;
      display flex
      align-items center
      .position-selector
        font-size .3rem
      .search-input-container
        flex-grow 1
        flex-shrink 1
        height .8rem
        margin 0 .2rem
        border-radius .4rem
        border 1px solid #e4e4e4
        box-sizing border-box
        padding .2rem
        display flex
        align-items center
        .input-icon
          font-size .35rem
          color #999
          margin-right .2rem
        >input
          width 80%
          background:none;
          outline none
          border none
      .cancel-button
        font-size .3rem
    .bottom-area
      position fixed
      top 1.1rem
      bottom 0
      left 0
      right 0
      background-color: #e4e4e4;
      margin auto
      padding .3rem .3rem 0
      .history-search
        margin-bottom .5rem
      .history-s-text
        font-size .3rem
        display flex
        justify-content space-between
        align-items center
        margin-bottom .3rem
      .label-container
        >span
          display inline-block
          vertical-align middle
          color #666
          height: .6rem
          background-color: #fff;
          padding .1rem .23rem
          box-sizing border-box
          font-size .3rem
          border 1px solid #e4e4e4
          border-radius .3rem
          margin-right .15rem
          margin-bottom .15rem
</style>