<template>
  <div class="wrapper">
    <div class="fill-background">
        <div class="wrapper-contact-layout">
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
        </div>
    </div>
  </div>
</template>

<style scoped>

.fill-background{
  background-color: #96A4AE;
  /* padding: 20px 0px; */
}

.wrapper-contact-layout{
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  padding: 30px 60px;
}

.wrapper-flex-item-1{
  flex-grow: 5;
  
}

.wrapper-flex-item-2{
  display: flex;
  flex-direction: column;
  flex-grow: 3;
  align-items: center;
  justify-content: center;
  /* background-color: #161c2c; */
}


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
}

.stack-icons{
  display: flex;
  flex-direction: column;
  align-items: center;
}

svg {
  width: 2em;
  height: 3em;
}

a { color: inherit; } 

@media (max-width: 700px) {
  .wrapper-contact-layout{
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
}

.stack-icons{
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
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