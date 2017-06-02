<template>
	<div class="col-md-3" >
		<div class="thumbnail">
			<img class="img" src="https://lh3.googleusercontent.com/j2IAlACor9RVWVbFNDs9mnnB6xiSGWTNBh48TrwRAKRf6uJF0BbQfYB5EH7dNB3s6pdydBRQHclBslHfyLt3ZucV7GJbnGm6zS9ynmi_3T68lq7KlMnGtWXGbmBVc39yr6lBIKvJmiocRegH0EAxaXWsEBCtX8Cgvf24lQyLFD2Fs4bEMIZvp-n_65N9k9GO8YQAYV0ortZSUD1fT3ngsNlwCX1-KsOz0JDBHHAkcbdNMcbr44W2ga9WwV7pZyXczhaFTOCc3mCJuPxozsS3BdoKCpdzSeP1-5otqUvpDp5q9vacdOUUokJdOGdWOrNyxJ6jlbDLRDnb3dZpw0_Wct02KsWVCPZvFQLZ9eafQRVls6ByaKgFikdt-rqGXx0CqkcRdM6cb8qdztjcMZIviI_1dgWEFD70qad8mhygNbmQo03pek1jFgja0F3B-Mpzg8A_pBCAXhvk_9xbIsxEVbiePNEmI4sBXEs0SCHoedpZ7A0cq-5MatlXiBMJsM0QGD5SNWJIBCNIHE2qgeKR3AtRCPljHsskTrizXgDUDSGsxETF3LL0UaRKxb9d6No3YnrI6ioUP-RqYj8=w200-h200-p-k-nu">
			<div class="caption">
				<h3>{{ product.name }}</h3>
				<p>{{ product.price }}</p>

				<hr>
				<a href="#" class="btn btn-default">Wish list</a>
				<a href="#" class="btn btn-success">Buy</a>
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
</style>