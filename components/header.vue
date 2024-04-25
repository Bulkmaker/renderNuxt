<template>
    <header class="header">
        <div class="header__inner">
            <NuxtLink to="/" class="logo"><img src="/logo.png" alt="render-room.ru"></NuxtLink>
            <Menu/>

        </div>
    </header>
</template>


<style lang="sass" scoped>
.header
    position: fixed
    top: 0
    right: 0
    left: 0
    height: 60px
    display: flex
    align-items: center
    background: #FFFFFF
    border-bottom: 1px solid rgba(211, 211, 211, 0.46)
    z-index: 10
    padding: 0 20px 0 70px
    @screen md
        padding-left: 100px
    &__inner
        display: flex
        width: 100%
        justify-content: space-between
        align-items: center

    .logo
        display: flex
        align-items: center
        img
            max-width: 100%
            width: 220px
</style>

<script setup lang="ts">

</script>