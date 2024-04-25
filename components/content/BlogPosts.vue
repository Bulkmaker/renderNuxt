<script setup lang="ts">
const {data} = await useAsyncData(() => {

    return queryContent('/blog').sort({date: -1, favorite: 1}).where({category: 'blog'}).find()
})
</script>
<template>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-5 gap-4">
        <div v-for="post in data" :key="post._id" class="card">
            <NuxtLink :to="post._path"  :aria-label="post.title" :title="post.title">
                <div class="card-image" :style="{ backgroundImage: `url(${post.thumb})` }">
                        <span v-if="post.cardtitle" class="card-title">
                         {{ post.cardtitle }}
                        </span>
                    <span v-if="post.date" class="card-year">
                         {{ post.date }}
                        </span>
                    <!--                        <img        :src="post.thumb" :alt="post.title"     loading="lazy"/>-->
                    <div class="card-tags">
                        <div v-for="(tag, idx) of post.tags" :key="idx">
                            <div class="card-tag">{{ tag }}</div>
                        </div>
                    </div>
                </div>
            </NuxtLink>
        </div>
    </div>

</template>

<style lang="sass" scoped>
.card
    overflow: hidden
// outline: 1px solid #252525
.card-image
    aspect-ratio: 1.3/1
    width: 100%
    display: flex
    align-items: center
    justify-content: center
    background-color: #EFF7FF
    position: relative
    background-position: center center
    transition: background-size 100ms linear
    background-size: 105%
    background-repeat: no-repeat
    &:hover
        background-size: 108%
        &:after
            opacity: 1

        .card-title
            opacity: 1

    &:after
        position: absolute
        z-index: 1
        top: 0
        right: 0
        left: 0
        bottom: 0
        content: ''
        box-shadow: inset 0 0 50px 17px rgba(0, 0, 0, 0.1)
        opacity: 1
        @apply transition-all duration-500

    img
        @apply scale-110
        @apply transition-all duration-500

.card-year
    position: absolute
    bottom: 10px
    right: 10px
    padding: 5px 10px
    font-size: 17px
    font-weight: 500
    border-radius: 2px
    background: hsla(0, 0%, 100%, .6)
    color: #333333
    z-index: 3

.card-title
    position: absolute
    top: 10px
    left: 10px
    padding:  8px 10px
    font-size: 18px
    font-weight: 500
    color: #333
    z-index: 3
    opacity: 1
    background-color: rgba(255, 255, 255, 0.75)
    display: inline-flex
    align-items: center
    border-radius: 2px


    @apply transition-all duration-500
</style>