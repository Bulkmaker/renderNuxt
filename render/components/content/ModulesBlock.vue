<script setup lang="ts">
const {data} = await useAsyncData(() => {

    return queryContent('/modules/').where({category: 'module'}).find()
})
</script>
<template>
    <div class="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-5 gap-5">
        <div v-for="post in data" :key="post._id" class="card">
            <NuxtLink :to="post._path" class="card-link">
                <div class="card-icon" v-if="post.thumb">
                    <img :src="`${post._path}${post.thumb}`" :alt="post.title"/>
                </div>
                <div v-if="post.cardtitle" class="card-title">
                    {{ post.cardtitle }}
                </div>
                <div v-if="post.cardtext" class="card-text">
                    {{ post.cardtext }}
                </div>
                <div v-if="post.cardprice" class="card-price">
                    {{ post.cardprice }}
                </div>
            </NuxtLink>
        </div>
    </div>
</template>

<style lang="sass" scoped>
.card
    overflow: hidden
    border-radius: 2px
    border: 1px solid #cccccc
    padding: 30px
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
    &-title
        color: #333
        font-weight: 600
        font-size: 22px
        line-height: 1.3
        text-decoration: underline
        text-decoration-color: transparent
        transition: .3s
        margin-bottom: 15px

    &-text
        line-height: 1.4
    &-price
        margin-top: 20px
        font-size: 22px
        color: #cc0000
        font-weight: 600




</style>