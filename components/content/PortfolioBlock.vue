<script setup lang="ts">
defineProps({
  title: {
    type: String,
    default: 'Default title'
  }

})
</script>

<template>
  <div class="block ">
    <div class="title">
        <span>
            {{ title }}
        </span>

    </div>
    <div class="text">
      <slot/>
    </div>
  </div>
</template>

<style lang="sass" scoped>
.block
  display: grid
  grid-template-columns: 300px 1fr
  position: relative
  margin-bottom: 60px
  margin-top: 30px
  gap: 30px

.text
  @apply text-lg
.title
  @apply text-4xl font-semibold
  span
    position: sticky
    top: 30px

@media (max-width: 768px)
  .block
    grid-template-columns: 1fr
</style>
