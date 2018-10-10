<template>
  <div class="filter-menu-list-container">
    <div class="filter-menu">
      <div class="filter-item" :class="posListShow?' active':''" @click="posListShow=!posListShow;jobListShow=false;companyListShow=false">
        位置
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-downarrow" v-if="!posListShow"></use>
          <use xlink:href="#icon-uparrow" v-else></use>
        </svg>
      </div>
      <div class="filter-item" :class="jobListShow?' active':''" @click="jobListShow=!jobListShow;posListShow=false;companyListShow=false">
        职位
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-downarrow" v-if="!jobListShow"></use>
          <use xlink:href="#icon-uparrow" v-else></use>
        </svg>
      </div>
      <div class="filter-item" :class="companyListShow?' active':''" @click="companyListShow=!companyListShow;posListShow=false;jobListShow=false">
        公司
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-downarrow" v-if="!companyListShow"></use>
          <use xlink:href="#icon-uparrow" v-else></use>
        </svg>
      </div>
    </div>
    <div v-if="filterMenuShow" class="menu-list-container mask" @click.stop.prevent="">
      <div v-if="posListShow" class="position-list">
        <section class="main">
          <div class="left-list">
            <ul class="fuzzy-city-list">
              <li class="fuzzy-city-item" v-for="i in 20" :key="i" :class="i===posLeftIndex?' active':''" @click="posLeftIndex=i">123456</li>
            </ul>
          </div>
          <div class="right-list">
            <ul class="detail-city-list">
              <li class="detail-city-item" v-for="i in 20" :key="i" :class="i===posRightIndex?' active':''" @click="posRightIndex=i">78900000</li>
            </ul>
          </div>
        </section>
        <footer class="bottom">
          <span class="bottom-wrapper">
            <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-switches"></use>
            </svg>
            <span class="middle-text">切换城市</span>
            <span class="switch-city">北京</span>
          </span>
        </footer>
      </div>
      <div v-if="jobListShow" class="job-info-list">
        <div class="job-info-item-container">
          <div class="job-info-item" v-for="(jobInfo,index) in jobInfoList" :key="index">
            <p>{{jobInfo.title}}</p>
            <ul class="item-detail-list">
              <li v-for="(cond,index) in jobInfo.condArr" :key="index"><span :class="(jobInfo.activeItem===index)||(jobInfo.activeArr&&jobInfo.activeArr.indexOf(index)!==-1)?'active':''" @click="jobInfo.activeItem!==undefined?jobInfo.activeItem=index:'';jobInfo.activeArr?(jobInfo.activeArr.indexOf(index)!==-1?jobInfo.activeArr.splice(jobInfo.activeArr.indexOf(index),1):jobInfo.activeArr.push(index)):''">{{cond}}</span></li>
            </ul>
          </div>
        </div>
        <div class="make-sure-button-container">
          <div class="button-div">
            <span>确定</span>
          </div>
        </div>
      </div>
      <div v-if="companyListShow" class="company-info-list">
        <div class="company-info-item-container">
          <div class="company-info-item" v-for="(companyInfo,index) in companyInfoList" :key="index">
            <p>{{companyInfo.title}}</p>
            <ul class="item-detail-list">
              <li v-for="(cond,index) in companyInfo.condArr" :key="index"><span :class="(companyInfo.activeItem===index)||(companyInfo.activeArr&&companyInfo.activeArr.indexOf(index)!==-1)?'active':''" @click="companyInfo.activeItem!==undefined?companyInfo.activeItem=index:'';companyInfo.activeArr?(companyInfo.activeArr.indexOf(index)!==-1?companyInfo.activeArr.splice(companyInfo.activeArr.indexOf(index),1):companyInfo.activeArr.push(index)):''">{{cond}}</span></li>
            </ul>
          </div>
        </div>
        <div class="make-sure-button-container">
          <div class="button-div">
            <span>确定</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data(){
      return {
        posLeftIndex:1,
        posRightIndex:0,
        posListShow:false,
        jobListShow:false,
        companyListShow:false,
        jobInfoList:[
          {
            title:"月薪范围",
            activeItem:-1,
            condArr:["2K以下","2K-5K","5K-10K","10K-15K","15K-25K","25K-50K","50K以上"]
          },
          {
            title:"发布时间",
            activeItem:-1,
            condArr:["今天发布","三天内","一周内","两周内"]
          },
          {
            title:"工作经验",
            activeArr:[],
            condArr:["应届毕业生","3年以下","3-5年","5-10年","10年以上"]
          },
          {
            title:"学历要求",
            activeArr:[],
            condArr:["大专","本科","硕士","博士","不要求"]
          },
          {
            title:"工作性质",
            activeArr:[],
            condArr:["全职","兼职","实习"]
          }
        ],
        companyInfoList:[
          {
            title:"融资阶段",
            activeArr:[],
            condArr:[
              "未融资","天使轮","A轮","B轮",
              "C轮","D轮及以上","上市公司","不需要融资"
            ]
          },
          {
            title:"行业领域",
            activeArr:[],
            condArr:[
              "不限","移动互联网","电子商务","社交网络",
              "企业服务","O2O","教育","游戏",
              "旅游","金融","医疗健康","生活服务",
              "信息安全","数据服务","广告营销","文化娱乐",
              "硬件","分类信息","招聘","其他"
            ]
          }
        ]
      }
    },
    methods:{

    },
    computed:{
      filterMenuShow:{
        get:function () {
          return this.posListShow||this.jobListShow||this.companyListShow
        }
      }
    }
  }
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
  .filter-menu
    box-sizing border-box
    padding .15rem
    height .6rem
    text-align center
    display flex
    box-shadow 0px 0px 5px #eee;
    background-color: white;
    .filter-item
      width 33.33333%
      &.active
        color #00b38a
  .menu-list-container
    background-color:rgba(10,10,10,.5);
    position absolute
    top 2.9rem
    left 0
    right 0
    bottom 0
    z-index 10
    margin auto
    .position-list
      height 80%
      text-align center
      background-color: #f9f9f9;
      .main
        height 90%
        display flex
        .left-list
          width 30%
          height 100%
          overflow: scroll
          background-color: #eee;
          .fuzzy-city-list
            width 100%
            box-sizing border-box
            padding 0 .3rem
            .fuzzy-city-item
              padding .2rem 0
              &.active
                color #00b38a
        .right-list
          width 70%
          height 100%
          overflow: scroll
          .detail-city-list
            width 100%
            box-sizing border-box
            padding 0 1rem
            .detail-city-item
              padding .2rem
              border-bottom 1px solid #fff
              &.active
                color #00b38a
                border-bottom 1px solid #00b38a
      .bottom
        height 10%
        font-size .3rem
        display flex
        justify-content center
        align-items center
        .bottom-wrapper
          .icon
            color #999
          .middle-text
            margin 0 .2rem
    .job-info-list
      height 90%
      background-color: #f9f9f9;
      .job-info-item-container
        height 88%
        box-sizing border-box
        padding 0 .3rem
        overflow scroll
        .job-info-item
          padding .15rem 0
          .item-detail-list
            width 100%
            >li
              display inline-block
              height .8rem
              text-align center
              width 25%
              box-sizing border-box
              padding .2rem .2rem 0 0
              >span
                width 100%
                display inline-block
                height 100%
                line-height .4rem
                border 1px solid #e4e4e4
                box-sizing border-box
                padding .1rem
                &.active
                  color white
                  background-color: #00b38a;
      .make-sure-button-container
        height 12%
        box-sizing border-box
        padding .2rem
        .button-div
          height 100%
          color white
          border-radius 2px
          background-color: #00b38a;
          display flex
          justify-content center
          align-items center
    .company-info-list
      height 90%
      background-color: #f9f9f9;
      .company-info-item-container
        height 88%
        box-sizing border-box
        padding 0 .3rem
        overflow scroll
        .company-info-item
          padding .15rem 0
          .item-detail-list
            width 100%
            >li
              display inline-block
              height .8rem
              text-align center
              width 25%
              box-sizing border-box
              padding .2rem .2rem 0 0
              >span
                width 100%
                display inline-block
                height 100%
                line-height .4rem
                border 1px solid #e4e4e4
                box-sizing border-box
                padding .1rem
                &.active
                  color white
                  background-color: #00b38a;
      .make-sure-button-container
        height 12%
        box-sizing border-box
        padding .2rem
        .button-div
          height 100%
          color white
          border-radius 2px
          background-color: #00b38a;
          display flex
          justify-content center
          align-items center
</style>