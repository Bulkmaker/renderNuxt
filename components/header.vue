<template>
    <header>
        <div class="px-5   flex justify-between w-full align-middle">
            <NuxtLink to="/" class="logo"><img src="/logo.png" alt="render-room.ru" width="250"></NuxtLink>
            <Menu/>

        </div>
    </header>
</template>


<style lang="sass" scoped>
header
    position: fixed
    top: 0
    right: 0
    left: 0
    height: 70px
    display: flex
    align-items: center
    background: #FFFFFF
    border-bottom: 1px solid rgba(211, 211, 211, 0.46)
    z-index: 10
    .logo
        padding-left: 70px
        display: flex
        align-items: center
</style>
<script setup lang="ts">

</script>