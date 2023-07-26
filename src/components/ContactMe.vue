<template>
  <div class="bground-wrapper">
    <div class="wrapper">
      <h1 class="section-header">Let's get in touch!</h1>
      <div class="flex-contact">
        <div class="contact-form">
          <form>
            <div class="input-control">
              <label for="form-name"> Your Name</label>              
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
            <input type="submit" value="Send" id="btn-submit">
          </form>
        </div>
        <div class="contact-info">
          <p>Find me on these links</p>
        </div>

      </div>
    </div>
  </div>
</template>

<style scoped>

.bground-wrapper{
  background-color: #96A4AE;
  padding: 20px 0px;
}

.flex-contact {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}

.contact-form{
  width: 380px;
  margin: 10px;
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
  border-radius: 5px;
}

#btn-submit {
  height: 2.5rem;
  width: 120px;
  padding: 4px;
  background-color: #EACF86;
}

</style>