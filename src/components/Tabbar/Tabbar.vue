<template>
    <div>
        <ul>
            <router-link to="/home" tag="li" active-class="active">
                <i class="iconfont icon-icon_circle_line"></i>
                <span>演出</span>
            </router-link>
            <router-link to="/rim" tag="li" active-class="active">
                <i class="iconfont icon-icon_glass"></i>
                <span>周边</span>
            </router-link>
            <router-link to="/crowd" tag="li" active-class="active">
                <i class="iconfont icon-icon_coinpurse_line"></i>
                <span>众筹</span>
            </router-link>
            <router-link to="/center" tag="li" active-class="active">
                <i class="iconfont icon-icon_principal"></i>
                <span>我的</span>
            </router-link>
        </ul>
    </div>
</template>

<style lang="scss" scoped>
    ul{
        width: 100%;
        height: 0.5rem;
        background: #fff;
        position: fixed;
        bottom: 0;
        left: 0;
        display: flex;
        justify-content: space-around;
        align-items: center;
    }
    li{
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        color: #c3c3c3;
        i{
            font-size: 0.2rem;
        }
    }
    .active{
        color: #5a5a5a
    }
</style>
