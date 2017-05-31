<template>
  <div class="header clearfix">
    <nav>
      <a class="navbar-brand float-left" href="/">Barcode</a>
      <ul class="nav nav-pills float-right">
        <router-link tag="li" class="nav-item" to="/" exact>
            <a class="nav-link">Home</a>
        </router-link>
        <router-link tag="li" class="nav-item" to="dashboard" v-if="isAuth">
            <a class="nav-link">Dashboard</a>
        </router-link>
        <router-link tag="li" class="nav-item" to="about" v-if="!isAuth">
            <a class="nav-link">About</a>
        </router-link>
        <router-link tag="li" class="nav-item" to="contact">
            <a class="nav-link">Contact</a>
        </router-link>
        <router-link tag="li" class="nav-item" to="login" v-if="!isAuth">
            <a class="nav-link">Login</a>
        </router-link>
        <router-link tag="li" class="nav-item" to="logout" v-if="isAuth">
            <a class="nav-link">Logout</a>
        </router-link>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isAuth: null
    }
  },

  created () {
    this.isAuth = this.$auth.isAuthenticated()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
