<template>
	<div class="col-md-4" >
		<div class="thumbnail">
			<img class="img" src="http://www.lifeprint.com/asl101/images-signs/my.gif">
			<div class="caption">
				<h3>{{ product.name }}</h3>
				<p>{{ product.price }}</p>

				<hr>
				<p> <a href="#" class="btn btn-default">Wish list</a> </p>
				<p> <a href="#" class="bts btn-success">Buy</a> </p>
			</div>	
		</div>
	</div>
</template>




<script >

	
	export default{
		props:['product']

	}
</script>

<style >
img{
	height: 50px;
	width: 50px
	}
</style>