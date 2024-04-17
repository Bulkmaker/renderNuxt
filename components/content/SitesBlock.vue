<script setup lang="ts">
const {data} = await useAsyncData(() => {
    return queryContent('/sites/').where({category: 'site'}).find()
})
</script>
<template>

    <div class="sitegrid  mb-5 ">
        <div v-for="post in data" :key="post._id" class="card">
            <div class="card-link">
                    <span v-if="post.cardtitle" class="card-title">
                     {{ post.cardtitle }}
                    </span>
                <span v-if="post.cardtext" class="card-text">
                     {{ post.cardtext }}
                    </span>
                <hr class="my-6">
                <div class="sitecard-tags mt-4">
                    <ul v-for="(tag, idx) of post.tags" :key="idx">
                        <li>{{ tag }}</li>
                    </ul>
                </div>
            </div>
            <div class="card-priceblock">


                <div v-if="post.cardprice" class="card-price">
                    {{ post.cardprice }}
                </div>

                <NuxtLink :to="post._path" class="button"  aria-label="Подробнее">
                    Подробнее
                </NuxtLink>


            </div>
        </div>
    </div>

</template>

<style lang="sass" scoped>
.sitegrid
    display: grid
    grid-template-columns: 1fr
    gap: 30px
    @media (screen(lg))
        grid-template-columns: 1fr 1fr


.card
    display: grid
    grid-template-columns: 1fr
    overflow: hidden
    //background-color: #ffffff
    border-radius: 2px
    //border: 1px solid #cccccc
    @apply transition-all duration-300
    background: linear-gradient(165.7deg, #ebd0a0 -113.68%, #3c3a38 89.84%)
    color: #ffffff
    grid-template-rows: 1fr auto
    user-select: none
    font-size: 15px
    @media (screen(md))
        font-size: 17px
    &:hover
        @apply shadow-lg
        transform: translateY(-2px)
    &-priceblock
        padding: 30px
        display: grid
        gap: 20px
        grid-template-columns: 1fr
        align-items: center
        justify-content: center
        @media (screen(md))
            grid-template-columns: 1fr auto
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
        font-size: 28px
        font-weight: 600

    .button
        padding: 15px 40px

</style>