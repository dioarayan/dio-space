<template>
  <div class="skills-container">

    <SkillItem v-for="skill in skills"
      :icon="skill.icon"
      :width="skill.width"
      :name="skill.name"
      :color="skill.color"
      :key="skill.icon"
    />

  </div>
</template>

<script>
import SkillItem from "./SkillItem.vue";
import { ref } from "vue";

export default {
  components: {
    SkillItem
  },
  setup(){
    const width = ref(80);
    const color = ref("#161c2c");
    const skills = ref([
      { icon: "ant-design:html5-filled", width: width.value, name: "HTML", color: color.value },
      { icon: "simple-icons:css3", width: width.value, name: "CSS", color: color.value },
      { icon: "akar-icons:javascript-fill", width: width.value, name: "Javascript", color: color.value },
      { icon: "akar-icons:vue-fill", width: width.value, name: "Vue", color: color.value },
      { icon: "devicon-plain:rails", width: width.value, name: "Rails", color: color.value },
      { icon: "ri:bootstrap-fill", width: width.value, name: "Bootstrap", color: color.value },
      { icon: "mdi:tailwind", width: width.value, name: "Tailwind", color: color.value },
      { icon: "ion:logo-figma", width: width.value, name: "Figma", color: color.value },
      { icon: "akar-icons:node-fill", width: width.value, name: "Node.js", color: color.value },
      { icon: "bi:git", width: width.value, name: "Git", color: color.value },
      { icon: "simple-icons:mongodb", width: width.value, name: "MongoDB", color: color.value },
      { icon: "devicon-plain:mysql", width: width.value, name: "MySQL" },
      { icon: "devicon-plain:illustrator", width: width.value, name: "Illustrator" },
      { icon: "devicon-plain:photoshop", width: width.value, name: "Photoshop" },
    ])
   
   return { skills }
  }
}
</script>

<style scoped>
 .skills-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    width: 100%;
 }
</style>