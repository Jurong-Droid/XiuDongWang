<template>
  <div>
    <Scarch></Scarch>
    <Swiper v-if="bannerlist.length" class="bannerbox">
      <div class="swiper-slide" v-for="data in bannerlist" :key="data.activityId" >
         <img :src="data.path">
     </div>
    </Swiper>
    <ul class="prolist">
      <li v-for="data in prolist" :key="data.key">
        <img :src="data.imageURL">
        <p>{{ data.showName }}</p>
      </li>
    </ul>
    <ul class="datalist">
      <li v-for="data in datalist" :key="data.activityId">
        {{data.title}}
      </li>
    </ul>
  </div>
</template>

<script>
import Axios from 'axios'
import Swiper from '../components/Swiper/Swiper'
import Scarch from '../components/Searchbar/Searchbar'
export default {
  data () {
    return {
      datalist: [],
      bannerlist: [],
      prolist: []
    }
  },
  components: {
    Swiper,
    Scarch
  },
  mounted () {
    Axios({
      url: 'https://wap.showstart.com/api/wap/home/homePage.json?pageNo=1&cityCode=10&showTime=7&st_flpv=158022192437734d8v1OlIMtHpxDl87Vg&sign=&trackPath=&terminal=wap',
      method: 'POST'
    }).then(res => {
      console.log(res.data)
      this.bannerlist = res.data.result.banner
      this.prolist = res.data.result.styles
    })
    Axios({
      url: 'https://wap.showstart.com/api/wap/activity/list.json?pageNo=1&cityCode=10&showTime=7&st_flpv=158022192437734d8v1OlIMtHpxDl87Vg&sign=&trackPath=&terminal=wap'
    }).then(res => {
      // console.log(res.data.result.activityList)
      this.datalist = res.data.result.activityList
    })
  }
}

</script>

<style lang="scss" scoped>
  .bannerbox{
     /deep/ .swiper-pagination-bullets /deep/.swiper-pagination-bullet{
      background:#fef8f8;
      opacity: 0.7;
      width: 0.09rem;
      height: 0.09rem;
    }
    /deep/ .swiper-pagination-bullets /deep/.swiper-pagination-bullet-active{
      background:#eb484a;
      opacity: 1;
      width: 0.09rem;
      height: 0.09rem;
    }
    img{
      width: 100%;
    }
  }
  .prolist{
    img{
      width: 0.5rem;
    }
  }
</style>
