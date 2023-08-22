<template>
  <div class="projects-container">
    <ProjectItem v-for="project in projects" 
      :image-src = "project.image"
      :proj-title = "project.title"
      :proj-desc = "project.description"
      :demo-link = "project.demoLink"
      :github-link = "project.githubLink"
      :icon = "project.icon"
      :width = "project.width"
      :control = "project.action"
      :external-link = "project.externalLink"
      :key = "project.title"
    />
  </div>
</template>

<script>
import ProjectItem from "./ProjectItem.vue";
import { ref } from "vue";

export default{
  components: {
    ProjectItem
  },
  setup(){
    const projects = ref([
      {
        image: "covid-stat.png",
        title: "Covid19-Statistics",
        description: "This static website is designed based on the API provided by RapidAPI. Developed using Vue.js framework with Tailwind CSS, its purpose is solely for tracking current statistics on Covid-19 pandemic in all countries all over the world. ",
        demoLink: "https://dioarayan.github.io/covid-statistics/",
        githubLink: "https://github.com/dioarayan/covid-statistics",
        icon: "mdi:eye",
        width: 20,
        action: "Live Demo",
        externalLink: true,
      },
      {
        image: "home.png",
        title: "Document Tracker",
        description: " Although the development stage  is still ongoing, the system can add users to be responsible for recording and routing documents while guests can only view the route information of all documents. Developed using Ruby on Rails 7 and Bootstrap. ",
        demoLink: "/dio-space/projects-dts",
        githubLink: "https://github.com/dioarayan/document-tracker",
        icon: "material-symbols:camera",
        width: 20,
        action: "Screenshots",
        externalLink: false
      },
    ])

    return {
      projects
    }
  }

}
</script>