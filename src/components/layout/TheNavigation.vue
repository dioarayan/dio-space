<template>
  <header class="myHeader" :class="[ topOfPage ? '' : 'onScroll', showMobileMenu ? 'responsive' : '' ]" >
    <div class="wrapper">
      <div class="nav-wrapper">
        <img
          alt="DA"
          class="logo"
          src="../../../public/dio-icon.png"
          width="30"
          height="30" />
      
        <div class="nav-menu-wrapper {">
          <a @click="$emit('scrollToAnchor', 'home')" class="menu-list">HOME</a>
          <a @click="$emit('scrollToAnchor', 'about')" class="menu-list">ABOUT</a>
          <a @click="$emit('scrollToAnchor', 'skills')" class="menu-list">SKILLS</a>
          <a @click="$emit('scrollToAnchor', 'projects')" class="menu-list">PROJECTS</a>
          <a @click="$emit('scrollToAnchor', 'contact')" class="menu-list">CONTACT</a>
          <a class="hamburger" @click="showMenu">
            <iconify-icon icon="fa-solid:bars" style="width: 3rem;" />
          </a>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import { ref, onBeforeMount } from 'vue';

export default {
  emits: ['scrollToAnchor'],
  setup(_1, ctx) {
    const section = ref('')
    const topOfPage = ref(true);    
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

    function showMenu() {
      showMobileMenu.value = !showMobileMenu.value
    }
  
    ctx.emit('scrollToAnchor', section.value)

    return {  
      topOfPage, 
      showMobileMenu,
      showMenu,
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


.myHeader .wrapper .nav-wrapper .nav-menu-wrapper a.hamburger {
  display: none;
}


@media screen and (max-width: 700px) {
  svg {
    padding-top: 20px;
    padding-right: 30px;
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

