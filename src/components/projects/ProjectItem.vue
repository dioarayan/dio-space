<template>
  <div class="wrapper">
    <div class="container">
      <h3>Document Tracker</h3>
        <div>
          <img src="../../../public/dts/home.png">
          <h4>Home page/Landing page</h4>
          <p>A very simple yet informative home page styled using Bootstrap v5.2 </p>
        </div>
        <div>
          <img src='../../../public/dts/dashboard.png' alt=''>
          <h4>Dashboard Page</h4>
          <p>This section is where both users and guests can view all document records. Documents are categorized based on their status (Pending, Processing and Completed) and each documents are displayed like a list.</p>
        </div>
        <div>
          <div class="flex-row">
            <img src='../../../public/dts/login.png' alt=''>
            <img src='../../../public/dts/signup.png' alt=''>
          </div>
          <h4>Login and Signup Page</h4>
          <p>This section is where both users and guests can view all document records. Documents are categorized based on their status (Pending, Processing and Completed) and each documents are displayed like a list.</p>
        </div>
    </div>
  </div>
</template>

<style scoped>
  .container {
    padding: 60px 90px;
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  img{
    width: 100%;
    /* height: auto; */
  }

  .flex-row{
    display: flex;
    flex-direction: row;
  }
</style>