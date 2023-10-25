
<template>
    <TheNavigation />
        <router-view>
        </router-view>
    <TheFooter />
</template>

<script setup>
import TheFooter from "./components/layout/TheFooter.vue";
import TheNavigation from "./components/layout/TheNavigation.vue";
</script>



