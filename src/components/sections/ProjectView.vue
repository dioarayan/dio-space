<template>
  <div class="container">
    <h1 class="section-header">My Projects</h1>
    <ProjectList />
  </div>
</template>

<script>
import ProjectList from '../projects/ProjectList.vue';

export default {
  components: {
    ProjectList
}
}
</script>
