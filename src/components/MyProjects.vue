<template>
  <div class="wrapper">
    <div class="wrapper-content-layout">
      <h1 class="section-header">My Projects</h1>
      <div class="proj-content">
        <img class="proj-img" src="../../public/covid-stat.png">
        <div class="proj-description">
          <h4>Covid19-Statistics</h4>
          <p>
            This static website is designed based on the API provided by RapidAPI. Developed using Vue.js framework with Tailwind CSS, its purpose is solely for tracking current statistics on Covid-19 pandemic in all countries all over the world. 
          </p>
          <div class="proj-controls">
            <base-button link href="https://dioarayan.github.io/covid-statistics/" target="_blank">
              <span>
                <iconify-icon icon="mdi:eye" style="width: 1.5rem;" />
              </span>
              Live Demo
            </base-button>
            <base-button link href="https://github.com/dioarayan/covid-statistics" target="_blank">
              <span>
                <iconify-icon icon="mdi:github" style="width: 1.5rem;" />
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
            <base-button link href="#">
              <span>
                <iconify-icon icon="mdi:eye" style="width: 1.5rem;" />
              </span>
              Live Demo
            </base-button>
            <base-button link href="https://github.com/dioarayan/document-tracker" target="_blank">
              <span>
                <iconify-icon icon="mdi:github" style="width: 1.5rem;" />
              </span> 
              Code 
            </base-button>
          </div>
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
  line-height: 1.8;
  padding: 2px 10px;
}

.proj-content {
  padding: 6px 60px;
  display: flex;
  flex-direction: row;
}

.proj-controls{
  display: flex;
  flex-direction: row;
}

span {
  padding-top: 10px;
}

svg {
 width: 2rem; 
 height: 1rem;
}

@media (max-width: 700px) {
  .proj-content{
    flex-direction: column;
  }

  .proj-description p {
    width: 100%;
  }


  .proj-controls{
    width: 50%;
    display: flex;
    flex-direction: column;
    margin: 10px 0px;
  }
}

</style>
