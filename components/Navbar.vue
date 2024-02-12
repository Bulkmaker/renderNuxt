<template>
  <nav>
    <ContentNavigation v-slot="{ navigation }">
      <ul>
        <li v-for="link of navigation" :key="link._path">
          <NuxtLink :to="link._path" class="menu__link">{{ link.menutitle }}</NuxtLink>
        </li>
      </ul>
    </ContentNavigation>
  </nav>
</template>
<style scoped lang="sass">
.menu__link
    text-decoration: none
</style>