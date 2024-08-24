<script setup>
import moment from 'moment'; // для даты
const {page} = useContent()
</script>

<template>
    <div class="blog__wrapper  content-wrapper">
        <NuxtLink to="/blog" class="my-4 block no-underline"><span>← назад к новостям</span></NuxtLink>

        <div class="my-2 p-2 bg-gray-100 rounded-md inline-flex">{{ moment(page.date).locale('ru').format('D.MM.YYYY') }}</div>
        <h1 class="m-0"> {{ page.h1  }}</h1>
        <slot/>
    </div>



</template>
<style scoped lang="sass">
.blog__wrapper
    max-width: 100%
    width: 1000px
    margin: 0 auto

</style>