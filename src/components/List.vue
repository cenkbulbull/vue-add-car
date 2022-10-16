<template>
	<div  class="container-fluid mt-3">
		<div v-if="!getList.length >0" class="alert alert-primary w-100 mx-auto text-center">Henüz araç işlemi yapılmadı</div>
		<div v-if="getList.length >0" class="table-responsive">
			<table  class="table table-striped w-75 mx-auto">
				<thead>
					<tr>
						<th scope="col">#</th>
						<th scope="col">Marka</th>
						<th scope="col">Model</th>
						<th scope="col">Kasa</th>
						<th scope="col">Durum</th>
						<th scope="col">Yakıt</th>
						<th scope="col">Vites</th>
						<th scope="col">Yıl</th>
						<th scope="col">Renk</th>
						<th scope="col">Km</th>
					</tr>
				</thead>
				<tbody>
					<tr v-for="(arac,index) in getList">
						<th scope="row">{{index + 1}}</th>
						<td>{{arac.marka}}</td>
						<td>{{arac.model}}</td>
						<td>{{arac.kasa}}</td>
						<td>{{arac.durum}}</td>
						<td>{{arac.yakıt}}</td>
						<td>{{arac.vites}}</td>
						<td>{{arac.yıl}}</td>
						<td style="color:white; width:40px" :style="{backgroundColor:arac.renk}">{{arac.renk}}</td>
						<td>{{arac.km}}</td>
					</tr>
				</tbody>
			</table>
		</div>

		<!--<p>{{getList}}</p>-->
	</div>

</template>
<script>

	import {eventBus} from "../main"
	import { mapGetters } from "vuex";

	export default{
		computed:{
			...mapGetters({
				getList: "getList",
			}),
		}
	}
</script>
<style>
	
</style>