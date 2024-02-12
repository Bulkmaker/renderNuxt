<script setup lang="ts">
useHead({

    bodyAttrs: {
        class: 'map'
    },
    script: [{src: '//api-maps.yandex.ru/2.1/?apikey=5b1a92cd-46ca-440e-9464-e05944f59329&load=package.full&lang=ru-RU'},
        {src: '/js/delivery.js'}]
})
</script>

<template>
    <div class="dostavka">
        <div class="row">
            <div class="col-6 col-md-3">
                <span class="dostavka__subtitle">Расстояние:</span>
                <div class="dostavka__bold">

                    <span id="delivery_len_span">0 </span> &nbsp;км
                </div>
            </div>

            <div class="col">
                <span class="dostavka__subtitle">Стоимость:</span>
                <div class="dostavka__bold">
                    <span id="delivery_price_span">0</span>&nbsp;руб.
                </div>

            </div>
        </div>
    </div>
    <div id="map"></div>
</template>
<style lang="sass" scoped>
#map
    height: 500px
    margin: 50px 0
</style>