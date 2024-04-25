<script setup>
const {page} = useContent()
</script>

<template>
    <div class="blog__wrapper  content-wrapper">
        <NuxtLink to="/blog" class="my-4 block no-underline"><span>← назад к новостям</span></NuxtLink>

        <slot/>
    </div>



</template>
<style scoped lang="sass">
.blog__wrapper
    max-width: 100%
    width: 1000px
    margin: 0 auto

</style>