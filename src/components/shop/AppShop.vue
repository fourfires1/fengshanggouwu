<template>
	<div class="app-shop app-box">
		<app-shopitem v-for="(s,i) in ScareBuyingItemList1s" :s="s":key="i" :close='close'></app-shopitem>
		<app-foot></app-foot>
       
	</div>
</template>

<script> 
	import AppFoot from "../main/AppFoot"
	import axios from 'axios'
   import { Indicator } from 'mint-ui';
   
	import AppShopitem from "./AppShopitem"
	export default{
		name:'app-shop',
		components:{
			AppShopitem,AppFoot
		},
		data(){
			return{
				ScareBuyingItemList1s:[]
			}
		},
			beforeCreate(){
			Indicator.open({
				  text: '加载中...',
				  spinnerType: 'fading-circle'
              });    
	},
		methods:{
			getFilms(){
		
				let that = this
				axios.get('https://m.fstvgo.com/Service.ashx',{
					params:{method:'GetScareBuyingItemList'}
				}).then((response)=>{
	  				console.log(response.data.ScareBuyingItemList1)
				that.ScareBuyingItemList1s=(response.data.ScareBuyingItemList1)
	 
	  			})
			},
			close(){
				 Indicator.close()
			}
		},
		created(){
			this.getFilms() 	
		}
		
	}
</script>

<style>
	
	
</style>