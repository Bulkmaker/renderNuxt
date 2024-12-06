<template>
  <div class="header-right">
    <nav class="menu">
      <ul class="menu-wrapper">
        <li class="menu-item">
          <NuxtLink to="/uslugi" class="menu__link">Услуги</NuxtLink>
          <div class="submenu">
            <ul class="submenu-wrapper">
              <li class="submenu-item">
                <NuxtLink to="/sites" class="menu__link ">Сайты</NuxtLink>
              </li>
              <li class="submenu-item">
                <NuxtLink to="/modules" class="menu__link ">Модули</NuxtLink>
              </li>
              <li class="submenu-item">
                <NuxtLink to="/uslugi/support" class="menu__link ">Поддержка</NuxtLink>
              </li>
              <li class="submenu-item">
                <NuxtLink to="/uslugi/seo-prodvizhenie-sajtov" class="menu__link ">Продвижение</NuxtLink>
              </li>
            </ul>
          </div>
        
        </li>
        <li class="menu-item">
          <NuxtLink to="https://3d.render-room.ru" title="Перейти в магазин 3д проектов домов для строительных сайтов"
                    target="_blank" class="menu__link">3D визуализация
            <img src="/svg/external.svg" alt="3D Маркет" width="14" height="14">
          </NuxtLink>
        </li>
        <li class="menu-item">
          <NuxtLink to="/portfolio" class="menu__link">Портфолио</NuxtLink>
        </li>
        <li class="menu-item">
          <NuxtLink to="/blog" class="menu__link">Блог</NuxtLink>
        </li>
        <li class="menu-item">
          <NuxtLink to="/contacts" class="menu__link">Контакты</NuxtLink>
        </li>
      </ul>
    
    
    </nav>
    <head-button/>
  </div>

</template>

<style lang="sass">
.header-right
  display: grid
  grid-template-columns: 1fr auto
  align-items: center

nav
  display: none
  align-items: center
  @screen lg
    display: block

.divider
  border-left-width: 1px
  border-color: rgba(178, 178, 178, 0.7)
  margin-left: 25px
  padding-left: 25px
  display: grid
  grid-template-columns: 1fr 1fr
  gap: 10px

.menu
  &-wrapper
    display: flex
    list-style: none
    margin-bottom: 0
  
  &-item
    position: relative
    padding: 0
    margin: 0
  
  &__link
    text-decoration: none
    font-weight: 500
    transition: all ease .4s
    margin-right: 20px
    color: #333
    display: flex
    align-items: center
    gap: 5px
    font-size: clamp(14px, 16px, 18px)
    
    &:hover
      color: var(--link-color)

.submenu
  margin: 0
  padding: 11px 16px 7px 16px
  list-style: none
  position: absolute
  z-index: 2
  top: calc(100% + 12px)
  left: -16px
  background-color: #fff
  border: #ebebeb 1px solid
  border-radius: 3px
  transform: translateY(7px)
  box-shadow: rgb(0 0 0 / 10%) 0 5px 5px
  visibility: hidden
  opacity: 0
  transition: opacity .2s ease, transform .2s ease, visibility .2s ease
  display: block
  
  &::before
    content: ''
    width: 90%
    height: 20px
    position: absolute
    top: -20px
    left: 0
    display: block
  
  &::after
    content: ''
    display: block
    position: absolute
    left: 20px
    top: -5px
    width: 10px
    height: 10px
    background-color: #fff
    transform: rotate(45deg)
    box-shadow: rgb(0 0 0 / 10%) -1px -1px 0
  
  &-wrapper
    display: flex
    flex-direction: column
    list-style: none
  
  &-item
    padding: 5px
    margin: 0
    
    .menu__link
      margin-right: 0

.menu-item:hover > .submenu
  transform: translateY(0)
  visibility: visible
  opacity: 1
</style>
<script setup lang="ts">
const isOpen = ref(false)
</script>