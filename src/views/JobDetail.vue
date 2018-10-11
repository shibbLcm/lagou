<template>
  <div class="job-detail-container">
    <header class="job-detail-header">
      <div class="detail-title">
        <p class="job-detail-name">前端开发工程师</p>
        <div class="job-detail-condition">
          <span class="job-detail-salary">15K-30K</span>
          <span class="other-job-condition">/北京朝阳门/3-5年/本科</span>
        </div>
        <div class="job-tempt">
          <span class="tempt-title">职位诱惑：</span>
          <span>五险一金，加班补助，带薪年假</span>
        </div>
      </div>
      <div class="job-from-company">
        <div class="from-company">
          <p class="com-name">鸿运昌盛</p>
          <p class="com-label">未融资/150-500人/移动互联网</p>
        </div>
        <img v-if="false" class="from-com-icon" src="" alt="没有公司icon">
        <div v-else class="from-com-icon">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-gongsiyewu"></use>
          </svg>
        </div>
      </div>
    </header>
    <section class="job-detail-content">
      <two-lines title="职位描述"/>
      <div class="job-descip">
        <p class="main-label"><span>JavaScript</span></p>
        <p class="descip-text">
          1.负责按照UI或原型系统设计，制作前端界面，并保证在各浏览器、分辨率下的兼容性；<br/>
          2.负责采用前端脚本语言，实现业务交互或流转控制；<br/>
          3.配合后台开发工程师，完成页面的数据获取、提交等工作；<br/>
          4.工作内容将包括Web、手机等各种页面制作。<br/>
          任职要求：<br/>
          1、熟练掌握Web（HTML/CSS/Javascript) 、JSON、面向对象、ES6等前端技术；<br/>
          2、对于前端界面的实现，有自己的想法和一定的审美；<br/>
          3、熟悉MVVM设计模式，实际项目中使用过Vue；<br/>
          4、有至少2个完整项目的开发经验；<br/>
          5、熟练使用git进行项目版本管理； <br/>
          6、良好的沟通能力和团队协作精神，性格开朗，善于表达;<br/>
          7、代码风格要良好，代码可读性要高；<br/>
          8、有管理信息系统开发经验者优先；<br/>
          9、对页面体验，交互有成功案例者优先；
        </p>
      </div>
      <two-lines title="职位发布者"/>
      <div class="job-promulgator">
        <img src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2888859308,3964527775&fm=26&gp=0.jpg" alt="" class="promulgator-header-icon">
        <p class="promulgator-name-and-title">
          <span class="promulgator-name">TANCHENG</span>
          <span class="promulgator-title">CEO</span>
        </p>
        <div class="recently-active">
          <div  class="active-icon-container">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-huoyuedu"></use>
            </svg>
          </div>
          <span class="active-time">最近活跃：</span>
          <span class="active-time">18小时前</span>
        </div>
        <div class="promulgator-characteristic">
          <span>经常回聊天消息</span>
          <span>下午活跃</span>
        </div>
      </div>
      <two-lines title="工作地址"/>
      <div class="work-place">
        <svg class="icon position-icon" aria-hidden="true">
          <use xlink:href="#icon-position"></use>
        </svg>
        <div class="place-info">
          <p class="big-place-detail">北京市朝阳区</p>
          <p class="small-place-detail">北京市朝阳区延静里中街20号，延静里B栋109室</p>
          <p class="zip-code">100025</p>
        </div>
        <svg class="icon right-icon" aria-hidden="true">
          <use xlink:href="#icon-right1"></use>
        </svg>
      </div>
    </section>
    <section class="similar-job">
      <two-lines title="相似职位"/>
      <div class="similar-job-list">
        <div class="similar-list-item" v-for="i in 3" :key="i">
          <div class="similar-item-top">
            <div class="top-name-and-condition">
              <p class="top-name">Web前端开发工程师</p>
              <p class="top-condition">北京/大望路/1-3年/本科</p>
            </div>
            <div class="top-salary-and-time">
              <p class="top-salary">15K-30K</p>
              <p class="top-time">10月10日</p>
            </div>
          </div>
          <div class="similar-item-bottom">
            <div class="bottom-company-logo-container">
              <img class="bottom-company-logo" src="https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=2955405107,3896096843&fm=58&bpow=3042&bpoh=2350" alt="">
            </div>
            <div class="bottom-company-info">
              <p class="bottom-company-name">罗辑思维</p>
              <p class="bottom-company-characteristic">
                D轮及以上/150-500人/移动互联网，文化娱乐
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="search-more-job-button-container">
        <span class="search-more-job-button">查看更多职位</span>
      </div>
    </section>
    <footer class="job-detail-footer">
      <div class="job-detail-footer-icon-container">
        <div class="icon-container" style="color: #00b38a">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-share"></use>
          </svg>
          <span>分享</span>
        </div>
        <div class="icon-container">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-star"></use>
          </svg>
          <span>收藏</span>
        </div>
      </div>
      <div class="submit-button">投递简历</div>
    </footer>
  </div>
</template>
<script>
  import TwoLines from "../components/TwoLines.vue"

  export default {
    components:{
      TwoLines
    }
  }
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
  .job-detail-container
    background-color: #e4e4e4;
    margin-bottom 1rem
    .job-detail-header
      height 4rem
      box-sizing border-box
      padding .2rem .3rem
      margin-bottom .2rem
      background-color: white;
      .detail-title
        height 60%
        box-sizing border-box
        padding-bottom .35rem
        border-bottom 1px solid #eee
        .job-detail-name
          font-size .4rem
          margin-bottom .3rem
        .job-detail-condition
          font-size .3rem
          margin-bottom .2rem
          .job-detail-salary
            color #ff7332
        .job-tempt
          font-size .3rem
          color #888
      .job-from-company
        height 40%
        box-sizing border-box
        padding-top .3rem
        display flex
        .from-company
          flex-grow 1
          flex-shrink 1
          .com-name
            font-size .35rem
          .com-label
            margin-top .1rem
            font-size .3rem
        .from-com-icon
          width 1rem
          height 1rem
          margin-left .2rem
          border-radius 50%
          color white
          font-size .4rem
          text-align center
          line-height 1rem
          background-color: #e4e4e4;
    .job-detail-content
      background-color: white;
      box-sizing border-box
      padding 0 .3rem .2rem
      margin-bottom .2rem
      .job-descip
        .main-label
          margin .2rem 0
          text-align center
          >span
            display inline-block
            margin-right .1rem
            border-radius .2rem
            padding .1rem
            color #666
            border 1px solid #e4e4e4
        .descip-text
          color #666
          font-size .25rem
      .job-promulgator
        padding-bottom .3rem
        text-align center
        .promulgator-header-icon
          width 1rem
          height 1rem
          border-radius 50%
          margin-bottom .15rem
        .promulgator-name-and-title
          font-size .25rem
          margin-bottom .15rem
          .promulgator-name
            font-size .35rem
            margin-right .1rem
          .promulgator-title
            font-size .3rem
            color #888
        .recently-active
          display flex
          justify-content center
          align-items center
          color #888
          margin-bottom .15rem
          .active-icon-container
            width .4rem
            height .4rem
            border-radius 50%
            color white
            line-height .4rem
            text-align center
            margin-right .1rem
            background-color: #00b38a;
          .active-time
            font-size .25rem
        .promulgator-characteristic
          >span
            display inline-block
            margin-right .1rem
            border-radius .2rem
            padding .1rem
            color #666
            border 1px solid #e4e4e4
      .work-place
        display flex
        .position-icon
          font-size .45rem
          color #00b38a
        .place-info
          margin-left .3rem
          flex-grow 1
          flex-shrink 1
          .big-place-detail
            font-size .3rem
          .small-place-detail,.zip-code
            font-size .25rem
            color #999
            margin-top .2rem
        .right-icon
          font-size .3rem
          color #999
    .similar-job
      background-color: white;
      box-sizing border-box
      padding 0 .3rem .2rem
      margin-bottom .2rem
      .similar-job-list
        .similar-list-item
          padding .3rem 0
          box-sizing border-box
          border-bottom 1px solid #e4e4e4
          &:last-child
            border-bottom none
          .similar-item-top
            display flex
            margin-bottom .2rem
            .top-name-and-condition
              flex-grow 1
              flex-shrink 1
              .top-name
                font-size .4rem
                margin-bottom .1rem
              .top-condition
                font-size .3rem
                color #999
            .top-salary-and-time
              .top-salary
                font-size .4rem
                color #ff8538
                margin-bottom .1rem
              .top-time
                font-size .3rem
                color #999
          .similar-item-bottom
            display flex
            .bottom-company-logo-container
              width 1.8rem
              .bottom-company-logo
                width 100%
            .bottom-company-info
              margin-left .2rem
              flex-grow 1
              flex-shrink 1
              .bottom-company-name
                font-size .3rem
                margin-bottom .2rem
              .bottom-company-characteristic
                font-size .25rem
                color #999
      .search-more-job-button-container
        text-align center
        .search-more-job-button
          width 90%
          height .8rem
          display inline-block
          line-height .8rem
          color #00b38a
          font-size .35rem
          background-color: #f9f9f9;
          border 1px solid #e4e4e4
    .job-detail-footer
      background-color: rgba(255,255,255,.8);
      box-sizing border-box
      padding .15rem 0
      position fixed
      bottom 0
      left 0
      width 100%
      height 1rem
      z-index 10
      display flex
      justify-content center
      text-align center
      .job-detail-footer-icon-container
        height 100%
        width 25%
        display flex
        .icon-container
          width 50%
          height 100%
          display flex
          flex-direction column
          justify-content space-around
          align-items center
          .icon
            font-size .55rem
          >span
            font-size .27rem
      .submit-button
        width 65%
        height 100%
        font-size .38rem
        line-height .8rem
        color white
        background-color: #00b38a;
</style>