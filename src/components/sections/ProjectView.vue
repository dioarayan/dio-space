<template>
  <div class="container">
    <h1>My Projects</h1>
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
