<template>
	
	<nav class="navbar navbar-expand navbar-light bg-light">
		<div class="collapse navbar-collapse mx-1">
			<ul class="navbar-nav mr-auto">
				<router-link
					to="/list"
					tag="li"
					class="nav-item"
				>
					<a class="nav-link">Araç Listesi</a>
				</router-link>
				<router-link 
					to="/operations"
					tag="li"
					class="nav-item"
				>
					<a class="nav-link">Araç İşlemleri</a>
				</router-link>
			</ul>
		</div>
	</nav>

</template>
<script>
	export default {
		
	}
</script>
<style scoped>

</style>