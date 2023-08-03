<template>
  <div class="skills-container">
    <SkillItem icon-title="ant-design:html5-filled" width="60" title="HTML" />
    <SkillItem icon-title="simple-icons:css3" width="50" title="CSS" />
    <SkillItem icon-title="akar-icons:javascript-fill" width="50" title="Javascript" />
    <SkillItem icon-title="akar-icons:vue-fill" width="50" title="Vue" />
  </div>
</template>

<script>
import SkillItem from './SkillItem.vue';

export default {
  components: {
    SkillItem
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