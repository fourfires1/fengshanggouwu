<template>
	<div class="hotList">
		<div class="list">
        	<div class="pro" v-for="s in lists" >
        		<img :src="s.DefaultPicture" alt="" />
		      <p>{{s.ItemName}}</p>
		      <p>￥{{s.SalePrice}}.00</p>
		     
		    </div>
        	
        </div>
		
	</div>
</template>
	
<script>
	export default {
		name:'hotList',
		props:['lists'],
		selections:[]
	}
</script>

<style lang="scss" scoped>
	.hotList{
		padding-top:20px;
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
		    height:2.52rem;
		    /*background: #337AB7;*/
		   
		      img{
		      	width: 1.81rem;
		      	height: 1.81rem;
		      }
		      p{
		      	text-align: center;
		      }
		}
	}

</style>