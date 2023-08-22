<template>
  <div class="wrapper">
    <div class="container">
      <h2>Document Tracker</h2>
      <p> Although the development stage  is still ongoing, the system is useful to any business offices with lots of paperwork to be routed. The system can add users who would be responsible for recording and routing documents while guests can only view the route information of all documents.</p>
        <div>
          <h4>Home page/Landing page</h4>
          <img src="../../../public/home.png">
          <p>A very simple yet informative home page styled using Bootstrap v5.2. Certain contents on this page includes the features, contact informations and the login and and signup buttons. </p>
        </div>
        <div>
          <h4>Dashboard Page</h4>
          <img src="../../../public/dashboard.png" alt=''>
          <p>This section is where both users and guests can view all document records. Documents are categorized based on their status (Pending, Processing and Completed) and each documents are displayed like a list.</p>
        </div>
        <div>
          <h4>Login and Signup Page</h4>
          <div class="flex-col">
            <img src="../../../public/signup.png" alt=''>
            <img src="../../../public/login.png" alt=''>
          </div>
          <p>The <b>Signup Page </b>enables users to create new account. This page only asks information on the user's username, email and password.<br>
            The <b>Login Page</b> allows uers to authenticate themselves and gain access asking the email and password. Once a user enters their credentials and clicks the "Login" button, the system compares the provided information with the stored credentials in its database. If the information matches, the user is granted access to the restricted area of the Document Tracker System</p>
        </div>
        <div>
          <h4>New Document Action</h4>
          <div class="flex-col">
            <img src="../../../public/new_doc.png" alt=''>
            <!-- <img src='../../../public/dts/login.png' alt=''> -->
          </div>
          <p>On the My logs tab, the user can create a new document. By clicking the New log, a modal will appear where the user can input all the necessary data for a document. Such data are as follows:</p>
          <ul>
            <li>Name</li>
            <li>Description</li>
            <li>Section</li>
            <li>Category</li>
          </ul>
        </div>
        <div>
          <h4>Route Document Action</h4>
          <div class="flex-col">
            <img src="../../../public/route_doc.png" alt=''>
          </div>
          <p>The route document is where you send information of documents to other users for them to take action. It is just like sending text message or emailing to your colleagues, the difference is that the user is sending extra data of a document. And these extra data are rather crucial for the process. These data are the following:</p>
          <ul>
            <li>Status (overall status of document, eg: Pending, Processing, etc.)</li>
            <li>State(state of routing, eg: Forwarded, Received, etc.)</li>
            <li>Remarks</li>
            <li>Date Received</li>
          </ul>
        </div>
    </div>
  </div>
</template>

<style scoped>
  .container {
    padding: 90px;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
  }

  img{
    width: 640px;
    max-width: 100%;
    height: auto;
    box-shadow: 10px 6px lightblue;
    margin: 12px 0px;
  }

  .flex-col{
    display: flex;
    flex-direction: column;
  }

  a {
    text-decoration: none;
    color: #161c2c;
    font-size: 1.5rem;
    margin: 20px 0px;
  }

  a:hover {
    color: #EACF86;
  }
</style>