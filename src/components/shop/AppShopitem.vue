<template>
	<div class="app-shopitem" >
		<img v-lazy="s.DefaultPicture"/>
		<div class="info">
			<p>{{s.ItemName}}
			<p>直播时间：{{s.StartTime}}-{{s.EndTime}}</p>
			<p class="red">￥{{s.DiscountPrice}}</p>
		</div>
	</div>
</template>

<script>
	
	import { Lazyload } from 'mint-ui';
	export default{
		name:'app-shopitem',
		props:['s','close'],
	    mounted(){
	    	
	    	this.$parent.close();
	    }
//	    beforeDestroy(){
//	    	alert(1)
//	    	this.$parent.close();
//	    }
}
</script>


<style lang="scss" scoped>
.app-shopitem{
		padding: 0 10px;
		display: flex;
		border-bottom: 1px solid #ccc;
		img{
			width: 1rem;
			height: 1rem;
		}
		.info{
			padding-left: 15px;
			flex-grow: 1;
			.red{
				color: #E7213C;
			}
		}
	}
	
</style>