<template>
  <div class="contact">
    <div class="container">
    <h1>{{ title }}</h1><br>
      <div class="row text-center">
        <div class="col-sm-3 col-xs-6 first-box">
            <h1><span class="glyphicon glyphicon-earphone"></span></h1>
            <h3>Phone</h3>
            <p>+880-1700-987654</p><br>
        </div>
        <div class="col-sm-3 col-xs-6 second-box">
            <h1><span class="glyphicon glyphicon-home"></span></h1>
            <h3>Location</h3>
            <p>1036 Gulshan Road</p><br>
        </div>
        <div class="col-sm-3 col-xs-6 third-box">
            <h1><span class="glyphicon glyphicon-send"></span></h1>
            <h3>E-mail</h3>
            <p>info@home</p><br>
        </div>
        <div class="col-sm-3 col-xs-6 fourth-box">
          <h1><span class="glyphicon glyphicon-leaf"></span></h1>
            <h3>Web</h3>
            <p>Site Link Goes Here</p><br>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'contact',
  data () {
    return {
      title: 'Contact Info'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.first-box{padding:10px;background:#9C0;}
.second-box{padding:10px; background:#39F;}
.third-box{padding:10px;background:#F66;}
.fourth-box{padding:10px;background:#6CC;}
</style>
