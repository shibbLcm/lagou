<template>
  <div class="company-container">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(img,index) in imgList" :key="index">
          <img :src="img" alt="">
        </div>
      </div>
      <div class="swiper-pagination"></div>
    </div>
    <p class="under-header-text">以下是当前最火的上百家公司，列表实时更新</p>
    <div class="company-list-container">
      <div class="company-list-item" v-for="i in 20" :key="i" @click="$router.push('/layoutBase/companyDetail/'+i)">
        <div class="index-icon-container " :class="{first:i===1,second:i===2,third:i===3}">
          {{i}}
        </div>
        <div class="company-info-div">
          <p class="company-name">布里吉科技</p>
          <p class="company-descip">广州/移动互联网/9个在招职位</p>
          <div class="company-principal">
            <img class="header-icon" src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=773579743,2271149885&fm=26&gp=0.jpg" alt="">
            <span class="principal-name">侯曼琦·HRM</span>
            <span class="exposure">6084·曝光度</span>
          </div>
        </div>
        <img src="https://www.lgstatic.com/thumbnail_120x120/i/image2/M00/41/B4/CgotOVq_qBCAB3vMAAA7Zbo870o305.png" class="company-logo" alt="">
      </div>
    </div>
  </div>
</template>
<script>
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
        imgList:[
          "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1539919979798&di=99e9f71da7754b4f8448ae14678132f1&imgtype=0&src=http%3A%2F%2Fpic.qiantucdn.com%2F58pic%2F13%2F77%2F17%2F23I58PICyJv_1024.jpg",
          "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1539919719933&di=b6348b94c8c196a1ef755a553d285ab9&imgtype=0&src=http%3A%2F%2Fbpic.588ku.com%2Fback_pic%2F04%2F99%2F43%2F195940adb4891a9.jpg",
          "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3653106475,1651399507&fm=26&gp=0.jpg"
        ]
      }
    }
  }
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
  .company-container
    .swiper-container
      height 3rem
      .swiper-wrapper
        height 100%
        .swiper-slide
          height 100%
          >img
            width 100%
            height 100%
    .under-header-text
      text-align center
      color #888
      padding .1rem 0
      background-color: #f0f0f0;
    .company-list-container
      padding-bottom .9rem
      .company-list-item
        height 2.5rem
        padding .3rem
        box-sizing border-box
        border-bottom 1px solid #e4e4e4
        display flex
        .index-icon-container
          width .5rem
          height .5rem
          font-size .3rem
          line-height .5rem
          text-align center
          color white
          border-radius 50%
          background-color: #e4e4e4;
          margin-right .2rem
          &.first
            background-color: #ff4d4d;
          &.second
            background-color: #ffa235;
          &.third
            background-color: #ffdf88;
        .company-info-div
          flex-grow 1
          flex-shrink 1
          margin-right .3rem
          .company-name
            font-size .4rem
          .company-descip
            font-size .3rem
            color #888
            margin-bottom .3rem
          .company-principal
            height .6rem
            display flex
            align-items center
            .header-icon
              height 100%
              border-radius 50%
              margin-right .2rem
            .principal-name
              font-size .3rem
              margin-right .1rem
            .exposure
              font-size .25rem
              color #ff876a
              padding .1rem
              background-color: #fff1ee;
        .company-logo
          width 1rem
          height 1rem
</style>