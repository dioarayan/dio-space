<template>
   <div class="inline-items">
    <iconify-icon :icon="icon" />
    <small>{{ details }}</small>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  props: ["contactDetails", "contactIcon"],

  setup(props){
    const details = ref(props.contactDetails)
    const icon = ref(props.contactIcon)

    return { 
      details,
      icon
    }
  }
}
</script>

<style scoped>
.inline-items {
  display: flex;
  align-items: center;
  padding: 20px 5px;
}

svg {
  margin: 0px 10px;
  width: 1.5rem;
  height: auto;
  opacity: 50%;
}

small {
  opacity: 50%;
}
</style>