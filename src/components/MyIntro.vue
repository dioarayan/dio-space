<template>
  <section class="wrapper-intro">
    <div class="content">
      <h1>Hi, my name is Dio!</h1>
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

h1, p {
  margin: 0;
  color: white;
}

h1 {
  padding: 5px 0px;
  font-size: 3rem;
}

p{
  font-size: 1.5rem;
  padding-bottom: 20px;
}



</style>

