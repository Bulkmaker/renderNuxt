<script setup lang="ts">
defineProps({
    title: {
        type: String,
        default: 'Default title'
    }

})
</script>

<template>
    <div class="quote ">
        <div class="quote_title">
             {{ title }}
         </div>
        <div class="quote_text">
            <slot/>
        </div>
    </div>
</template>

<style lang="sass" scoped>
.quote
    background-color: #fff
    border-left: 5px solid var(--accent)
    border-radius: 5px
    -webkit-box-shadow: 0 0 10px -7px rgba(0, 0, 0, .75)
    box-shadow: 0 0 10px -7px rgba(0, 0, 0, .75)
    margin-bottom: 20px
    padding: 15px
    overflow: hidden
    &_title
        font-size: 24px
        font-weight: 600
        line-height: 1.25
        margin-bottom: 5px

    &_text
        font-size: 16px
        & p
            margin-bottom: 0

</style>
