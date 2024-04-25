<script setup>
const {page} = useContent()
</script>

<template>
    <div class="module__wrapper  content-wrapper">
        <NuxtLink to="/modules" class="my-4 block no-underline"><span>← ко всем модулям</span></NuxtLink>

        <slot/>
    </div>



</template>
<style scoped lang="sass">
.module__wrapper
    max-width: 100%
    width: 1000px

    margin: 0 auto

</style>