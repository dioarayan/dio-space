<template>
  <button v-if="!link" :class="mode">
    <slot></slot>
    <slot></slot>
  </button>
  <a v-else :to="to" :class="mode">
    <slot></slot>
  </a>
</template>

<script>
export default{
  props: {
    mode: {
      type: String,
      required: false,
      default: null
    },
    to: {
      type: String,
      required: false
    },
    link: {
      type: Boolean,
      required: false
    }
  }
}
</script>

<style scoped>
button,
a {
  text-decoration: none;
  padding: 0.5rem 1.5rem;
  font: inherit;
  background-color: #EACF86;
  border: 1px solid #EACF86;
  color: #161c2c;
  cursor: pointer;
  margin-right: 0.5rem;
  display: inline-block;
}

a:hover,
a:active,
button:hover,
button:active {
  background-color: #EACF86;
  border-color: #EACF86;
  color: #161c2c;
}


.flat {
  background-color: transparent;
  color: #EACF86;
  border: none;
}

.outline {
  background-color: transparent;
  border-color: #EACF86;
  color: #EACF86;
}

.flat:hover,
.flat:active,
.outline:hover,
.outline:active {
  background-color: #EACF86;
}
</style>