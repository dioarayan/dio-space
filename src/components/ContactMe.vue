<template>
  <div class="wrapper-content-layout">
    <div class="wrapper">
    <!-- <div class="wrapper-contact-layout">
      <div class="wrapper-flex-item-1">
        <div class="flex-contact">
          <div class="contact-form">
            <h1 class="section-header">Let's get in touch!</h1>
            <form>
              <div class="input-control">
                <label for="form-name"> Your Name </label>              
                  <input type="text" class="form-input" id="form-name" name="name">
              </div>
              <div class="input-control">
                <label for="form-email">Mail</label>
                  <input type="email" class="form-input" name="email">
              </div>
              <div class="input-control">
                <label for="form-message">Message</label>
                <textarea id="form-message" rows="6" cols="30" name="message"></textarea>
              </div>
              <base-button type="submit"> Send</base-button>
            </form>
          </div>
        </div>
      </div>
      <div class="wrapper-flex-item-2">
          <p>You can also find me on these links</p>
          <div class="stack-icons">
            <a href="https://github.com/dioarayan" target="_blank"> <iconify-icon icon="mdi:github" />  </a>
            <a href="https://www.linkedin.com/in/dioreginearayan1994/" target="_blank"><iconify-icon icon="mdi:linkedin" /> </a>           
            <a href="https://twitter.com/dioarayan" target="_blank"><iconify-icon icon="mdi:twitter" /> </a>            
          </div>
      </div>
    </div> -->
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

.wrapper-content-layout{
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


/* .wrapper-flex-item-1{
  flex-grow: 5;
  
} */

/* .wrapper-flex-item-2{
  display: flex;
  flex-direction: column;
  flex-grow: 3;
  align-items: center;
  justify-content: center;
  /* background-color: #161c2c; */
/* } */ 
/* 

.flex-contact {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}

.contact-form{
  width: 380px;
  margin: 10px;
  line-height: 1.7;
  
}

.input-control{
  display: flex;
  flex-direction: column;
  padding: 6px 0px;
}

.form-input{
  height: 1.5rem;
}

.form-input, textarea {
  padding: 8px;
  border: 1px solid gray;
}

input:focus,
textarea:focus {
  outline: none !important;
  border: 2px solid #161c2c;
  /* box-shadow: 0 0 10px lightblue; */
/* }  */

</style>