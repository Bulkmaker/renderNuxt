<template>
  <div class="maintop">
      <div class="maintop__wrapper">
          <h1>
              Render room
          </h1>
          <p class="subtitle">Разработка сайтов для строительных компаний </p>
      </div>

  </div>
</template>
<style scoped lang="sass">
main
    padding: 0
.maintop
    height: 100vh
    display: flex
    flex-direction: column
    justify-content: center
h1
    display: grid
    grid-template-columns: auto 1fr
    font-size: clamp(2em,calc(9 / 80 * 100vw),5em)
    line-height: 1
    font-weight: 600
    text-transform: uppercase
    flex-grow: 1
    white-space: nowrap
h1::after
    border-bottom: 10px solid #81AB24
    display: flex
    flex-basis: 100%
    content: ''
.subtitle
    font-size: clamp(20px,calc(9 / 150 * 100vw),50px)

    line-height: 1.3
</style>
<script setup lang="ts">
</script>