<template>
    <div class="wrapper">
        <Sidebar/> 
        <div class="content">
            <Header/>
            <main class="main container mx-auto flex-col flex-grow">
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