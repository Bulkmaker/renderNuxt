<template>
  <div class="maintop">
      <div class="maintop__wrapper">
          <div class="text">
              <NuxtImg src="/img/mainRR.svg" alt="Render room"



              />
          </div>

          <p class="subtitle">Разработка сайтов для строительных компаний </p>
      </div>

  </div>
</template>
<style scoped lang="sass">
main
    padding: 0
.maintop
    height: 90vh
    display: flex
    flex-direction: column
    justify-content: center
    background-image: url("../svg/hexagon.svg")
    background-position: right center

    background-repeat: no-repeat
.text
    display: grid
    grid-template-columns: minmax(200px, 500px) 1fr
    line-height: 1
    flex-grow: 1
    white-space: nowrap
    img
        width: 100%
        padding-right: 10px
.text::after
    border-bottom: 3px solid #81AB2469
    display: flex
    flex-basis: 100%
    content: ''
.subtitle
    margin-top: 10px
    font-size: clamp(20px,calc(9 / 150 * 100vw),30px)

    line-height: 1.3
</style>
<script setup lang="ts">
</script>