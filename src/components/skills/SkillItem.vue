<template>
  <div class="skill-item-flex">
    <iconify-icon :icon = "iconTitle" :width="width" :height="height"></iconify-icon>
    <p>{{ title }}</p>
  </div>
</template>

<script>
import {ref} from 'vue';

export default {
  props: {
    title: {
      type: String,
      default: 'Skill Name'
    },
    iconTitle: {
      type: String,
      default: 'fa-solid:bars'
    },
    width: {
      type: Number,
      default: 40
    }
  },
  setup(props){
    const title = ref(props.title);
    const iconTitle = ref(props.iconTitle)
    console.log(title.value)
    console.log(iconTitle.value)

    return {
      title,
      iconTitle
    }
  }
}
</script>

<style scoped>

.skill-item-flex {
  display: flex;
  flex-direction: column;
  margin: 20px;
  align-items: center;
}

</style>

