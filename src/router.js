import Vue from "vue"
import VueRouter from "vue-router"

import Operations from "./components/Operations"
import List from "./components/List"



Vue.use(VueRouter)

export const router = new VueRouter({
	routes :[
		{path:"/operations", component:Operations},
		{path:"/list", component:List},
		{path:"*", redirect:"/operations"},
	],
	mode:"history"
})