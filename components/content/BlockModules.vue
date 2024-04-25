<script setup>
const {data} = await useAsyncData(() => {
    return queryContent('/modules/').find()
})
defineProps({
    title: {
        type: String
    }

})
</script>
<template>
    <div>
        <div class="title"  v-if="title">
            {{ title }}
        </div>
        <div class="grid  grid-cols-4 gap-4 ">
            <NuxtLink v-for="post in data" :key="post._id" :to="post._path" class="card p-4">

                <h2>{{ post.cardtitle }}</h2>

            </NuxtLink>
        </div>
    </div>
</template>

<style scoped lang="sass">
.card
    border-radius: 2px
    border: 1px solid #cccccc
    overflow: hidden
    display: flex
    padding: 30px
    align-items: center
    justify-content: center
    text-align: center
    line-height: 1.2
    text-decoration: none
    transition-property: all
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1)
    transition-duration: 300ms
    h2
        font-size: 20px
        line-height: 1.2
        color: #333
.title
    font-size: 26px
    font-weight: 600
    margin-bottom: 30px
</style>