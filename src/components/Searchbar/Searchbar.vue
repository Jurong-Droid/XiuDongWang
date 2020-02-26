<template>
    <div>
        <div class="search_box">
            <div class="city" @click="goCity()">
                <i class="iconfont icon-icon_gps_fill"></i>
                <p>北京</p>
            </div>
            <div class="scarch">
                <input type="text" placeholder="搜索演出关键字" @click="goSearch()">
                <i class="iconfont icon-icon_search"></i>
            </div>
            <div class="English">
                <i class="iconfont icon-icon_new_recruit_fil"></i>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  methods: {
    goSearch () {
      this.$router.push('/search')
    },
    goCity () {
      this.$router.push('/city')
    }
  }
}
</script>

<style lang="scss" scoped>
    .search_box{
        width: 100%;
        height: 0.5rem;
        background: #fff;
        display: flex;
        align-items: center;
        padding: 0 0.20rem;
        .city{
            display: flex;
            justify-content: space-between;
            align-items: center;
            i{
                font-size: 0.15rem;
                color: #000;
                margin-right: 0.04rem;
            }
            p{
                font-size: 0.12rem;
                color: #000;
            }
        }
        .scarch{
            flex: 1;
            padding-left: 0.2rem;
            position: relative;
            input{
                width: 2.4rem;
                height: 0.3rem;
                background: #f8f8f8;
                border-radius: 0.14rem;
                border: none;
                padding-left: 0.3rem;
            }
            input::-webkit-input-placeholder {
                color: #c9c9c9;
            }
            input::-moz-input-placeholder {
                color: #c9c9c9;
            }
            input::-ms-input-placeholder {
                color: #c9c9c9;
            }
            i{
                position: absolute;
                top: 50%;
                transform: translateY(-50%);
                left: 0.32rem;
                font-size: 0.12rem;
                color: #c9c9c9;
            }
        }
        .English{
            i{
                font-size: 0.15rem;
                color: #000;
            }
        }
    }
</style>
