<template>
<div class="header__right" :class="{ active: isActive }">
    <button aria-label="toggle" class="sidebar__menu-btn"  @click="toggleActive">
        <img src="/svg/phone-solid.svg" alt="">
    </button>
    <div class="header__popup" :class="{ active: isActive }">
        <div class="header__popup-outer" @click="toggleActive">

        </div>
        <div class="header__popup-wrapper">
            <p>Свяжитесь с нами</p>
            <div class="flex flex-col  ">
                <a href="https://api.whatsapp.com/send?phone=79159153220" target="_blank" class="button me-4 mb-4 w-full">
                    <img src="/img/whatsapp-symbol-logo-svgrepo-com.svg" alt="Whatsapp" width="30" height="30" class="mr-4">
                    Whatsapp</a>
                <a href="https://t.me/misha_bulic" target="_blank" class="button mb-4  w-full">
                    <img src="/img/telegram-svgrepo-com.svg" alt="Whatsapp" width="30" height="30" class="mr-4">
                    Telegram</a>

            </div>
        </div>

    </div>
</div>

</template>

<style lang="sass">
.header
    &__right
        position: relative
    &__popup
        &-wrapper
            visibility: hidden
            opacity: 0
            position: absolute
            right: 0
            width: 280px
            top: 50px
            transition: opacity .2s ease,transform .2s ease,visibility .2s ease
            border: #ebebeb 1px solid
            border-radius: 3px
            box-shadow: rgba(0,0,0,.1) 0 5px 5px
            line-height: 1.2
            z-index: 60
            padding: 15px
            background-color: #fff
        &.active
            & .header__popup-wrapper
                visibility: visible
                opacity: 1
            & .header__popup-outer
                display: block
        &-outer
            display: none
            position: fixed
            top: 0
            right: 0
            bottom: 0
            left: 0


</style>
<script setup lang="ts">
import {ref} from 'vue-demi'

const isActive = ref(false)

const toggleActive = () => {
    isActive.value = !isActive.value
}

</script>