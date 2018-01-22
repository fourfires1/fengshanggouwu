<template>
	 <div class="app-header ">
	    <div class="nav square" @click="toggleNav">
  	     	 <i class="fa fa-navicon" style="padding-left: 5px;"></i>
  	     </div>
  	     <h1 class="logo" >
  	     	<img src="../../assets/images/logo.png">
  	     </h1>
  	     <div class="nav search " style="padding-right: 8px;"   @click="search">
  	     	<i class="fa fa-search" ></i>
  	     </div>
  	     <app-foot></app-foot>
	 </div>
</template>

<script>
	import AppFoot from "../main/AppFoot";
	import { Indicator } from 'mint-ui';
	export default{
		props:['toggleNav'],
		name:'app-header',
		components:{
		  AppFoot
		},
		methods:{
//			Indicator.open(),
//			Indicator.open('加载中...'),
//			Indicator.open({
//			  text: '加载中...',
//			  spinnerType: 'fading-circle'
//         }),
//         Indicator.close();
			search:function(){
				this.$router.push({path:'/sort'})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.app-header{
		    background-color: #fc4c65;
		    height: 0.42rem;
		    width: 100%;
		    display: block;
		    box-sizing: border-box;
		    position: fixed;
		    z-index: 1000;
		    top: 0;
		    left: 0;
		    display: flex;
		    justify-content:space-between;
		    align-items: center;
		    color: #FFFFFF;
		    margin-bottom: 0.42rem;
		     .nav{
		     	font-size: 25px;
		     	padding: 0 5px;
		     }
	}
</style>
