<script setup>
const { page } = useContent()


</script>

<template>

    <div class="project">
        <NuxtLink to="/projects" class="my-4 block no-underline"><span>← ко всем проектам</span></NuxtLink>
        <h1>{{ page.h1 }}</h1>
        <div class="project-grid grid grid-cols-2">
            <div class="project-image">
                <div class="main-image">
                    <NuxtImg  :src="page.image1.replace('.jpg','_big.jpg')" placeholder="/img/thumb.svg" :alt="page.title"
                              provider="myProvider" loading="lazy"/>
                </div>
                <div class="thumb-images grid gap-3 grid-cols-4 my-3">
                    <NuxtImg  :src="page.image1" placeholder="img/thumb.svg" :alt="page.title"
                              provider="myProvider" loading="lazy"/>
                    <NuxtImg  :src="page.image2" placeholder="img/thumb.svg" :alt="page.title"
                              provider="myProvider" loading="lazy"/>
                    <NuxtImg  :src="page.image3" placeholder="img/thumb.svg" :alt="page.title"
                        provider="myProvider" loading="lazy"/>
                    <NuxtImg  :src="page.image4" placeholder="img/thumb.svg" :alt="page.title"
                              provider="myProvider" loading="lazy"/>
                </div>
            </div>
            <div class="project-details text-lg">
                <div class="rounded-lg   divide-gray-200 dark:divide-gray-800 shadow bg-white dark:bg-gray-900 p-4">
                    <div v-if="page.Площадь" class="card-area">Площадь: {{ page.Площадь }} м<sup>2</sup></div>
                    <div v-if="page.Размер" class="card-area">Размер: {{ page.Размер }} </div>
                    <div v-if="page.Этажность" class="card-area">Этажность: {{ page.Этажность }} </div>
                    <div v-if="page.Крыша" class="card-area">Крыша: {{ page.Крыша }} </div>
                    <hr>
                    <div class="project-add">
                        <div class="project-har">Эркер: <span v-if="page.Эркер === 1">Есть</span><span v-else>Нет</span></div>
                        <div class="project-har">Балкон: <span v-if="page.Балкон === 1">Есть</span><span v-else>Нет</span></div>
                        <div class="project-har">Кукушка: <span v-if="page.Кукушка === 1">Есть</span><span v-else>Нет</span></div>
                        <div class="project-har">Гараж: <span v-if="page.Гараж === 1">Есть</span><span v-else>Нет</span></div>
                        <div class="project-har">Котельная: <span v-if="page.Котельная === 1">Есть</span><span v-else>Нет</span></div>
                        <div class="project-har">Терраса: <span v-if="page.Терраса === 1">Есть</span><span v-else>Нет</span></div>
                    </div>

                </div>
            </div>
        </div>
        <UDivider label="Планы" color="gray" orientation="horizontal" class="my-5"/>
    </div>


</template>
<style scoped lang="sass">
.project
    &-grid
        display: grid
        grid-template-columns: 1fr
        gap: 20px
    &-image
        img
            width: 100%
    &-add
        display: flex
        flex-wrap: wrap
        justify-content: space-between
        width: 100%
        margin-top: 24px
    &-har
        width: 50%
        display: flex
@screen md
    .project
        &-grid
            grid-template-columns: 1fr 30%
</style>