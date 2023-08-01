<template>
  <TheNavigation :parentRefs="$refs" />
  <!-- <header :class="{ 'onScroll': !topOfPage }">
    <div class="nav-wrapper">
      <img
        alt="Vue logo"
        class="logo"
        src="../../assets/logo.svg"
        width="25"
        height="25" />
    
      <div class="nav-menu-wrapper {">
        <a @click="scrollToAnchor(intro)">Home</a>
        <a @click="scrollToAnchor(about)" >About</a>
        <a @click="scrollToAnchor(skills)" >Skills</a>
        <a @click="scrollToAnchor(projects)" >Projects</a>
        <a @click="scrollToAnchor(contact)">Contact</a>
      </div>
    </div>
  </header> -->
    <div ref="intro">
      <MyIntro />
    </div>
    <div ref="about" >
      <AboutMe />
    </div>
    <div ref="skills" >
      <MySkills />
    </div>
    <div ref="projects" >
      <MyProjects />
    </div>
    <div ref="contact" >
      <ContactMe />
    </div>
    <TheFooter />
</template>

<script>
import TheNavigation from '../components/layout/TheNavigation.vue';
import TheFooter from '../components/layout/TheFooter.vue';
import MyIntro from '../components/MyIntro.vue';
import AboutMe from '../components/AboutMe.vue';
import MySkills from './MySkills.vue';
import MyProjects from './MyProjects.vue';
import ContactMe from './ContactMe.vue';
import { ref, onBeforeMount, onMounted } from 'vue';

export default{
  components: {
    TheNavigation,
    TheFooter,
    MyIntro,
    AboutMe,
    MySkills,
    MyProjects,
    ContactMe
  },
  setup(){
    const intro = ref(null);
    const about = ref(null);
    const skills = ref(null);
    const projects = ref(null);
    const contact = ref(null);
    const topOfPage = ref(true);
    // const scrollTarget = ref(null);

    onBeforeMount(()=>{
      window.addEventListener('scroll', handleScroll)
    })

    onMounted(()=> {
      console.log(intro.value)
    })

    // onMounted(() => {
    //   const hash = window.location.hash.slice(1);
    //   console.log(hash)
    //   if (hash) {
    //     scrollTarget.value = document.getElementById(hash);
    //   }
    // });
    
    function handleScroll(){
      if(window.scrollY>0){
         topOfPage.value = false;
      } else {
         topOfPage.value = true;
      }
    }

    // function scrollToAnchor(refName) {
    //   scrollTarget.value = refName;
    //   scrollTarget.value.scrollIntoView({ behavior: 'smooth' });
    // }

    return { 
      // scrollTarget,
      // scrollToAnchor,
      topOfPage, 
      intro,
      about
    }
  }
}

</script>

<style>

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
</style>