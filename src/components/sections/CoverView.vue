<template>
  <div class="container-intro">
    <!-- <div class="wrapper"> -->
      <div class="content">
      <p>Hi, my name is </p>
      <h2>DIO ARAYAN</h2>
      <p>I am an aspiring <span style="color: #EACF86">web developer</span></p>
      <!-- <base-button id="btn-link" @click="scrollToAnchor(contact)">Get in touch</base-button> -->
      <base-button href="/dio-space/#contact" id="btn-link">Get in touch</base-button>
      <base-button mode="outline" href="public/Resume-Dio-Arayan.pdf" target="_blank">Resume</base-button>
    </div>
    <!-- </div> -->
  </div>
</template>

<style scoped>
.container-intro {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  background-color: #161c2c;
  padding: 0px 60px;
}

.content {
  margin: 0;
  line-height: 2rem;
}

a {
  width: 90px;
  max-width: 100%;
  text-align: center;
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

@media (min-width: 1440px) {
  .container-intro {
    padding: 90px 200px;
  }
}

@media screen and (max-width: 700px){
  .container-intro {
    padding: 20px;
  }

  h2{
    line-height: 1;
  }

  svg {
    padding-top: 20px;
    padding-right: 30px;
  }

}
</style>