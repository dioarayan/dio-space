<script>
import TheNavigation from './components/layout/TheNavigation.vue';

export default {
  components: {
    TheNavigation
  }  
}

</script>

<template>
  <TheNavigation />
  <router-view v-slot="slotProps">
    <component :is="slotProps.Component"></component>
  </router-view>
</template>




