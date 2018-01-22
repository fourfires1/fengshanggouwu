<template>
	<div class="app-foot">
		<div class="two"  @click="main">
			<i class="fa fa-home"></i>
			<span>首页</span>
		</div>
		<div class="two">
			<i class="fa fa-cart-arrow-down" ></i>
			<span>购物车</span>
		</div>
		<div class="three" @click="shop">
			<i class="fa fa-shopping-basket" ></i>
			<span>进口货</span>
		</div>
		<div class="fore">
			<i class="fa fa-user-o" @click="login" ></i>
			<span>我的</span>
		</div>

	</div>
</template>

<script>
	export default {
		name: 'app-foot',
//		props:['login'],
		methods:{
			login:function(){
				this.$router.push({path:'mine/login'})
			},
			main:function(){
				this.$router.push({path:'/main'})
			},
			shop:function(){
				this.$router.push({path:'/shop'})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.app-foot {
		background-color: #fc4c65;
		position: fixed;
		bottom: 0;
		width: 100%;
		height: 0.42rem;
		z-index: 100;
		display: flex;
		justify-content: space-around;
		align-items: center;
		
		div{
			width: 0.93rem;
			height: 0.23rem;
			border-right: 1px solid #FFFFFF;
			text-align: center;	  
			.fa-home{
				font-size: 19px;
			}
			.fa-cart-arrow-down{
				font-size: 19px;
			}
		}
		.fore{
			 	border-right: 0;
			 }
		
		
		
		
	}
</style>