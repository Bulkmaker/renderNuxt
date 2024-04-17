<template>
  <div class="header-right">
    <nav class="flex gap-4 ">
      <NuxtLink to="/uslugi" class="menu__link link">Услуги</NuxtLink>
      <NuxtLink to="https://3d.render-room.ru" target="_blank" class="menu__link link">3D Маркет</NuxtLink>
      <NuxtLink to="/portfolio" class="menu__link link">Портфолио</NuxtLink>
      <NuxtLink to="/contacts" class="menu__link link">Контакты</NuxtLink>
    </nav>
      <!--
      <UButton icon="i-bi-telephone" @click="isOpen = true" size="xl"/>

      <UModal v-model="isOpen" >
          <div class="p-4">
              <div class="w-full flex justify-center">
                  <UCard :ui="{ body: { base: 'grid grid-cols-1 w-full' } }">
                      <div class="space-y-4">
                          <UFormGroup label="Ваш телефон">
                              <UInput placeholder="+7 915 915 32 20" icon="i-heroicons-device-phone-mobile" />
                          </UFormGroup>
                      </div>

                      <UDivider label="или" color="gray" orientation="horizontal" class="my-5"/>

                      <div class="space-y-3 flex flex-col justify-center">
                          <div class="text-lg mb-1">Напишите нам:</div>
                          <UButton icon="i-bi-telegram" color="sky" label="Написать в телеграм"  block />
                          <UButton icon="i-bi-whatsapp" color="primary" label="Написать в Whatsapp"  block />
                      </div>
                  </UCard>
              </div>
          </div>
      </UModal>
       -->
  </div>

</template>

<style lang="sass" scoped>
.header-right
  display: grid
  grid-template-columns: 1fr auto
  align-items: center
nav
    display: none
    align-items: center
    @screen md
        display: block
.divider
  border-left-width: 1px
  border-color: rgba(178, 178, 178, 0.7)
  margin-left: 25px
  padding-left: 25px
  display: grid
  grid-template-columns: 1fr 1fr
  gap: 10px
.menu__link
    text-decoration: none
    font-weight: 500
    transition: all ease .4s
    margin-right: 20px



</style>
<script setup lang="ts">
const isOpen = ref(false)
</script>