<script setup lang="ts">
    defineProps({
        image: {
            type: String
        },
        class: {
            type: String
        },
        alt: {
            type: String
        }

    })
</script>
<template>

    <div class="full-image">

        <NuxtImg :src="image" :alt="alt" :class="class"
                 placeholder="/img/thumb.svg"
                 loading="lazy"


        />

        <!-- sizes="lg:1920px md:1200px sm:600px" -->
    </div>

</template>
<style scoped lang="sass">
  .full-image


</style>