<template>
  <div class="header clearfix">
    <nav>
      <a class="navbar-brand float-left" href="/">Barcode</a>
      <ul class="nav nav-pills float-right">
        <li  class="nav-item">
            <a href="#home" class="nav-link">Home</a>
        </li>
        <li  class="nav-item"  >
            <a href="#dashboard" class="nav-link">Dashboard</a>
        </li>
        <li  class="nav-item" >
            <a href="#about" class="nav-link">About</a>
        </li>
        <li  class="nav-item"  >
            <a href="#register" class="nav-link">Register</a>
        </li>
        <li  class="nav-item" >
            <a href="#login" class="nav-link">Login</a>
        </li>
        <li  class="nav-item" >
            <a href="#logout" class="nav-link">Logout</a>
        </li>
      </ul>
    </nav>
  </div>
</template>



<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}
.navbar-brand {
  margin-left: 20px;
  color: #008B8B;
  font-size: 30px;
}

.router-link-active {
  cursor: default;
  background-color: #0275d8;
}

.router-link-active a{
  color: #fff;
}
</style>