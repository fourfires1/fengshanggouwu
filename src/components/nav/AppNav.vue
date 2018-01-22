<template>
	<div class="app-nav">
	 	<!-----------------导航头部-------->
	 <div class="nav-header">
		 <div class="icon"></div>
		 <img src="../../assets/images/girl.png" alt="" />
		 <div class="headinfo">
		 	<li @click="toggleNav(),skip()" style="line-height: 34px; padding-left: 12px;"   >登录或注册</li>
		 </div>
	 </div>
	 
	 <!-------------------导航列表--------------------->
	 
	 <div class="nav-list">
	 	<ul>
	 		<li @click="turnout(list.name)"  v-for="list of lists" :key="list.id">{{list.content}}</li>
	 	</ul>
	 </div>
	 
	 
	</div>
	
</template>

<script>
	export default{
		name:'app-nav',
		props:['toggleNav'],
		data:function(){
			return {
				lists:[
				 {id:1,content:"商城首页",name:'main'},
				  {id:2,content:"电视购物",name:'shop'},
				   {id:3,content:"商品分类",name:'sort'},
				    {id:4,content:"热销产品",name:'hot'},
				     {id:5,content:"风尚惠",name:'fengshanghui'},
				      {id:6,content:"品牌直销",name:'brand'}
				]
			}
		},
		methods:{
			turnout(name){
				this.$router.push({name})
				this.toggleNav()
			},
			skip(){
				
				this.$router.push({path:'mine/login'})
			},
		}
	}
</script>

<style lang="scss">
  .app-nav{
  	width: 2.2rem;
    height: 100%;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 4000;
    background-color: #fff;
    animation-duration: 0.5s;
     /*  导航头部样式*/
      .nav-header{
      	    height: 100px;
		    background: url(https://m.fstvgo.com/Content/images/menu_bg.jpg) center center no-repeat;
		    background-size: cover;
		    position: relative;
		    overflow:hidden;
		    .icon{
		    	background-image: url(https://m.fstvgo.com/Content/images/icon/icon-crown-vip.png);
		    	    position: absolute;
				    top: 0.27rem;
				    left: 0.15rem;
				    height: 0.14rem;
				    width: 0.14rem;
				    display: block;
				    background-position: center center;
				    background-size: contain;
				    background-repeat: no-repeat;
		    }
		    
		     img{
		     	display: block;
		     	width: 0.45rem;
		     	height: 0.45rem;
                margin-top: 0.38rem;
                margin-left: 0.1rem;
                border-radius: 50%;
                position: absolute;
                z-index: 600;
                border: 2px solid #FFFFFF;
		     }
		     .headinfo{
		     	    background-color: rgba(255,255,255,0.8);
				    display: block;
				    position: absolute;
				    right: 0;
				    top: 38px;
				    height: 0.44rem;
				    width: 1.84rem;
				    z-index: 500;
				    box-sizing: border-box;
				    color: #333;
				    font-size: 10px;
				    line-height: 16px;
				    padding: 4px 0 4px 24px;
				    a{
				    	color: #000;
				    	text-decoration: none;
				    }
		     }
		     
      }	
    /*  导航列表样式*/
   .nav-list{
       width: 2.2rem;
       height: 2.46rem;
       padding-left: 0.11rem;
		    ul{
		    	  li{
		    	  	width: 1.98rem;
		    	  	height: 0.41rem;
		    	    border-bottom: 1px solid #d7d7d7;
				    color: #555;
				    text-align: center;
				    display: block;
				    line-height: 40px;
				    font-size: 13px;
		    }
	  }
		   
   }
}
  
  
</style>