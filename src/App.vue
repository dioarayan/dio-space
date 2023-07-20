<script setup>
import TheNavigation from './components/TheNavigation.vue';
import AboutMe from './components/AboutMe.vue';
</script>

<template>
  <header>
    <TheNavigation />
  </header>

  <main class="container">
    <AboutMe />
  </main>
</template>

<style scoped>
header {
  background-color: transparent;
  width: 100%;
  height: 45px;
  display: flex;
  justify-content: space-around;
  place-items: center;
}
.container {
  position: relative;
  width: 100%;
  border: 2cap;
}
</style>

