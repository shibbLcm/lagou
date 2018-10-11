<template>
  <div class="company-container">
    <div class="company-list-container">
      <div class="company-list-item" v-for="i in 20" :key="i" @click="$router.push('/layoutBase/companyDetail/'+i)">
        <div class="index-icon-container">
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
  export default {}
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
  .company-container
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