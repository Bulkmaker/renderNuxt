<script setup>

    const { page } = useContent()
</script>

<template>

    <div class="site-portfolio  content-wrapper container mx-auto flex-col flex-grow">
        <NuxtLink to="/uslugi" class="my-4 block no-underline"> <span >← назад к услугам</span></NuxtLink>
        <h1>{{ page.h1 ? page.h1 : page.cardtitle }}</h1>

         <slot/>

        <a :href="page.url" class="link portfolio-link my-20" target="_blank" v-if="page.url"> {{ page.menutitle ? page.menutitle : page.url }}
            <img src="/svg/link.svg" alt="social__inst" width="20" height="20" >
        </a>
    </div>


</template>
<style scoped lang="sass">
.card-tags
    display: flex
    gap: 5px
    @apply flex-wrap justify-start
    z-index: 3
    margin-bottom: 20px
.card-tag
    background: hsl(0, 0%, 92%)
    border-radius: 4px
    color: #1d233f
    flex: none
    line-height: 1
    padding: 8px
    white-space: nowrap
    font-size: 16px
    user-select: none



.portfolio-link
    font-size: 26px
    font-weight: 600
    display: inline-flex
    align-items: center
    gap: 5px

    margin-left: auto

    margin-right: auto
.site-portfolio
    max-width: 100%
    width: 1000px
    margin-left: auto
    margin-right: auto
    font-size: 18px
    line-height: 1.4
    display: flex
    flex-direction: column
    margin-bottom: 30px
    ul
        list-style: square
        li
            position: relative
            &:before
                content: ""
                position: absolute
                top: 18px
                left: 0
                width: 25px
                height: 1.5px
                background-color: #202020
</style>