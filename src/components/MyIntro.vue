<template>
  <section class="wrapper-intro">
    <div class="content">
      <p>Hi, my name is </p>
      <h2>DIO ARAYAN</h2>
      <p>I'm an aspiring <span style="color: #EACF86">web developer</span></p>
      <base-button link to="#">Get in touch</base-button>
      <base-button link to="#" mode="outline">Resume</base-button>
    </div>
  </section>
</template>


<style scoped>
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


@media (max-width: 700px) {
  h2{
    line-height: 1;
  }
}

</style>

