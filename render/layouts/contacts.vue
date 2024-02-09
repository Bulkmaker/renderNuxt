<script setup>

const {page} = useContent()

</script>

<template>
    <div class="contacts">
        <h1>{{ page.h1 }}</h1>
        <div class=" ">
            <UDivider label="Мессенджеры" color="gray" class="my-5" />
            <div class="flex flex-col md:flex-row ">
                <a href="https://api.whatsapp.com/send?phone=79159153220" target="_blank" class="button me-4 mb-4"><img src="/img/whatsapp-symbol-logo-svgrepo-com.svg" alt="Whatsapp" width="30" height="30">Написать в
                    Whatsapp</a>
                <a href="https://t.me/misha_bulic" target="_blank" class="button mb-4"><img
                    src="/img/telegram-svgrepo-com.svg" alt="Whatsapp" width="30" height="30">Написать в Telegram</a>

            </div>
            <UDivider label="Социальные сети" color="gray" class="my-5" />
            <div class="flex flex-col md:flex-row">
                <a title="Телеграм канал Render-room.ru" href="https://t.me/renderroomru" target="_blank"
                   class="social__card">
                    <UIcon name="i-bi-telegram" />
                    <div>Telegram</div>
                </a>
                <a title="render room Вконтакте" href="https://vk.com/renderroomru" target="_blank"
                   class="social__card social__vk">
                    <UIcon name="i-fa6-brands-vk" />
                    <div>Вконтакте</div>
                </a>
                <a title="instagram Render-room.ru" href="https://www.instagram.com/renderroomru/" target="_blank"
                   class="social__card  social__inst">
                    <UIcon name="i-bi-instagram" />
                    <div>Instagram</div>
                </a>
            </div>

            <p>Все самые последние новости появляются в телеграм канале.</p>

            <UDivider label="Электронная почта" color="gray" class="my-5" />

            <a href="mailto:info@render-room.ru" class="telefon ">
                <UIcon name="i-bi-envelope" />
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
    border-radius: 5px
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
    border-radius: 5px
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
    font-size: 36px
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