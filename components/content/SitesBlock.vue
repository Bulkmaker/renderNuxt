<script setup lang="ts">
const {data} = await useAsyncData(() => {
    return queryContent('/sites/').where({category: 'site'}).find()
})
</script>
<template>

    <div class="sitegrid  mb-5 ">
        <div v-for="post in data" :key="post._id" class="card">
            <div  class="card-link">
                    <span v-if="post.cardtitle" class="card-title">
                     {{ post.cardtitle }}
                    </span>
                <span v-if="post.cardtext" class="card-text">
                     {{ post.cardtext }}
                    </span>
                <span v-if="post.cardprice" class="card-price">
                     {{ post.cardprice }}
                    </span>
                <NuxtLink :to="post._path"
                          class="button my-5"
                >
                    Заказать
                </NuxtLink>
                <hr>
                <div class="sitecard-tags mt-4">
                    <ul v-for="(tag, idx) of post.tags" :key="idx">
                        <li>{{ tag }}</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>

</template>

<style lang="sass" scoped>
.sitegrid
    display: grid
    grid-template-columns: 1fr
    gap: 0

.card
    overflow: hidden
    //background-color: #ffffff
    box-shadow: 0px 0px 14px 0px rgba(173, 173, 173, 0.75)
    border-radius: 10px
    &:nth-child(odd)
        margin: 50px 0
    &-link
        text-decoration: none
        padding: 30px
        height: 100%
        color: inherit
        display: flex
        flex-direction: column

    &-title
        font-weight: 600
        font-size: 24px
        text-decoration: none

    &-price
        font-size: 22px
        font-weight: 500
        margin-top: 20px
        text-decoration: underline
@screen lg
    .sitegrid
        grid-template-columns: 1fr 1fr 1fr
        gap: 0
    .card
        &:nth-child(even)
            z-index: 2
        &:nth-child(1)
            border-radius: 10px 0 0 10px
        &:nth-child(3)
            border-radius: 0 10px 10px 0

@screen md




</style>