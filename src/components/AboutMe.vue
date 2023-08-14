<template>
  <div class="wrapper-content-layout">
    <div class="wrapper">
      <h1 class="section-header">About Me</h1>
      <div class="content">

        <div class="flex-item-1">
          <!-- <p>Contact Details</p> -->
          <div class="inline">
            <iconify-icon icon="mdi:telephone-outline" />
            <small>(+63) 960 655 8582</small>
          </div>
          <div class="inline">
            <iconify-icon icon="ic:outline-email" />
            <small>drarayan1994@gmail.com</small>
          </div>
          <div class="inline">
            <iconify-icon icon="ion:location-outline" />
            <small>6521 Baybay City, Leyte, Philippines</small>
          </div>
        </div>

        <div class="flex-item-2">
          <p>My name is Dio Regine Arayan. I am an enthusiastic and driven web developer. I have a deep passion in coding and making dynamic and user-friendly websites that could help people on their personal and business goals. 
            <br><p>As a computer science graduate, I embarked on a journey that took me far beyond the world of programming. Despite my initial focus on computer science, life had a different trajectory in mind. Instead of diving headfirst into the tech world, I found myself drawn to the world of administrative services. This unexpected shift allowed me to explore new aspects of my abilities and interests. Years later, I found myself drawn back to the tech world, armed with a perspective that had been enriched by my diverse experiences. This time, my approach was holistic and multifaceted, blending my tech know-how with a newfound appreciation for creativity and innovation.</p>
            I believe that having a Computer Science diploma is a solid foundation, but in this rapidly evolving field of Software Development, dedication and continuous self-improvement is the key to further develop the necessary skills and knowledge.<br>
          </p>
        </div>
        
      </div>
    </div>
  </div>
</template>

<style scoped>
.content{
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 0px 30px;
  line-height: 1.8;
}

.flex-item-1, .flex-item-2 {
  padding: 20px 10px;
}

.flex-item-1{
  flex-grow: 3;
  height: 280px;
  display: flex;
  flex-direction: column;
  align-content: space-around;
  justify-content: center;
  text-align: center;
  background-color: #B6BFC5;
}

.flex-item-2{
  flex-grow: 5;
}

svg {
  padding: 0px 3px;
  width: 1.5rem;
  height: auto;
}

@media (max-width: 700px) {
  .content{
    flex-direction: column-reverse;
    padding: 0px 20px;
  }
}

</style>