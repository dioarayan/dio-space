<template>
  <div class="container">
    <h1>My Skills</h1>
    <SkillList />
  </div>
</template>

<script>
import SkillList from '../skills/SkillList.vue';

export default {
  components: {
    SkillList
  }
}
</script>

<style scoped>
  .container {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin: 0 auto;
    padding: 6px 60px;
  }
</style>