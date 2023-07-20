<template>
  <img
    alt="Vue logo"
    class="logo"
    src="../assets/logo.svg"
    width="25"
    height="25" />

  <div class="wrapper">
    <a href="#">Home</a>
    <a href="#">About</a>
    <a href="#">Contact</a>
  </div>
</template>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  width: 280px;
}

.navMenu {
  padding-right: 20px;
  height: 45px;
  vertical-align: middle;
}

/* @media (max-width: 740px) {
  header {
    display: flex;
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  .wrapper {
    display: flex;
    flex-direction: column;
  }
} */
</style>

