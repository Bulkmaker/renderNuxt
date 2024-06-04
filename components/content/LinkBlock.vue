<script setup lang="ts">
defineProps({
    title: {
        type: String,
        default: ''
    },
    url: {
        type: String,
        default: ''
    }

})
</script>

<template>
    <a :href="url" class="link portfolio-link my-20" target="_blank"> {{ title }}
        <img src="/svg/link.svg" alt="social__inst" width="20" height="20" >
    </a>
</template>

<style lang="sass" scoped>
    .portfolio-link
        font-size: 26px
        font-weight: 600
        display: inline-flex
        align-items: center
        gap: 5px
        margin-left: auto
        margin-right: auto
</style>