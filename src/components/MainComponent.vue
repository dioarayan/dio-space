<template>
  <header class="topNav" :class="{ 'onScroll': !topOfPage }" id="myTopNav">
    <div class="nav-wrapper">
      <img
        alt="Vue logo"
        class="logo"
        src="../../public/favicon.ico"
        width="25"
        height="25" />

        <i @click="showMenu">
          <iconify-icon icon="fa-solid:bars" style="width: 2rem;" />
        </i>
    
      <div class="nav-menu-wrapper {">
        <a class="menu-list" @click="scrollToAnchor(intro)">Home</a>
        <a class="menu-list" @click="scrollToAnchor(about)" >About</a>
        <a class="menu-list" @click="scrollToAnchor(skills)" >Skills</a>
        <a class="menu-list" @click="scrollToAnchor(projects)" >Projects</a>
        <a class="menu-list" @click="scrollToAnchor(contact)">Contact</a>
      </div>
    </div>
  </header>
    <div ref="intro">
      <section class="wrapper-intro">
        <div class="content">
          <p>Hi, my name is </p>
          <h2>DIO ARAYAN</h2>
          <p>I'm an aspiring <span style="color: #EACF86">web developer</span></p>
          <a id="btn-link" @click="scrollToAnchor(contact)">Get in touch</a>
          <base-button link to="#" mode="outline">Resume</base-button>
        </div>
      </section>
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
import TheFooter from '../components/layout/TheFooter.vue';
import MyIntro from '../components/MyIntro.vue';
import AboutMe from '../components/AboutMe.vue';
import MySkills from './MySkills.vue';
import MyProjects from './MyProjects.vue';
import ContactMe from './ContactMe.vue';
import { ref, onBeforeMount } from 'vue';

export default{
  components: {
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
    const scrollTarget = ref(null);
    const showMobileMenu = ref(false);

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

    function showMenu() {
      showMobileMenu.value = !showMobileMenu.value
    }

    return { 
      scrollTarget,
      scrollToAnchor,
      showMenu,
      topOfPage, 
      intro,
      about,
      skills,
      projects,
      contact
    }
  }
}

</script>

<style scoped>

header {
  background-color: transparent;
  position: fixed; 
  width: 100%;
  height: 3.5rem;
  padding-top: 0.5rem;
  transition: all .2s ease-in-out;
  overflow: hidden;
}

header.onScroll {
  box-shadow: 0 0 10px #aaa;
  background-color: #fff;
}

header.onScroll a {
  color: #161c2c;
}

.menu-list{
  padding: 2px 10px;
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
  /* width: 280px; */
}

a {
  text-decoration: none;
  color: #eacf86;
  transition: 0.4s;
}

a:hover {
  cursor: pointer;
}

.wrapper-intro{
  display: flex;
  align-items: center;
  flex-direction: row;
  height: 100vh;
  background-color: #161c2c;
  padding: 0px 60px;
}

.content {
  margin: 0;
  line-height: 2rem;
}

h2, p {
  color: white;
}

h2 {
  /* padding: 5px 0px; */
  font-size: 4rem;
  margin-bottom: 1rem;
  margin-top: 0.5rem;
}

p{
  font-size: 1.3rem;
  text-transform: none !important;
  font-weight: 400 !important;
  /* padding-bottom: 20px; */
}

#btn-link {
  background-color: #EACF86;
  border: 1px solid #EACF86;
  color: #161c2c;
  text-decoration: none;
  padding: 0.5rem 1.5rem;
  font: inherit;
  cursor: pointer;
  margin-right: 0.2rem;
  margin: 0.5rem 0.3rem;
  display: inline-block;
}

/* .topNav .nav-wrapper .nav-menu-wrapper .icon {
  display: none;
} */
i {
  display: none;
}

@media (max-width: 700px) {
  h2{
    line-height: 1;
  }

  .nav-wrapper{
    padding-top: 10px;
    position: absolute;
    width: 100%;
    
  }
  
  .open-menu {
    opacity: 1;
    height: 150px;
  }
  
  .closed-menu {
    opacity: 0;
    height: 0;
    padding: 0;
  }
  .nav-menu-wrapper{
    flex-direction: column;
    z-index: 100;
    position: relative;
    transition: all 0.2s ease-out;
  }

  i {
    display: block;
    text-align: right;
    padding: 0 10px 10px 0;
  }
  
}

</style>