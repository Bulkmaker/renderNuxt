<script setup lang="ts">
    defineProps({
        image: {
            type: String
        },
        alt: {
            type: String
        }

    })
</script>
<template>
    <div>
        <NuxtImg :src="image" :alt="alt"
                 placeholder="/img/thumb.svg"
                 loading="lazy"
                 class="w-full"

        />
        <!-- sizes="lg:1920px md:1200px sm:600px" -->
    </div>
</template>