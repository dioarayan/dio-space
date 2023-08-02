<template>
  <header :class="{ 'onScroll': !topOfPage }">
    <div class="nav-wrapper">
      <img
        alt="Vue logo"
        class="logo"
        src="../../assets/logo.svg"
        width="25"
        height="25" />
    
        <div class="nav-menu-wrapper {">
          <a @click="scrollToAnchor(sectIntro)">Home</a>
          <a @click="scrollToAnchor(sectIntro.value)" >About</a>
          <!-- <a @click="scrollToAnchor(skills)" >Skills</a>
          <a @click="scrollToAnchor(projects)" >Projects</a>
          <a @click="scrollToAnchor(contact)">Contact</a> -->
        </div>
    </div>
  </header>
</template>

<script>
import { ref, inject, onBeforeMount } from 'vue';
// import useScrollToAnchor from '../../composables/scroll.js';
// import eventBus from '../../composables/eventBus';

export default {
  setup(props) {
    const scrollTarget = ref(null);
    const topOfPage = ref(true);
    const sectIntro = inject('intro')
    console.log(sectIntro)
    
    onBeforeMount(()=>{
      window.addEventListener('scroll', handleScroll)
    })
    
    function handleScroll(){
      if(window.scrollY>0){
         topOfPage.value = false;
      } else {
         topOfPage.value = true;
      }
    }

    function scrollToAnchor(refName) {
      console.log(intro.value)
      scrollTarget.value = refName;
      console.log(scrollTarget.value)
      scrollTarget.value.scrollIntoView({ behavior: 'smooth' });
    }
  
    return {  
      scrollTarget, 
      scrollToAnchor, 
      topOfPage, 
      sectIntro 
    }
  }

}

</script>

<style scoped>

header {
  background-color: transparent;
  position: fixed; 
  width: 100%;
  transition: all .2s ease-in-out;
}

header.onScroll {
  box-shadow: 0 0 10px #aaa;
  background-color: #fff;
}

header.onScroll a {
  color: #161c2c;
}

.nav-wrapper{
  display: flex;
  justify-content: space-between;
  align-items: center;;
  padding: 10px 60px;
}
.nav-menu-wrapper {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  width: 280px;
}

a {
  text-decoration: none;
  color: #eacf86;
  transition: 0.4s;
}

/* @media (max-width: 740px) {
  header {
    display: flex;
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  .wrapper {
    display: flex;
    flex-direction: column;
  }
} */
</style>

