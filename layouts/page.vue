<script setup>
const {page} = useContent()
</script>

<template>
  <div class=" content-wrapper container mx-auto flex-col flex-grow">
   <h1 class="m-0"> {{ page.h1  }}</h1>
    <slot />
  </div>



</template>