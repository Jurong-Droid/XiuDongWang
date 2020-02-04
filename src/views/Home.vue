<template>
  <div>
    首页
    <Tabbar></Tabbar>
    <ul>
      <li v-for="data in datalist">
        {{data.title}}
      </li>
    </ul>

  </div>
</template>

<script>
import Axios from 'axios'
import Tabbar from '@/components/Tabbar/Tabbar'

export default {
  data () {
    return {
      datalist: []
    }
  },
  mounted () {
    Axios({
      url: 'https://wap.showstart.com/api/wap/activity/list.json?pageNo=1&cityCode=0&showTime=7&st_flpv=158022192437734d8v1OlIMtHpxDl87Vg&sign=&trackPath=&terminal=wap'
    }).then(res => {
      console.log(res.data.result.activityList)
      this.datalist = res.data.result.activityList
    })
  },
  components: {
    Tabbar
  }
}

</script>
