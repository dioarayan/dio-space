<template>
    <header>
      <TheNavigation />
    </header>

    <MyIntro />
    <MySkills />
    <AboutMe />
    <MyProjects />
    <ContactMe />
</template>

<script setup>
import TheNavigation from '../components/TheNavigation.vue';
import MyIntro from '../components/MyIntro.vue';
import AboutMe from '../components/AboutMe.vue';
import MySkills from './MySkills.vue';
import MyProjects from './MyProjects.vue';
import ContactMe from './ContactMe.vue';
</script>

<style scoped>

header {
  background-color: transparent;
  position: absolute; 
  top: 0px;
  z-index: 100;
  width: 100%;
  /* position: relative; */
}
</style>