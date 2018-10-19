<template>
  <div class="company-detail-container">
    <header class="company-detail-header">
      <div class="company-detail-title">
        <div class="company-detail-info">
          <div class="company-detail-name">布里吉科技</div>
          <div class="company-detail-condition">广州/移动互联网/未融资/15-50人</div>
          <span class="company-detail-icon-span">
            <span class="popular-icon-container">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-fire01"></use>
              </svg>
            </span>
            <span class="popular-icon-descip">朋友圈最具人气企业</span>
          </span>
        </div>
        <img class="company-detail-icon" src="https://www.lgstatic.com/thumbnail_120x120/i/image2/M00/41/B4/CgotOVq_qBCAB3vMAAA7Zbo870o305.png" alt="">
      </div>
      <div class="history-visitor-container">
        <p class="today-visitor">
          历史访问
          <span style="color: #00b38a">1103</span>
          ，今日访客：
        </p>
        <div class="visitor-header-icons">
          <img class="visitor-header-icon" v-for="imgSrc in visitorIconList" :src="imgSrc" alt="">
          <span class="ellipsis-icon visitor-header-icon">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-ellipsis"></use>
            </svg>
          </span>
          <span class="visitor-icon-division"></span>
          <svg class="icon heart-icon" aria-hidden="true">
            <use xlink:href="#icon-Heart"></use>
          </svg>
        </div>
      </div>
    </header>
    <section class="now-rescuit-jobs">
      <!--在招职位-->
      <div class="title-list">
        <div class="title-item" @click="$router.push($route.path.replace('/jobInRecruit','/companyIndex'))">
          <span :class="$route.path.substr(-13)==='/companyIndex'?'active':''">公司主页</span>
        </div>
        <div class="title-item" @click="$router.push($route.path.replace('/companyIndex','/jobInRecruit'))">
          <span :class="$route.path.substr(-13)==='/jobInRecruit'?'active':''">在招职位</span>
          <svg class="icon down" aria-hidden="true">
            <use xlink:href="#icon-down-"></use>
          </svg>
        </div>
      </div>
      <router-view/>
    </section>
  </div>
</template>
<script>
  import TwoLines from "../components/TwoLines.vue"
  import JobInRecruit from "../components/JobInRecruit.vue"
  import CompanyIndex from "../components/CompanyIndex.vue"

  export default {
    data(){
      return {
        visitorIconList:[
          "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3634769656,1146287451&fm=26&gp=0.jpg",
          "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2531720718,1600315163&fm=26&gp=0.jpg",
          "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3329523335,731969596&fm=26&gp=0.jpg",
          "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3899579356,3970391241&fm=26&gp=0.jpg",
          "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2006864557,1496311457&fm=26&gp=0.jpg",
          "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1378961750,853897277&fm=26&gp=0.jpg",
        ]
      }
    },
    components:{
      TwoLines,
      JobInRecruit,
      CompanyIndex
    }
  }
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
  .company-detail-container
    background-color: #e4e4e4;
    .company-detail-header
      padding 0 .3rem .2rem
      box-sizing border-box
      background-color: white;
      margin-bottom .2rem
      .company-detail-title
        padding .3rem 0
        border-bottom 1px solid #e4e4e4
        display flex
        justify-content space-between
        .company-detail-info
          width 50%
          .company-detail-name
            font-size .4rem
          .company-detail-condition
            color #888
            margin .2rem 0
            font-size .3rem
          .company-detail-icon-span
            display inline-block
            height .5rem
            border-radius .25rem
            box-sizing border-box
            padding .08rem .1rem
            border 1px solid #ffb066
            .popular-icon-container
              display inline-block
              width .3rem
              height .3rem
              line-height .3rem
              text-align center
              font-size .3rem
              border-radius 50%
              color white
              background-color: #ff9d40;
            .popular-icon-descip
              font-size .25rem
              color #ffb066
        .company-detail-icon
          width 1.4rem
          height 1.4rem
          border-radius 50%
      .history-visitor-container
        padding-top .2rem
        .today-visitor
          font-size .3rem
          color #999
          margin-bottom .3rem
        .visitor-header-icons
          padding-right .5rem
          .visitor-header-icon
            width .6rem
            height .6rem
            vertical-align middle
            border-radius 50%
            margin-right .15rem
          .ellipsis-icon
            display inline-block
            text-align center
            line-height .6rem
            font-size .35rem
            color white
            background-color: #e4e4e4;
          .visitor-icon-division
            display inline-block
            vertical-align: middle
            height .7rem
            width 1px
            margin-right .2rem
            background-color: #e4e4e4;
          .heart-icon
            font-size .65rem
            color #e4e4e4
            display inline-block
            vertical-align middle
    .now-rescuit-jobs
      background-color: white;
      padding 0 .3rem
      box-sizing border-box
      .title-list
        border-bottom 1px solid #e4e4e4
        height .8rem
        line-height .6rem
        text-align center
        padding .1rem 0
        box-sizing border-box
        .title-item
          width 50%
          float left
          box-sizing border-box
          border-right 1px solid #e4e4e4
          &:last-child
            border-right none
            .down
              margin-left .1rem
          >span
            &.active
              color #00b38a
</style>