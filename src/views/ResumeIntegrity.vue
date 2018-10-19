<template>
  <div class="resume-integrity-container">
    <header class="apply-job-intention-button">
      <span class="aim-icon-container">
        <svg class="icon aim-icon" aria-hidden="true">
          <use xlink:href="#icon-aim"></use>
        </svg>
      </span>
      <div class="right-intention-descip">
        <div class="little-tip">
          <p class="title">求职意向</p>
          <p class="what-intention-text">告诉我们你想要找什么工作</p>
        </div>
        <svg class="icon right-arrow" aria-hidden="true">
          <use xlink:href="#icon-right1"></use>
        </svg>
      </div>
    </header>
    <section class="user-info-container">
      <div class="user-main-info">
        <div class="user-name-and-title">
          <p class="user-name-container">
            <span class="name">王守义十三香</span>
            <span class="edit-icon-container">
              <svg class="icon aim-icon" aria-hidden="true">
                <use xlink:href="#icon-daiwanshan"></use>
              </svg>
              <span class="edit-text">编辑</span>
            </span>
          </p>
          <p class="user-title-container">
            <span class="sex">男</span>
            <span>/</span>
            <span class="businessman">职场人士</span>
          </p>
        </div>
        <img src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2381740074,3012066882&fm=26&gp=0.jpg" alt="" class="user-header-logo"/>
      </div>
      <p class="phone-number-text">
        <svg class="icon aim-icon" aria-hidden="true">
          <use xlink:href="#icon-phone"></use>
        </svg>
        <span>13088888888</span>
      </p>
    </section>
    <div class="add-introduction-item">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-add"></use>
      </svg>
      <span class="add-title">添加自我描述</span>
    </div>
    <div class="add-introduction-item">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-add"></use>
      </svg>
      <span class="add-title">添加工作经历</span>
    </div>
    <div class="add-introduction-item">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-add"></use>
      </svg>
      <span class="add-title">添加教育经历</span>
    </div>
    <transition name="extensible-module">
      <div class="add-introduction-item" v-if="!extensible">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-add"></use>
        </svg>
        <span class="add-title">添加项目经验</span>
      </div>
    </transition>
    <div class="add-more-module-button" @click="extensible=!extensible">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-down-" v-if="extensible"></use>
        <use xlink:href="#icon-UP-" v-else></use>
      </svg>
      <span v-if="extensible">展开更多模块</span>
      <span v-else>收起更多模块</span>
    </div>
  </div>
</template>
<script>
  export default {
    data(){
      return {
        extensible:true
      }
    }
  }
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
  /*extensible-module进出场动画*/
  .extensible-module-enter-active
    transition: all .3s ease;
  .extensible-module-leave-active
    transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  .extensible-module-enter, .extensible-module-leave-to
    transform: translateX(10px);
    opacity: 0;

  .resume-integrity-container
    position fixed
    top 0
    bottom 0
    left 0
    right 0
    margin auto
    background-color: #e4e4e4;
    .apply-job-intention-button
      padding .1rem .2rem .2rem
      display flex
      margin-bottom .2rem
      background-color: #fff;
      .aim-icon-container
        display inline-block
        vertical-align middle
        width .5rem
        height .5rem
        border-radius .15rem
        line-height .5rem
        text-align center
        font-size .35rem
        margin-right .2rem
        background-color: #ff9a39;
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
    .user-info-container
      background-color: #fff;
      padding .3rem .2rem
      margin-bottom .2rem
      .user-main-info
        display: flex
        margin-bottom .2rem
        .user-name-and-title
          flex-grow 1
          flex-shrink 1
          .user-name-container
            margin-bottom .1rem
            .name
              font-size .5rem
              margin-right .2rem
            .edit-icon-container
              font-size .3rem
              color #999
          .user-title-container
            font-size .25rem
        .user-header-logo
          width 1.5rem
          height 1.5rem
          border-radius 50%
      .phone-number-text
        font-size .35rem
        .aim-icon
          margin-right .4rem
    .add-introduction-item
      background-color: #fff;
      padding .3rem 0
      margin-bottom .2rem
      text-align center
      font-size .3rem
      .icon
        color #00b38a
        margin-right .2rem
    .add-more-module-button
      padding .3rem 0
      font-size .3rem
      text-align center
      color white
      background-color: #00b38a;
      .icon
        margin-right .2rem
</style>