<script setup lang="ts">
const {data} = await useAsyncData(() => {

    return queryContent('/projects/').limit(30).find()
})
const { render } = '/Render-room/'
</script>
<template>
    <div class="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mb-5 gap-5">
        <div v-for="post in data" :key="post._id" class="card">
            <NuxtLink :to="post._path" class="card-link">
                <div class="card-image" v-if="post.image1">
                    <nuxt-img :src="post.image1" placeholder="img/thumb.svg" :alt="post.title" provider="myProvider" loading="lazy"  format="webp" />
                </div>
                <span v-if="post.Площадь" class="card-area">
                     {{ post.Площадь }} м<sup>2</sup>
                </span>
                <div v-if="post.Проект" class="card-title">
                    Проект дома {{ post.Размер }} <span>{{ post.Проект }}</span>
                </div>
            </NuxtLink>
        </div>
    </div>
</template>

<style lang="sass" scoped>
.card
    overflow: hidden

    border: 1px solid #cccccc
    border-radius: 2px
    cursor: pointer
    display: flex
    flex-direction: column
    @apply transition-all duration-300
    &:hover
        @apply shadow-lg
        .card-title
            text-decoration-color: #cc0000
            color: #cc0000
    &-link
        display: flex
        flex-direction: column
        height: 100%
        text-decoration: none
        color: #333
        position: relative
        &:hover
            text-decoration: none
    &-image
        aspect-ratio: 16/9
        img
            width: 100%
    &-title
        color: #333
        font-weight: 600
        font-size: 20px
        line-height: 1.3
        padding: 20px
        transition: .3s
        display: flex
        justify-content: space-between
    &-area
        position: absolute
        top: 15px
        right: 0
        background: #C1284D
        border-radius: 15px 0px 0px 15px
        font-size: 16px
        line-height: 30px
        letter-spacing: 0.01em
        color: #FFFFFF
        padding: 0 12px 0 15px
        height: 30px
        min-width: 70px
        z-index: 2
        font-weight: 500
    &-text
        line-height: 1.4
    &-price
        margin-top: 20px
        font-size: 22px
        color: #cc0000
        font-weight: 600




</style>