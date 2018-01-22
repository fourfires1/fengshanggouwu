<template>
    <div class="app-brand app-box">
    	 <div class="list">
        	<div class="pro" v-for="s in lists" >
        		<img :src="s.AdImage1" alt="" />
		  
		    </div>
        	
        </div>
    	  
    	  <app-foot></app-foot>
    </div>
</template>

<script>
	import AppFoot from "../main/AppFoot"
	
	import Vue from "vue"
	import axios from "axios"
	
	export default{
		name:'app-brand',
		components:{
		  AppFoot
		},
		data(){
			return{
				lists:[],
				
			}
		},
		methods:{
			getData(){
				
				axios.get('https://m.fstvgo.com/Service.ashx?method=GetSupplierList&pageSize=10&currentPage=1')
				.then((response)=>{
					console.log(response)
//					console.log(response.SupplierName)
					this.lists=(response.data)
				})
			
			},
			
			
		},
		
		
		created(){
			this.getData()
		}
	}
</script>

<style lang="scss" scoped>
   .app-brand{
   	background: #eee;
/*   	padding-top:20px;*/
   	      .list{
		display: flex;
		justify-content:space-between;
		align-items: center;
		flex-wrap: wrap;
		
	    }
		.pro{
			
			border-bottom: 1px solid #eee;
		    background-color: #fff;
		    /*width: 45%;*/
		    /*height:2.52rem;*/
		    /*background: #337AB7;*/
		   
		      img{
		      	width: 1.84rem;
		      	height: 2.65rem;
		      }
		      p{
		      	text-align: center;
		      }
		}
   }
</style>