<template>
  <footer>
    <div class=" container mx-auto py-4">
        <div class="footer-grid">
            <img src="/logow.png" alt="" class="shrink-0 logo">
            <ul class="list-image-none">
                <li class="ms-0 ps-0">
                    <NuxtLink to="/sites" class=" ">Создание сайтов</NuxtLink>
                </li>
                <li class="ms-0 ps-0">
                    <NuxtLink to="/uslugi" class=" ">Услуги</NuxtLink>
                </li>
                <li class="ms-0 ps-0">
                    <NuxtLink to="/uslugi/seo-prodvizhenie-sajtov" class=" ">Продвижение</NuxtLink>
                </li>
            </ul>
            <ul class="list-image-none">
                <li class="ms-0 ps-0">
                    <NuxtLink to="/portfolio" class=" ">Наши работы</NuxtLink>
                </li>
                <li class="ms-0 ps-0">
                    <NuxtLink to="/modules" class=" ">Модули для сайтов</NuxtLink>
                </li>
                <li class="ms-0 ps-0">
                    <NuxtLink to="https://3d.render-room.ru" class=" " target="_blank">3D Маркет проектов домов</NuxtLink>
                </li>
            </ul>
            <div class="flex flex-col">
                <a href="https://api.whatsapp.com/send?phone=79159153220" target="_blank" class="button ">
                    <img src="/img/whatsapp-symbol-logo-svgrepo-com.svg" alt="Whatsapp" width="25" height="25" class="mr-2">
                    Whatsapp</a>

                <a href="https://t.me/misha_bulic" target="_blank" class="button ">
                    <img src="/img/telegram-svgrepo-com.svg" alt="Whatsapp" width="25" height="25" class="mr-2">
                    Telegram</a>

            </div>
        </div>
        <hr>
        <NuxtLink to="/politika" class="text-sm">Политика Конфиденциальности</NuxtLink>


    </div>
  </footer>
</template>
<style lang="sass" scoped>
footer
    padding: 20px 30px
    background-color: #1a191a
    .logo
      width: 220px
      max-width: 100%
    a
        color: #ffffff
        text-decoration: none
        border-bottom: 0
    .button
        background: transparent
        color: #ffffff
        @apply  w-full text-sm

.footer
    &-grid
        display: grid
        gap: 30px
        grid-template-columns: 1fr
        @screen md
            grid-template-columns: auto auto 1fr auto
</style>
<script setup lang="ts">
</script>