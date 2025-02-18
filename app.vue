<template>
    <div class="wrapper">
        <Sidebar/> 
        <div class="content">
            <Header/>
            <main class="main">
                <NuxtLayout>
                    <NuxtPage/>
                </NuxtLayout>
            </main>
            <Footer/>
        </div>


    </div>
</template>
<script setup lang="ts">
</script>