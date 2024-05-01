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
        <div class="cardgrid">
            <NuxtLink v-for="post in data" :key="post._id" :to="post._path" class="card p-4">

                <h2>{{ post.cardtitle }}</h2>

            </NuxtLink>
        </div>
    </div>
</template>

<style scoped lang="sass">
.cardgrid
    display: grid
    grid-template-columns: 1fr
    gap: 30px
    @screen md
        grid-template-columns: 1fr 1fr
    @screen lg
        grid-template-columns: 1fr 1fr 1fr
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
    position: relative
    &:before
        position: absolute
        top: 0
        bottom: 0
        left: 0
        width: 3px
        content: ''
        background-color: var(--accent)
        transition: all ease 300ms
    &:hover
        &:before
            width: 8px
    h2
        font-size: 20px
        line-height: 1.2
        color: #333
        margin: 10px

.title
    font-size: 26px
    font-weight: 600
    margin-bottom: 30px
</style>