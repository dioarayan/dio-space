<template>
  <section v-for="section in sections" :key="section.title" :id="section.title">
    <component :is = "section.component"></component>
  </section>
</template>

<script>
import AboutView from "../sections/AboutView.vue";
import ContactView from "../sections/ContactView.vue";
import CoverView from "../sections/CoverView.vue";
import ProjectView from "../sections/ProjectView.vue";
import SkillView from "../sections/SkillView.vue";
import { ref } from "vue";

export default {
  components: {
    AboutView,
    ContactView,
    CoverView,
    ProjectView,
    SkillView
  },
  setup() {
    const scrollTarget = ref(null)
    const sections = ref([
      { title: "home", component: "CoverView"},
      { title: "about", component: "AboutView"},
      { title: "skills", component: "SkillView"},
      { title: "projects", component: "ProjectView"},
      { title: "contact", component: "ContactView"}
    ])

    return {
      sections
    }
  }
  
}
</script>