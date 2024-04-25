<script setup lang="ts">
const {data} = await useAsyncData(() => {
    return queryContent('/sites/').where({category: 'site'}).find()
})
</script>
<template>

    <div class="sitegrid  mb-5 ">
        <div v-for="post in data" :key="post._id" class="scard">
            <div class="scard-link">
                    <span v-if="post.cardtitle" class="scard-title">
                     {{ post.cardtitle }}
                    </span>
                <span v-if="post.cardtext" class="scard-text">
                     {{ post.cardtext }}
                    </span>
                <hr class="my-6">
                <div class="sitescard-tags mt-4">
                    <ul v-for="(tag, idx) of post.tags" :key="idx">
                        <li>{{ tag }}</li>
                    </ul>
                </div>
            </div>
            <div class="scard-priceblock">


                <div v-if="post.cardprice" class="scard-price">
                    {{ post.cardprice }}
                </div>

                <NuxtLink :to="post._path" class="button"  aria-label="Подробнее">
                    Подробнее
                </NuxtLink>


            </div>
        </div>
    </div>

</template>

<style lang="sass"  >





</style>