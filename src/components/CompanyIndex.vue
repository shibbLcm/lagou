<template>
  <div class="company-index-container">
    <two-lines title="公司介绍"/>
    <div class="company-introduction-text-container" ref="introText">
      “包你说”使用的方式是：根据文字口令，说出相应的语音，获得总额的随机红包。“包你说”同时针对普通用户和企业用户，对于普通用户而言，红包金额限定为200元以下，每个红包收取2%的服务费用，对于企业端可提供定制化服务。根据廖舒妧介绍，“包你说”普通用户体大多分布在一线城市，年龄在19-39岁，而他们本身也就有这种社交的压力存在，需要一个更有趣的互动窗口。同时，常常被叫发红包的人，其实也会有小情绪，而“包你说”就用趣味的方法解决了这个痛点。“包你说”第一个重要的日子是2017年的七夕节，“那天晚上我们就一直守着服务器，因为每一个语音识别都要经过服务器运转，我们害怕过多的语音识别次数使服务器崩溃，”联合创始人廖舒妧提到，再到今年的七夕，已经提前做好了很多部署。
      据了解，“包你说”目前节假日最高单日UV达1173万，是同类红包产品中最高日活数据。除了“包你说”，该公司还打造其他红包类产品，例如，在今年的七夕节前一晚发布的“我最懂你”。该产品是针对每个人都有希望别人了解自己的心理需求，特别是对于发红包的对象，而七夕又是情侣之间心理需求的爆发点：希望对方能够了解自己的个性。但如果只是单纯针对一个节假日来设计一款产品，产品的存活时间也只有一个节假日。廖舒妧提到：“我们设计的理念不仅针对一个节假日，我们希望抛开节假日，它在后续还可以继续吸引用户，挖掘更多的玩法。”
    </div>
    <div class="unfold-button" @click="unfoldClickHandler">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-down-" v-if="!isUnfolded"></use>
        <use xlink:href="#icon-UP-" v-else></use>
      </svg>
    </div>
    <div class="swiper-container company-swiper">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(img,index) in companyIntroImgArr" :key="index">
          <img :src="img" alt="">
        </div>
      </div>
      <div class="swiper-pagination"></div>
    </div>
    <two-lines title="产品介绍"/>
    <div class="swiper-container product-swiper">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(img,index) in productIntroImgArr" :key="index">
          <img :src="img.src" alt="">
          <p class="little-title-on-img">{{img.title}}</p>
        </div>
      </div>
      <div class="swiper-pagination"></div>
    </div>
    <two-lines title="管理团队"/>
    <div class="swiper-container team-swiper">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(img,index) in teamIntroImgArr" :key="index">
          <img class="header-logo" :src="img.header" alt="">
          <p class="team-person-descip">
            <span style="margin-right: .15rem">{{img.name}}</span>
            <span>{{img.title}}</span>
          </p>
        </div>
      </div>
      <div class="swiper-pagination"></div>
    </div>
    <two-lines title="公司地址"/>
    <footer class="apply-job-intention-button">
      <svg class="icon aim-icon" aria-hidden="true">
        <use xlink:href="#icon-position"></use>
      </svg>
      <div class="right-intention-descip">
        <div class="little-tip">
          <p class="title">广州市番禺区</p>
          <p class="what-intention-text">有米科技大厦8楼</p>
        </div>
        <svg class="icon right-arrow" aria-hidden="true">
          <use xlink:href="#icon-right1"></use>
        </svg>
      </div>
    </footer>
    <footer class="bottom-text">Powered by Baijiaguzhu.com</footer>
  </div>
</template>
<script>
  import TwoLines from "../components/TwoLines.vue"
  import Swiper from "swiper"
  import "swiper/dist/css/swiper.min.css"

  export default {
    mounted(){
      new Swiper(".swiper-container",{
        autoplay:true,
        loop:true,
        pagination: {
          el: '.swiper-pagination',
        }
      })
    },
    data(){
      return {
        isUnfolded:false,
        companyIntroImgArr:[
          "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1155521371,1984443309&fm=26&gp=0.jpg",
          "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=601797592,47660834&fm=26&gp=0.jpg",
          "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2881622916,3100156402&fm=26&gp=0.jpg",
          "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=322191134,212003797&fm=26&gp=0.jpg",
          "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2127374775,3740088276&fm=26&gp=0.jpg",
        ],
        productIntroImgArr:[
          {
            src:"https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2932462489,2463709874&fm=26&gp=0.jpg",
            title:"包你说"
          },
          {
            src:"https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1990582115,4236810255&fm=26&gp=0.jpg",
            title:"欢乐翻牌"
          },
          {
            src:"https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3136124988,2056684953&fm=26&gp=0.jpg",
            title:"天天飞机"
          }
        ],
        teamIntroImgArr:[
          {
            header:"https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3001892518,2963845135&fm=15&gp=0.jpg",
            name:"林进光",
            title:"CEO"
          },
          {
            header:"https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3922556517,282283670&fm=26&gp=0.jpg",
            name:"廖茜",
            title:"CMO"
          }
        ]
      }
    },
    components:{
      TwoLines
    },
    methods:{
      unfoldClickHandler(){
        this.isUnfolded=!this.isUnfolded
        this.isUnfolded?this.$refs.introText.style.height="auto":this.$refs.introText.style.height="2rem"
      }
    }
  }
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
  .company-index-container
    padding-top .2rem
    .company-introduction-text-container
      font-size .25rem
      color #999
      height 2rem
      overflow hidden
    .unfold-button
      text-align center
      padding-bottom .15rem
    .swiper-container
      height 3rem
      .swiper-wrapper
        height 100%
        .swiper-slide
          height 100%
          >img
            width 100%
            height 100%
    /*.company-swiper
      .swiper-pagination-bullet-active
        background: #00b38a!important;*/
    .product-swiper
      .swiper-slide
        position relative
        .little-title-on-img
          background-color: rgba(0,0,0,.3);
          padding .1rem
          width 100%
          color white
          position absolute
          bottom 0
          left 0
    .team-swiper
      .swiper-slide
        text-align center
        .header-logo
          width 1.4rem!important
          height 1.4rem!important
          border-radius 50%
          margin-bottom .2rem
    .apply-job-intention-button
      padding .1rem .2rem .2rem
      display flex
      margin-bottom .2rem
      background-color: #fff;
      .aim-icon
        font-size .35rem
        color #00b38a
        margin-right .2rem
      .right-intention-descip
        flex-grow 1
        flex-shrink 1
        display flex
        align-items center
        .little-tip
          flex-grow 1
          flex-shrink 1
          .title
            font-size .35rem
            margin-bottom .1rem
          .what-intention-text
            font-size .3rem
            color #999
        .right-arrow
          color #e4e4e4
          font-size .3rem
    .bottom-text
      padding .8rem 0
      color #999
      font-size .25rem
      text-align center
</style>