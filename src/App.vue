<script>
import TheFooter from './components/layout/TheFooter.vue';
import TheNavigation from './components/layout/TheNavigation.vue';

export default {
  components: {
    TheNavigation,
    TheFooter
}  
}

</script>

<template>
  <TheNavigation />
  <router-view v-slot="slotProps">
    <component :is="slotProps.Component"></component>
  </router-view>
  <TheFooter/>
</template>




