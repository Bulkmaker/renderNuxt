<script setup>
import moment from "moment";

const {page} = useContent()
</script>

<template>
  <div class="portfolio-header ">
    <div class=" module__wrapper content-wrapper container mx-auto flex-col flex-grow  ">
      <NuxtLink to="/modules" class="my-4 block no-underline"><span>← ко всем модулям</span></NuxtLink>

      <h1 class="font-normal text-5xl">{{ page.h1 ? page.cardtitle : page.h1 }}</h1>
      <p class="mb-14">{{ page.description }}</p>


      <div class="priceblock" v-if="page.cardprice">
        Стоимость:
        <span class="priceblock-price">            {{ page.cardprice }}        </span>
      </div>
    </div>
  </div>
  <div class="module__wrapper   content-wrapper container mx-auto flex-col flex-grow">
    <slot/>
  </div>


</template>
<style scoped lang="sass">
.portfolio-header
  //padding: 50px 20px
  background-color: aliceblue

.priceblock
  display: flex
  flex-direction: column
  font-size: 22px
  //margin: 40px 0
  //border-left: 6px solid var(--accent)
  //padding: 10px 10px 10px 20px
  //background-color: #edeff4
  &-price
    display: block
    font-size: 32px
    font-weight: 700

.module__wrapper
  max-width: 100%
  width: 1000px

  margin: 0 auto

</style>