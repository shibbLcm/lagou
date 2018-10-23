<template>
  <div class="job-container">
    <header class="search-head">
      <div class="search-logo-container">
        <img src="../../public/assets/img/bj_gzhu.png" alt="">
      </div>
      <div class="search-bar" @click="$router.push('/layoutBase/search')">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-fangdajing"></use>
        </svg>
        搜索公司/职位
      </div>
    </header>
    <filter-menu/>
    <two-lines title="为你推荐的好职位"/>
    <div class="job-list-container">
      <job-list-item v-for="i in 20" :key="i" :index="i"></job-list-item>
    </div>
  </div>
</template>
<script>
  import FilterMenu from "../components/FilterMenu.vue"
  import TwoLines from "../components/TwoLines.vue"
  import JobListItem from "../components/JobListItem.vue"
  import BaiduMap from "../map"

  export default {
    mounted(){
      //获取当前位置
      BaiduMap.init()
        .then((BMap)=>{
          this.addressDetail(BMap)
        })
    },
    methods:{
      addressDetail(BMap){ //获取地理位置
        var self = this;
//全局的this在方法中不能使用，需要重新定义一下
        var geolocation = new BMap.Geolocation();
//调用百度地图api 中的获取当前位置接口
        geolocation.getCurrentPosition(function(r){ if(this.getStatus() == BMAP_STATUS_SUCCESS){
//获取当前位置经纬度
          var myGeo = new BMap.Geocoder();
          myGeo.getLocation(new BMap.Point(r.point.lng, r.point.lat), function(result){ if (result){
//根据当前位置经纬度解析成地址
//            self.ADDRESS_DETAIL(result.addressComponents.district+result.addressComponents.street); //在vuex中存入区、街道地址信息。其他地方需要使用直接调用
            self.$root.currentDetailPos=result.addressComponents.district+result.addressComponents.street
            self.geohash = result.point.lat+","+result.point.lng;
//            self.SAVE_GEOHASH(self.geohash);
            self.$root.currentGeoHash=self.geohash
            self.latitude = result.point.lat; self.longitude = result.point.lng;
            // console.log(result.point.lat); self.RECORD_ADDRESS({'latitude':result.point.lat,'longitude':result.point.lng});
          }
          });
        } });
      }
    },
    components:{
      FilterMenu,
      TwoLines,
      JobListItem
    }
  }
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
  .job-container
    .search-head
      height 2.1rem
      padding-bottom .2rem
      background-color: #00b38a;
      text-align center
      .search-logo-container
        height 1rem
        padding-top .2rem
        >img
          height 100%
      .search-bar
        width 90%
        height .6rem
        line-height .6rem
        color #999
        margin .2rem auto 0
        background-color: white;
        border-radius .5rem

    .job-list-container
      box-sizing border-box
      padding 0 .3rem .9rem
      .text-division
        width 1px
        height .2rem
        display inline-block
        vertical-align middle
        background-color: #e4e4e4;
</style>