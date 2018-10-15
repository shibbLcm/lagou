<template>
  <div class="deliver-history-container">
    <ul class="title-list-container">
      <li class="title-list-item" @click="currentTitle=index" :class="currentTitle===index?' active':''" v-for="(title,index) in titleList" :key="index">{{title}}</li>
    </ul>
    <div class="under-title-container">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-kong"></use>
      </svg>
      <p>暂无记录</p>
      <p>快去寻找心仪的职位吧</p>
    </div>
  </div>
</template>
<script>
  export default {
    data(){
      return {
        titleList:["全部","被查看","待沟通","面试","不合适"],
        currentTitle: 0
      }
    }
  }
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
  .deliver-history-container
    .title-list-container
      height 1rem
      border-bottom 1px solid #e4e4e4
      text-align center
      line-height 1rem
      white-space nowrap
      .title-list-item
        display inline-block
        width 20%
        color #333
        &.active
          color #00b38a
    .under-title-container
      position fixed
      top 1rem
      left 0
      right 0
      bottom 0
      margin auto
      display flex
      flex-direction column
      justify-content center
      align-items center
      color #999
      >p
        margin-bottom .2rem
      .icon
        font-size 3rem
</style>