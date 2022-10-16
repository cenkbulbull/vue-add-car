import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
	state:{
		araçListesi:[]
	},
	getters: {
		getList(state){
			return state.araçListesi
		}
	},
	mutations:{
		addList(state,car){
			state.araçListesi.push(car)		
		}
	}
})