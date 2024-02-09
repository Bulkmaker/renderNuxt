<script setup>
const {data} = await useAsyncData(() => {
  return queryContent('/modules/').find()
})
</script>
<template>
  <div>
    <div class="grid  grid-cols-3 gap-4 ">
      <div v-for="post in data" :key="post._id" class="card p-4">
        <NuxtLink :to="post._path">
          <NuxtImg src="thumb.svg" fit="cover" placeholder />
        </NuxtLink>
        <h2>{{ post.title }}</h2>
        <NuxtLink :to="post._path">
          Посмотреть
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card {
  border-radius: 5px;
  border: 1px gray solid;
}
</style>