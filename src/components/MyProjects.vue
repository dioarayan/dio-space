<template>
  <div class="wrapper">
    <h1 class="section-header">My Projects</h1>
    <div class="proj-content">
      <img class="proj-img" src="../../public/covid-stat.png">
      <div class="proj-description">
        <h4>Covid19-Statistics</h4>
        <p>
          This static website is designed based on the API provided by RapidAPI. Developed using Vue.js framework with Tailwind CSS, its purpose is solely for tracking current statistics on Covid-19 pandemic in all countries all over the world. 
        </p>
        <div class="proj-controls">
          <base-button link href="https://dioarayan.github.io/covid-statistics/">
            <span>
              <font-awesome-icon icon="fa-regular fa-eye" />
            </span>
            Live Demo
          </base-button>
          <base-button link class="outline" href="https://github.com/dioarayan/covid-statistics">
            <span>
               <font-awesome-icon icon="fa-brands fa-github" />
            </span> 
            Code 
          </base-button>
        </div>
      </div>
    </div>
    <div class="proj-content">
      <img class="proj-img" src="../../public/dts.png">
      <div class="proj-description">
        <h4>Document Tracker</h4>
        <p>
          Although the development stage  is still ongoing, the system is useful to any business offices with lots of paperwork to be routed. The system can add users who would be responsible for recording and routing documents while guests can only view the route information of all documents.
        </p>
        <div class="proj-controls">
          <base-button link href="https://dioarayan.github.io/covid-statistics/">
            <span>
              <font-awesome-icon icon="fa-regular fa-eye" />
            </span>
            Live Demo
          </base-button>
          <base-button link class="outline" href="https://github.com/dioarayan/covid-statistics">
            <span>
               <font-awesome-icon icon="fa-brands fa-github" />
            </span> 
            Code 
          </base-button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.proj-img{
  box-shadow: 10px 10px lightblue;
  margin: 24px;
  width: 420px;
}

.proj-description {
  padding: 2px 10px;
}

.proj-content {
  padding: 6px 60px;
  display: flex;
  flex-direction: row;
}

span {
  position: relative;
  height: 40px;
}

svg {
 width: 2rem; 
 height: 1.2rem;
 position: relative;
 top: 0
}

@media (max-width: 700px) {
  .proj-content{
    flex-direction: column;
  }

  .proj-description p {
    width: 100%;
  }
}
</style>
