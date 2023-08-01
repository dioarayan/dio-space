<template>
  <button v-if="!link" :class="mode">
    <slot></slot>
  </button>
  <router-link v-else :to="to" :class="mode">
    <slot></slot>
  </router-link>
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
      required: false,
      default: '/'
    },
    link: {
      type: Boolean,
      required: false,
      default: false
    }
  }
}
</script>

<style scoped>
button {
  background-color: #161c2c;
  border: 1px solid #161c2c;
  color: white;
}

a {
  background-color: #EACF86;
  border: 1px solid #EACF86;
  color: #161c2c;
}

button,
a {
  text-decoration: none;
  padding: 0.5rem 1.5rem;
  font: inherit;
  cursor: pointer;
  margin-right: 0.2rem;
  margin: 0.5rem 0.3rem;
  display: inline-block;
}

a:hover,
a:active {
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