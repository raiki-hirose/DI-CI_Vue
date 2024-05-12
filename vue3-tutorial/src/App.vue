<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink :to="{ name: 'home'}">Home</RouterLink>
        <RouterLink :to="{ name: 'create' }">About</RouterLink>
      </nav>
    </div>
  </header>
  <main>

    <RouterView />
  </main>
</template>

<style scoped>

</style>
