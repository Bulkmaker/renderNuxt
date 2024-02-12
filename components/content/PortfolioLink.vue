<script setup lang="ts">
defineProps({
    link: {
        type: String,
        default: 'https://render-room.ru/'
    },
    linkTitle: {
        type: String
    }

})
</script>
<template>
    <div >
        <a :href="link" class="link portfolio-link"> {{ linkTitle ? linkTitle : link }} <UIcon name="i-bi-link-45deg" /></a>
     </div>
</template>


<style lang="sass" scoped>
.portfolio-link
    font-size: 26px
    font-weight: 600
    display: inline-flex
    align-items: center
    gap: 5px


</style>