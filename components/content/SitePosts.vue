<script setup lang="ts">
const {data} = await useAsyncData(() => {

    return queryContent('/portfolio/').sort({date: -1, favorite: 1}).limit(5).find()
})
</script>
<template>


    <Swiper class="myswiper"
            :modules="[SwiperAutoplay]"
            :slidesPerView="1"
            :space-between="20"
            :loop="true"
            :effect="'Cards'"
            :breakpoints="{

              '768': {
                slidesPerView: 2,
              },
              '1024': {
                slidesPerView: 3,
              },
              }"
            :autoplay=" {
            delay: 2000,
            disableOnInteraction: true,
            }
    "


    >
        <SwiperSlide v-for="post in data" :key="post._id">
            <NuxtLink :to="post._path" :aria-label="post.title" :title="post.title" class="card">
                <div class="card-image" :style="{ backgroundImage: `url(${post.thumb})` }">
                        <span v-if="post.cardtitle" class="card-title">
                         {{ post.cardtitle }}
                        </span>
                    <span v-if="post.year" class="card-year">
                         {{ post.year }}
                        </span>
                    <!--                        <img        :src="post.thumb" :alt="post.title"     loading="lazy"/>-->
                    <div class="card-tags">
                        <div v-for="(tag, idx) of post.tags" :key="idx">
                            <div class="card-tag">{{ tag }}</div>
                        </div>
                    </div>
                </div>
            </NuxtLink>
        </SwiperSlide>
    </Swiper>


</template>

<style lang="sass" scoped>

.myswiper
    padding-top: 50px
    max-width: 100%
    overflow: hidden

.card
    overflow: hidden
    border: 4px solid var(--accent)
    display: block
    user-select: none

.card-tag
    background: hsl(0, 0%, 92%)
    border-radius: 4px
    color: #1d233f
    flex: none
    line-height: 1
    padding: 8px
    white-space: nowrap
    font-size: 13px


.card-tags
    position: absolute
    bottom: 10px
    left: 10px
    display: flex
    right: 0
    gap: 5px
    @apply flex-wrap justify-start
    z-index: 3

.card-image
    aspect-ratio: 1.3/1
    width: 100%
    display: flex
    align-items: center
    justify-content: center
    background-color: #EFF7FF
    position: relative
    background-position: center center
    transition: background-size 400ms linear
    background-size: 100%

    &:hover
        background-size: 105%

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
        box-shadow: inset 0 0 100px 17px rgba(0, 0, 0, 0.3)
        opacity: 0
        @apply transition-all duration-500

    img
        @apply scale-110
        @apply transition-all duration-500

.card-year
    position: absolute
    top: 10px
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
    top: 0
    left: 0
    right: 0
    padding: 20px
    font-size: 22px
    text-transform: uppercase
    font-weight: 600
    color: #ffffff
    background: linear-gradient(180deg, rgba(26, 26, 26, 0.83) 0%, rgba(26, 26, 26, 0.00) 100%)
    z-index: 3
    opacity: 0
    height: 50%
    @apply transition-all duration-500
</style>