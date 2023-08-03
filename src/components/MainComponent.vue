<template>
  <div class="myHeader" :class="[ topOfPage ? '' : 'onScroll', showMobileMenu ? 'responsive' : '' ]" >
    <div class="wrapper">
      <div class="nav-wrapper">
        <img
          alt="DA"
          class="logo"
          src="../../public/dio-icon.png"
          width="30"
          height="30" />
  
        <div class="nav-menu-wrapper">
          <a class="menu-list" @click="scrollToAnchor(intro)">HOME</a>
          <a class="menu-list" @click="scrollToAnchor(about)" >ABOUT</a>
          <a class="menu-list" @click="scrollToAnchor(skills)" >SKILLS</a>
          <a class="menu-list" @click="scrollToAnchor(projects)" >PROJECTS</a>
          <a class="menu-list" @click="scrollToAnchor(contact)">CONTACT</a>
          <a class="hamburger" @click="showMenu">
            <iconify-icon icon="fa-solid:bars" style="width: 3rem;" />
          </a>
        </div>
      </div>
    </div>
  </div>

    <div ref="intro">
      <section class="wrapper-intro">
        <div class="wrapper">
          <div class="content">
            <p>Hi, my name is </p>
            <h2>DIO ARAYAN</h2>
            <p>I am an aspiring <span style="color: #EACF86">web developer</span></p>
            <base-button id="btn-link" @click="scrollToAnchor(contact)">Get in touch</base-button>
            <base-button mode="outline" href="public/Resume-Dio-Arayan.pdf" target="_blank">Resume</base-button>
          </div>
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
      console.log(showMobileMenu.value)
    }

    return { 
      scrollTarget,
      scrollToAnchor,
      showMenu,
      showMobileMenu,
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

.myHeader {
  display: flex;
  justify-content: center;
  background-color: transparent;
  position: fixed; 
  width: 100%;
  height: 3.5rem;
  padding-top: 0.5rem;
  transition: all .2s ease-in-out;
  overflow: hidden;
}

.myHeader.onScroll {
  box-shadow: 0 0 10px #aaa;
  background-color: #fff;
}

.myHeader.onScroll a {
  color: #161c2c;
}

.menu-list{
  padding: 2px 10px;
}

.nav-wrapper{
  display: flex;
  justify-content: space-between;
  align-items: center;
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
  justify-content: center;
  flex-direction: column;
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
.myHeader .wrapper .nav-wrapper .nav-menu-wrapper a.hamburger {
  display: none;
}

@media screen and (max-width: 700px) {
  h2{
    line-height: 1;
  }

  svg {
    padding-top: 20px;
    padding-right: 30px;
  }

  .wrapper-intro{
    padding: 0px 20px;
  }

  .myHeader .wrapper .nav-wrapper .nav-menu-wrapper a { display: none;}
  .myHeader .wrapper .nav-wrapper .nav-menu-wrapper a.hamburger { 
    float: right;
    display: block;
  }

  .myHeader.responsive, .myHeader.onScroll.responsive {position: fixed;}
  .myHeader .wrapper .nav-wrapper .nav-menu-wrapper a.hamburger {
    position: absolute;
    right: 0;
    top: 0;
  }

  .myHeader.responsive, .myHeader.onScroll.responsive {
    height: 300px;
    width: 100%;
    background-color: #fff;
  }
  
  .myHeader.responsive .wrapper .nav-wrapper .nav-menu-wrapper a:not(:last-child),
  .myHeader.responsive .wrapper .nav-wrapper .nav-menu-wrapper,
  .myHeader.onScroll.responsive .wrapper .nav-wrapper .nav-menu-wrapper a:not(:last-child),  
  .myHeader.onScroll.responsive .wrapper .nav-wrapper .nav-menu-wrapper{
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
    margin: 10px 20px;
  }

  .myHeader.responsive .wrapper .nav-wrapper .nav-menu-wrapper a:not(:last-child):hover{
    text-decoration: underline;
  }
}

</style>