<template>
  <div id="app">
    <Advertise></Advertise>
    <router-view></router-view>
    <Tabbar></Tabbar>
  </div>
</template>
<script>
import Tabbar from '@/components/Tabbar/Tabbar'
import Advertise from '@/components/Advertise/Advertise'

export default {
  components: {
    Tabbar,
    Advertise
  }
}
</script>
