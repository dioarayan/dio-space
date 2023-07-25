<template>
  <div class="nav-wrapper">
    <img
      alt="Vue logo"
      class="logo"
      src="../assets/logo.svg"
      width="25"
      height="25" />
  
    <div class="nav-menu-wrapper {">
      <a href="#">Home</a>
      <a href="#">About</a>
      <a href="#">Contact</a>
    </div>
  </div>
</template>

<style scoped>
.nav-wrapper{
  display: flex;
  justify-content: space-between;
  align-items: center;;
  padding: 10px 60px;
}
.nav-menu-wrapper {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  width: 280px;
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

