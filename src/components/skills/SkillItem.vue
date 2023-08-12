<template>
  <div class="skill-item-flex">
    <iconify-icon :icon = "icon" :width="width" :color="color"></iconify-icon>
    <p>{{ name }}</p>
  </div>
</template>

<script>
import {ref} from 'vue';

export default {
  props: {
    name: {
      type: String,
      default: 'Skill Name'
    },
    icon: {
      type: String,
      default: 'fa-solid:bars'
    },
    width: {
      type: Number,
      default: 40
    },
    color: {
      type: String,
      default: '#161c2c'
    }
  },
  setup(props){
    const name = ref(props.name);
    const icon= ref(props.icon)
    const color= ref(props.color)

    return {
      name,
      icon,
      color
    }
  }
}
</script>

<style scoped>

.skill-item-flex {
  display: flex;
  flex-direction: column;
  margin: 40px;
  align-items: center;
}

</style>

