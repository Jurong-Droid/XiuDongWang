<template>
    <div>
        <ul>
            <li v-for="(data,index) in citylist" :key="index">
                {{data.title}}
                <ul>
                    <li v-for="citys in data.cityEntry" :key="citys.cityCode" @click="changeCity(citys.cityCode)">
                        {{citys.cityName}}
                    </li>
                </ul>
            </li>
        </ul>
    </div>
</template>

<script>
import Axios from 'axios'
export default {
  data () {
    return {
      citylist: []
    }
  },
  mounted () {
    Axios({
      url: 'https://wap.showstart.com/api/wap/city/group.json?st_flpv=158022192437734d8v1OlIMtHpxDl87Vg&sign=&trackPath=&terminal=wap'
    }).then(res => {
    //   console.log(res.data)
      this.citylist = res.data.result
    })
  },
  methods: {
    changeCity (CityId) {
      //   console.log(CityId)
      this.$router.push(`/home/${CityId}`)
    }
  }
}
</script>
