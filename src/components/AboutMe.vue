<template>
  <div class="wrapper">
    <div class="wrapper-content-layout">
      <h1 class="section-header">About Me</h1>
      <div class="content">
        <div class="flex-item-1">
          <p>Contact Details</p>
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
            <br><p>I am driven and ambitious professional with seven years of experience in Administrative Services. Transitioning into Software Development to pursue my passion and leverage my skills in programming. I am known for exceptional problem-solving skills and determination to learn new things and I commit to continuous growth and am eager to contribute to the success of a dynamic organization in Web Development</p>
            I believe that having a Computer Science diploma is a solid foundation, but in this rapidly evolving field of Software Development, dedication and continuous self-improvement is the key to further develop the necessary skills and knowledge.<br>
            <br><a href="#">More about me...</a>
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
  padding: 0px 50px;
  line-height: 1.8;
}

.flex-item-1, .flex-item-2 {
  padding: 20px 10px;
}

.flex-item-1{
  flex-grow: 3;
}

.flex-item-2{
  flex-grow: 5;
}

svg {
  padding: 0px 3px;
  width: 1.5rem;
  height: auto;
}

</style>