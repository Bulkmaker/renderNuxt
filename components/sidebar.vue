<template>
    <aside class="sidebar">
        <div class="sidebar__content" @click="toggleActive">
            <button aria-label="toggle" class="sidebar__menu-btn" :class="{ active: isActive }">
                <div class="sidebar__menu-line"></div>
            </button>
            <div class="sidebar__icons">
                <a href="https://api.whatsapp.com/send?phone=79159153220" target="_blank" class="  py-2" aria-label="Whatsapp">
                    <img src="/svg/whatsapp-svgrepo-com.svg" alt="social__inst" width="30" height="30" >

                </a>
                <a href="https://t.me/misha_bulic" target="_blank" aria-label="Телеграм">
                    <img src="/svg/telegram-plane-svgrepo-com.svg" alt="social__inst" width="30" height="30" >

                </a>
            </div>
        </div>
    </aside>
    <div class="big-menu" :class="{ active: isActive }">
        <div class="big-menu__header"><img src="/logow.png" alt="render room" class="logomenu"></div>
        <div class="big-menu__content">
            <NuxtLink to="/sites" class="big-menu__biglink" @click="toggleActive">Строительные сайты</NuxtLink>
            <br>
          <br>
            <NuxtLink to="/modules" class="big-menu__smalllink" @click="toggleActive">Модули</NuxtLink>
            <NuxtLink to="/uslugi/support" class="big-menu__smalllink" @click="toggleActive">Поддержка</NuxtLink>
            <NuxtLink to="/uslugi/gotovyie-sajtyi" class="big-menu__smalllink" @click="toggleActive">Готовые сайты</NuxtLink>
            <NuxtLink to="/uslugi" class="big-menu__smalllink" @click="toggleActive">Услуги</NuxtLink>
            <br>
            <NuxtLink to="/portfolio" class="big-menu__biglink underline " @click="toggleActive">Наши работы</NuxtLink>
          <br>
          <br>
            <NuxtLink to="https://3d.render-room.ru" class="big-menu__biglink" target="_blank" @click="toggleActive">Маркет 3D проектов</NuxtLink>
            <br>
          <br>
            <NuxtLink to="https://3d.render-room.ru/katalog" class="big-menu__smalllink" target="_blank" @click="toggleActive">Каталог проектов</NuxtLink>
            <NuxtLink to="https://3d.render-room.ru/price" class="big-menu__smalllink" target="_blank" @click="toggleActive">Визуализация</NuxtLink>
            <NuxtLink to="https://3d.render-room.ru/dop/uluchshennaya-vizualizacziya" class="big-menu__smalllink" target="_blank" @click="toggleActive">Проект на заказ</NuxtLink>
            <br>
            <NuxtLink to="/blog" class="big-menu__biglink" @click="toggleActive">Блог</NuxtLink>
            <br>
            <NuxtLink to="/contacts" class="big-menu__biglink" @click="toggleActive">Контакты</NuxtLink>
        </div>
    </div>
</template>


<style lang="sass">
.sidebar
    position: fixed
    top: 0
    left: 0
    z-index: 20
    height: 60px
    width: 60px
    display: flex
    align-items: center
    justify-content: center
    //border-right: 1px solid rgba(211, 211, 211, 0.46)
    &__icons
        display: flex
        align-items: center
        justify-items: center
        flex-direction: column

    &__menu-line
        position: relative
        width: 28px
        height: 1px

        &:before
            top: 6px

        &:after
            top: -6px
            position: absolute
            display: block
            width: 100%
            height: 1px
            content: ""
            background: #212121
            transition: all 0.3s ease-out

        &:before
            position: absolute
            display: block
            width: 100%
            height: 1px
            content: ""
            background: #212121
            transition: all 0.3s ease-out

    &__menu-btn
        position: relative
        display: flex
        align-items: center
        justify-content: center
        width: 28px
        height: 28px
        background: transparent
        cursor: pointer

        &.active .sidebar__menu-line
            &:before
                transform: rotate(-45deg)
                background: #ffffff
                top: 0
            &:after
                transform: rotate(45deg)
                top: 0
                background: #ffffff


    &__icons
        display: none

button
    padding: 0
    border: none
    outline: none

.big-menu
    opacity: 0
    visibility: hidden
    transform: translate3d(0, -100%, 0)
    width: 100%
    height: 100%
    background-color: #000000
    position: fixed
    top: 0
    left: 0
    overflow: hidden
    color: #ffffff
    z-index: 15
    transition: opacity .7s step-end, transform .7s cubic-bezier(.8, 0, .55, .94), visibility .7s step-end, background-color .7s cubic-bezier(.8, 0, .55, .94)
    transition-delay: .3s
    background-image: url("/img/tree_fon.png")
    background-size: contain
    background-repeat: no-repeat
    background-position: bottom right

    &__header
        height: 60px
        display: flex
        align-items: center
        justify-items: start
        padding-left: 70px
        border-bottom: 1px solid rgba(211, 211, 211, 0.46)

        .logomenu
            width: 220px
            max-width: 100%

    &__content
        padding: 30px

    &__biglink
        font-size: 26px
        line-height: 1.2
        font-weight: 500
        line-break: strict
        text-transform: uppercase
        overflow: hidden
        text-decoration: none
        word-break: inherit
        color: #ffffff
        transition: color .3s ease-in-out, border-color .3s ease-in-out
        border-color: transparent
        border-bottom: 3px solid transparent

        &:hover
            color: #bebebe
            border-color: #bebebe

    &__smalllink
        text-decoration: none
        color: #ffffff
        padding-right: 20px
        display: block
        margin-bottom: 1px
        font-size: 18px
        &:hover
            text-decoration: underline
    &.active
        opacity: 1
        visibility: visible
        transform: translateZ(0)
        transition: opacity .7s step-start, transform .7s cubic-bezier(.8, 0, .55, .94), visibility .7s step-start, background-color .7s cubic-bezier(.8, 0, .55, .94)
        transition-delay: 0s


@screen xl
    .sidebar
        bottom: 0
        width: 70px
        height: 100vh
        background-color: #1c1c1c

        &__content
            padding: 20px
            display: flex
            width: 100%
            min-height: 100vh
            flex-direction: column
            align-items: center
            justify-content: space-between

        &__icons
            display: flex
            a
                display: flex
                align-items: center
                justify-content: center
                color: white

        &__menu-line
            &:before,&:after
                background: #ffffff

    .big-menu
        padding-left: 70px
        &__biglink
            font-size: 30px
            white-space: nowrap
        &__header
            padding-left: 30px

</style>

<script setup lang="ts">
import {ref} from 'vue-demi'

const isActive = ref(false)

const toggleActive = () => {
    isActive.value = !isActive.value
}


</script>