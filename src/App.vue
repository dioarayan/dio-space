
<template>
    <TheNavigation />
        <router-view>
        </router-view>
    <TheFooter />
</template>

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



