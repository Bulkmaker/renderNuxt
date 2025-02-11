<script setup lang="ts">

</script>
<template>
    <div class="uslugi">
        <div class="uslugi-grid">
            <div class="ucard">
            
<!--                <div class="ucard_image">-->
<!--                    <img src="/icons/site.png" alt="">-->
<!--                </div>-->

                <div class="ucard_body">
                    <NuxtLink to="/sites" class="ucard_title">
                        Создание сайтов
                    </NuxtLink>
                    <div class="ucard_links">

                        <NuxtLink to="/sites" class="ucard_link">
                            Строительный сайт
                        </NuxtLink>


                        <NuxtLink to="/modules" class="ucard_link">
                            Модули для сайтов
                        </NuxtLink>

                        <NuxtLink to="/uslugi" class="ucard_link">
                            Дополнительные услуги
                        </NuxtLink>

                    </div>
                    <p>Создаём современные и удобные сайты для строителей.  </p>
                </div>
            </div>
            <div class="ucard">
<!--                <div class="ucard_image">-->
<!--                    <img src="/icons/render.png" alt="">-->
<!--                </div>-->
                <div class="ucard_body">
                    <NuxtLink to="https://3d.render-room.ru" target="_blank" class="ucard_title">
                        3д Визуалзация
                    </NuxtLink>
                    <div class="ucard_links">

                        <NuxtLink to="https://3d.render-room.ru/projects/"  target="_blank" class="ucard_link">
                            Готовые проекты домов
                        </NuxtLink>


                        <NuxtLink to="https://3d.render-room.ru/dop/uluchshennaya-vizualizacziya" class="ucard_link"  target="_blank">
                            Индивидуальные проект
                        </NuxtLink>

                        <NuxtLink to="https://3d.render-room.ru/dop/video-animacziya" class="ucard_link"  target="_blank">
                            Видео Анимации
                        </NuxtLink>

                    </div>
                    <p>Качественные 3d проекты, визуализация и анимация</p>
                </div>
            </div>
            <div class="ucard">
<!--                <div class="ucard_image">-->
<!--                    <img src="/icons/seo.png" alt="">-->
<!--                </div>-->
                <div class="ucard_body">
                    <NuxtLink to="/uslugi/seo-prodvizhenie-sajtov" class="ucard_title">
                        Продвижение и поддержка
                    </NuxtLink>
                    <div class="ucard_links">

                        <NuxtLink to="/uslugi/seo-prodvizhenie-sajtov"  class="ucard_link">
                            Seo Продвижение
                        </NuxtLink>
                      
                    
                        <NuxtLink to="/uslugi/support/tehnical-support"   class="ucard_link">
                          Поддержка сайта
                        </NuxtLink>
              
                        <NuxtLink to="/uslugi/reklama" class="ucard_link"  >
                            Реклама
                        </NuxtLink>

             

                    </div>
                    <p>Берем на себя все работы по сайту</p>
                </div>
            </div>
            
        </div>
    </div>

</template>

<style lang="sass" scoped>
.uslugi
    &-grid
        display: grid
        grid-template-columns: 1fr
        @screen md
            grid-template-columns: 1fr 1fr 1fr
    .ucard
        display: grid
        grid-template-columns: 1fr
        border: 1px solid #cccccc
        transition: all ease 0.2s
        padding: 20px
        margin-bottom: -1px
        gap: 20px
        &_image
            padding: 10px
            display: flex
            align-items: baseline
            justify-content: center
            img
                width: 100%
                max-width: 100px
                height: auto
        @screen lg
            grid-template-columns:  1fr
            border-right-width: 0
            &:nth-child(3n)
                border-right-width: 1px

        &:hover
            border-color: #fff
            box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.15)

        &_title
            margin-bottom: 10px
            font-weight: 600
            font-size: 22px
            color: #333333
            text-decoration: none
            display: block
        &_links
            margin-bottom: 10px
        &_link
            text-decoration: none
            font-size: 18px
            margin: 4px 8px 4px 0
            color: var(--link-color)
            font-weight: 400
            display: block
            &:hover
                text-decoration: underline


</style>