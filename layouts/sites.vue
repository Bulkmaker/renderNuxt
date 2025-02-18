<script setup>
import moment from "moment/moment";
import 'moment/locale/ru';
const {page} = useContent()
</script>

<template>
  <div class="portfolio-header ">
    <div class="container site-portfolio">
      <NuxtLink to="/portfolio" class="my-4 block no-underline"><span>← ко всем проектам</span></NuxtLink>
      <div>
        <span class="text-base my-2 p-2 bg-gray-100 rounded-md inline-flex">

        {{ moment(page.date).locale('ru').format('MMMM YYYY').charAt(0).toUpperCase() + moment(page.date).locale('ru').format('MMMM YYYY').slice(1) }}

      </span>
      </div>
      <h1 class="font-normal text-5xl">{{ page.h1 ? page.cardtitle : page.h1 }}</h1>
      <p class="mb-14">{{ page.description }}</p>


      <div class="card-tags">
        <div v-for="(tag, idx) of page.tags" :key="idx">
          <div class="card-tag">{{ tag }}</div>
        </div>
      </div>
      <div>
        <a :href="page.url" class="link portfolio-link my-6" target="_blank">
          {{ page.menutitle ? page.menutitle : page.url }}
          <img src="/svg/link.svg" alt="social__inst" width="20" height="20">
        </a>
      </div>


    </div>
  </div>
  <div class="site-portfolio ">


    <slot/>

    <a :href="page.url" class="link portfolio-link my-20" target="_blank"> {{
        page.menutitle ? page.menutitle : page.url
      }}
      <img src="/svg/link.svg" alt="social__inst" width="20" height="20">
    </a>
  </div>


</template>
<style scoped lang="sass">
.portfolio-header
  padding: 50px 20px
  background-color: aliceblue
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
  font-size: 20px
  line-height: 1.4
  display: flex
  flex-direction: column

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