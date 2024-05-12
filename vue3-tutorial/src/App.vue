<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <RouterLink id="topLink" :to="{ name: 'home'}">Todo App</RouterLink>
  </header>
  <main>
    <RouterView />
  </main>
</template>

<style>
* {
  text-decoration: none;
  margin: 0;
  padding: 0;
}

header {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  background-color: #C8EFEA;
}

header a:hover {
  opacity: 0.7;
}

#topLink {
  color: #23AC0E;
  font-size: 36px;
  text-align: center;
}

main {
  background-color: #F9F9F9;
  height: 100vh;
}
</style>
