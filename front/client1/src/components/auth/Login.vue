<template>
<div class="login">
    <div class="container">
        <div class="login-container">
            <div id="output" v-if="hasError" class="animated fadeInUp alert-danger alert">{{ error.message }}</div>
            <div class="avatar">
              <img src="../../assets/user_circle.png" height="100" width="100" alt="">
            </div>
            <div class="form-box">
                <form action="" method="">
                    <input type="email" autocomplete="off" name="emails" v-model="email" placeholder="E-Mail">
                    <input type="password" autocomplete="off" name="password" v-model="password" placeholder="Password">
                    <button class="btn btn-info btn-block login" @click="handleSubmit" type="submit">Login</button>
                </form>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      email: '',
      password: '',
      hasError: false,
      error: {
        message: ''
      }
    }
  },
  methods: {
    handleSubmit (event) {
      event.preventDefault()
      this.checkValidation()
      this.login()
    },
    checkValidation () {
      if (!this.email || !this.password) {
        this.error.message = 'Email and Password cant be blanked!'
        this.hasError = true
      } else {
        this.hasError = false
      }
    },

    login () {
      const apiUrl = 'http://localhost:8000/api/v1/'
      var data = {
        client_id: 2,
        client_secret: 'IteMyUE3t0g4paaruW3c5yyWh8CNBY1LL0qTl0yp',
        grant_type: 'password',
        username: this.email,
        password: this.password
      }

      this.$http.post(apiUrl + 'oauth/token', data)
          .then(response => {
            this.$auth.setToken(response.body.access_token, response.body.expires_in + Date.now())
            // After it will go to the authorized user's page
            this.$router.push('dashboard')
          })
          .catch(function (e) {
            console.log(e.bodyText) // "oh, no!"
          })
    }

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .login-container{
        position: relative;
        width: 300px;
        margin: 80px auto;
        padding: 20px 40px 40px;
        text-align: center;
        background: #fff;
        border: 1px solid #ccc;
    }

    #output{
        position: absolute;
        width: 300px;
        top: -75px;
        left: 0;
        color: #fff;
    }

    #output.alert-success{
        background: rgb(25, 204, 25);
    }

    #output.alert-danger{
        background: rgb(228, 105, 105);
    }


    .login-container::before,.login-container::after{
        content: "";
        position: absolute;
        width: 100%;height: 100%;
        top: 3.5px;left: 0;
        background: #fff;
        z-index: -1;
        -webkit-transform: rotateZ(4deg);
        -moz-transform: rotateZ(4deg);
        -ms-transform: rotateZ(4deg);
        border: 1px solid #ccc;

    }

    .login-container::after{
        top: 5px;
        z-index: -2;
        -webkit-transform: rotateZ(-2deg);
         -moz-transform: rotateZ(-2deg);
          -ms-transform: rotateZ(-2deg);

    }

    .avatar{
        width: 100px;height: 100px;
        margin: 10px auto 30px;
        border-radius: 100%;
        /*border: 2px solid #aaa;*/
        background-size: cover;
    }

    .form-box input{
        width: 100%;
        padding: 10px;
        text-align: center;
        height:40px;
        border: 1px solid #ccc;;
        background: #fafafa;
        transition:0.2s ease-in-out;

    }

    .form-box input:focus{
        outline: 0;
        background: #eee;
    }

    .form-box input[type="text"]{
        border-radius: 5px 5px 0 0;
        text-transform: lowercase;
    }

    .form-box input[type="password"]{
        border-radius: 0 0 5px 5px;
        border-top: 0;
    }

    .form-box button.login{
        margin-top:15px;
        padding: 10px 20px;
    }

    .animated {
      -webkit-animation-duration: 1s;
      animation-duration: 1s;
      -webkit-animation-fill-mode: both;
      animation-fill-mode: both;
    }

    @-webkit-keyframes fadeInUp {
      0% {
        opacity: 0;
        -webkit-transform: translateY(20px);
        transform: translateY(20px);
      }

      100% {
        opacity: 1;
        -webkit-transform: translateY(0);
        transform: translateY(0);
      }
    }

    @keyframes fadeInUp {
      0% {
        opacity: 0;
        -webkit-transform: translateY(20px);
        -ms-transform: translateY(20px);
        transform: translateY(20px);
      }

      100% {
        opacity: 1;
        -webkit-transform: translateY(0);
        -ms-transform: translateY(0);
        transform: translateY(0);
      }
    }

    .fadeInUp {
      -webkit-animation-name: fadeInUp;
      animation-name: fadeInUp;
    }

</style>
