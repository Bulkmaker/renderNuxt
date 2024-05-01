<script setup>
const {page} = useContent()
</script>

<template>
    <div class="module__wrapper  content-wrapper">
        <NuxtLink to="/modules" class="my-4 block no-underline"><span>← ко всем модулям</span></NuxtLink>

        <slot/>
        <div class="priceblock" v-if="page.cardprice">
            Стоимость:
            <span class="priceblock-price">            {{ page.cardprice }}        </span>
        </div>

    </div>


</template>
<style scoped lang="sass">
.priceblock
    display: flex
    flex-direction: column
    font-size: 22px
    margin: 40px 0
    border-left: 6px solid var(--accent)
    padding: 10px 10px 10px 20px
    background-color: #edeff4
    &-price
        display: block
        font-size: 32px
        font-weight: 700

.module__wrapper
    max-width: 100%
    width: 1000px

    margin: 0 auto

</style>