<template>
<div>
  <div class="header clearfix">
    <nav>
      <a class="navbar-brand float-left" href="/">Barcode</a>
      <ul class="nav nav-pills pull-right">
          <router-link tag='li' to='/feed' v-if=' isAuth'> 
              <a class="nav-link"> Feed </a> 
          </router-link>
          <router-link tag='li' to='/login' v-if='! isAuth'> 
              <a class="nav-link"> Login </a> 
          </router-link>
          <router-link tag='li' to='/register' v-if='! isAuth'> 
              <a class="nav-link"> Register </a> 
          </router-link>
          <router-link tag='li' to='/logout' v-if=' isAuth'>
              <a class="nav-link"> Logout </a>
          </router-link>
      </ul>
    </nav>
  </div>
  <hr>
</div>
</template>

<script >
  export default{
    data(){
      return {
        isAuth: null
      }
    },

    created (){
      this.isAuth = this.$auth.isAuthenticated()
    }
  }
</script>

<style scope>



/*h1, h2 {
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
*/
.router-link-active {
  cursor: default;
  background-color: blue;
  color:white;
}
/*
.router-link-active a{
  color: #fff;
}*/
</style>