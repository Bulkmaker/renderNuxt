<script setup lang="ts">
const {data} = await useAsyncData(() => {
  return queryContent('/portfolio/').find()
})
</script>
<template>
  <div>
    <div class="grid  grid-cols-3 gap-4 mb-5 ">
      <div v-for="post in data" :key="post._id" class="card">
        <NuxtLink :to="post._path">
          <div class="card-image">

            <img :src="`${post._path}${post.thumb}`" :alt="post.title"/>
            <div class="card-tags">
              <div v-for="(tag, idx) of post.tags" :key="idx">
                <!-- The Tag component -->
                <div class="card-tag">{{ tag }}</div>
              </div>
            </div>
          </div>
        </NuxtLink>
        <div class="card-body">
          <div class="card-title">{{ post.cardtitle }}</div>
          <p>{{ post.title }}</p>

          <NuxtLink :to="post._path">
            Посмотреть
          </NuxtLink>
        </div>

      </div>
    </div>
  </div>
</template>

<style lang="sass" scoped>
.card
  border-radius: 5px
  border: 1px #cccccc solid
  overflow: hidden
  &:hover
    @apply shadow
  &-title
    @apply text-2xl

  &-body
    padding: 20px
.card-tag
  background: hsla(0,0%,100%,.6)
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
.card-image
  height: 300px
  width: 100%
  display: flex
  align-items: center
  justify-content: center
  background-color: #EFF7FF
  padding: 60px 60px 80px 60px
  position: relative

  &:hover
    img
      @apply scale-105
  img
    max-width: 70%
    @apply transition-all
</style>