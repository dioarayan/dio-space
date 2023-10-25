<template>
  <div class="background">
    <div class="container">
      <div class="content">
        <div class="flex-item-1">
          <p>Email me:</p>
          <div class="inline"><iconify-icon icon="ic:baseline-email" /> <a href="mailto:drarayan1994@gmail.com" target="_blank"> drarayan1994@gmail.com </a></div>
        </div>
        <div class="flex-item-2">
          <p>Or you can also find me on these links</p>
            <div class="stack-icons">
              <a href="https://github.com/dioarayan" target="_blank"> <iconify-icon icon="mdi:github" />  </a>
              <a href="https://www.linkedin.com/in/dioreginearayan1994/" target="_blank"><iconify-icon icon="mdi:linkedin" /> </a>           
              <a href="https://twitter.com/dioarayan" target="_blank"><iconify-icon icon="mdi:twitter" /> </a>            
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

.background {
  background-color: #96A4AE;
}

.content {
  padding: 6px 6px;
  display: flex;
  flex-direction: row;
}

.flex-item-1, .flex-item-2 {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  text-align: center;
}

.flex-item-1 {
  border-right: 1px solid #B6BFC5;
}


.stack-icons{
  display: flex;
  flex-direction: row;
  align-items: center;
}

svg {
  width: 2em;
  height: 3em;
  padding: 0px 10px;
}

a { color: inherit; } 

@media (max-width: 700px) {

  .content{
    flex-direction: column;
  }

  .flex-item-1, .flex-item-2 {
    padding: 40px 0px;
  }

  .flex-item-1 {
    border-bottom: 1px solid #B6BFC5;
    border-radius: 4px;
    border-right: none;
  }

  .stack-icons{
      display: flex;
      flex-direction: row;
      justify-content: space-evenly;
      width: 100%;
    }
}

</style>