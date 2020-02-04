<template>
    <div>
        <ul>
            <router-link to="/home" tag="li" active-class="active">演出</router-link>
            <router-link to="/rim" tag="li" active-class="active">周边</router-link>
            <router-link to="/crowd" tag="li" active-class="active">众筹</router-link>
            <router-link to="/center" tag="li" active-class="active">我的</router-link>
        </ul>
    </div>
</template>

<style lang="scss" scoped>
    .active{
        color: red
    }
</style>
