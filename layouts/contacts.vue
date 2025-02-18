<script setup>

const {page} = useContent()

</script>

<template>
    <div class="contacts  content-wrapper container mx-auto flex-col flex-grow ">
        <h1>{{ page.h1 }}</h1>
        <slot/>
        <div class=" ">
            <div class="flex items-center align-center text-center w-full flex-row my-5"
                 color="gray">
                <div class="flex border-gray-200 dark:border-gray-800 w-full border-t border-solid"></div>
                <div class="font-medium text-gray-700 dark:text-gray-200 flex mx-3 whitespace-nowrap"><span
                    class="text-sm">Мессенджеры</span></div>
                <div class="flex border-gray-200 dark:border-gray-800 w-full border-t border-solid"></div>
            </div>
            <div class="flex flex-col md:flex-row ">
                <a href="https://api.whatsapp.com/send?phone=79159153220" target="_blank" class="button me-4 mb-4">
                    <img src="/img/whatsapp-symbol-logo-svgrepo-com.svg" alt="Whatsapp" width="30" height="30">Написать
                    в
                    Whatsapp</a>
                <a href="https://t.me/misha_bulic" target="_blank" class="button mb-4">
                    <img src="/img/telegram-svgrepo-com.svg" alt="Whatsapp" width="30" height="30">
                    Написать в Telegram</a>

            </div>
            <div class="flex items-center align-center text-center w-full flex-row my-5"
                 color="gray">
                <div class="flex border-gray-200 dark:border-gray-800 w-full border-t border-solid"></div>
                <div class="font-medium text-gray-700 dark:text-gray-200 flex mx-3 whitespace-nowrap"><span
                    class="text-sm">Социальные сети</span></div>
                <div class="flex border-gray-200 dark:border-gray-800 w-full border-t border-solid"></div>
            </div>

            <div class="flex flex-col md:flex-row">
                <a title="Телеграм канал Render-room.ru" href="https://t.me/renderroomru" target="_blank"
                   aria-label="Телеграм канал Render-room.ru"
                   class="social__card">
                    <img src="/svg/telegram-plane-svgrepo-com.svg" alt="telegram" width="60" height="60" class="mb-4">
                    <div>Telegram</div>
                </a>
                <a title="render room Вконтакте" href="https://vk.com/renderroomru" target="_blank"
                   aria-label="render room Вконтакте"
                   class="social__card social__vk">
                    <img src="/svg/vk-svgrepo-com.svg" alt="social__vk" width="60" height="60" class="mb-4">
                    <div>Вконтакте</div>
                </a>
                <a title="instagram Render-room.ru" href="https://www.instagram.com/renderroomru/" target="_blank"
                   aria-label="instagram Render-room.ru"
                   class="social__card  social__inst">
                    <img src="/svg/instagram-svgrepo-com.svg" alt="social__inst" width="60" height="60" class="mb-4">
                    <div>Instagram</div>
                </a>
            </div>

            <p>Все самые последние новости появляются в телеграм канале.</p>
            <div class="flex items-center align-center text-center w-full flex-row my-5"
                 color="gray">
                <div class="flex border-gray-200 dark:border-gray-800 w-full border-t border-solid"></div>
                <div class="font-medium text-gray-700 dark:text-gray-200 flex mx-3 whitespace-nowrap"><span
                    class="text-sm">Электронная почта</span></div>
                <div class="flex border-gray-200 dark:border-gray-800 w-full border-t border-solid"></div>
            </div>
            <a href="mailto:info@render-room.ru" class="telefon align-middle  ">
                <img src="/svg/envelope-solid.svg" alt="social__inst" width="30" height="30" >
                <span class="ml-2">info@render-room.ru</span>
            </a>
        </div>

    </div>
</template>
<style scoped lang="sass">
.contacts
    max-width: 600px
    width: 100%

.button
    position: relative
    display: inline-flex
    justify-content: center
    align-items: center
    background: #f5f5f5
    color: #464a4e
    padding: 10px 20px
    border-radius: 15px
    text-decoration: none
    font-weight: 500
    transition: box-shadow .25s ease, transform .3s ease, color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out, -webkit-box-shadow .15s ease-in-out
    will-change: box-shadow

    img
        margin-right: 5px

    &:hover
        box-shadow: 0px 4px 30px 0px rgb(0 0 0 / 7%)
        transform: translateY(-3px)
        color: #464a4e
        background: #e2e6ea

.social__card
    display: flex
    flex-direction: column
    padding: 30px
    min-width: 200px
    border-radius: 15px
    justify-content: center
    align-items: center
    background: #40b3e0
    color: #ffffff
    font-weight: 500
    font-size: 22px
    text-decoration: none
    margin-bottom: 20px
    transition: box-shadow .25s ease, transform .3s ease, color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out, -webkit-box-shadow .15s ease-in-out
    will-change: box-shadow
    margin-right: 20px
    text-align: center

    span
        width: 60px
        height: 60px
        margin-bottom: 10px

    &:hover
        box-shadow: 0 4px 30px 0 rgb(0 0 0 / 7%)
        transform: translateY(-3px)
        color: #ffffff

.social__vk
    background: #0077ff

.social__inst
    background: radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)

.telefon
    display: flex
    font-size: 30px
    text-decoration: none
    align-items: center
    font-weight: 500
    color: #333

    svg.img
        margin-right: 10px

@screen md
    .social__card
        aspect-ratio: 1/1
</style>