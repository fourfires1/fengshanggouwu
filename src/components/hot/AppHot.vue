<template>
	<div class="app-hot app-box">
		<div class="filter page-hide">
			<ul>
                <li class="active down" id="sale"><a data-bind="click:sortsale">销量<span class="icon icon-filter"></span></a></li>
                <li id="time"><a data-bind="click:sorttime">上架时间<span class="icon icon-filter"></span></a></li>
                <li id="price"><a data-bind="click:sortprice">价格<span class="icon icon-filter"></span></a></li>
                <li class="condition"><a data-bind="click:filtershow">筛选<span class="icon icon-filter-down"></span></a></li>
           </ul>
        </div>
        
       	<hotList :lists="lists" ></hotList>
       	
  
		<app-foot></app-foot>
	</div>
</template>

<script>
	import AppFoot from "../main/AppFoot"
	import hotList from "./hotList"
	import axios from "axios"
	export default{
		name:'app-hot',
		components:{
		  AppFoot,hotList
		},
		data(){
			return{
				lists:[]
			}
		},
		methods:{
			getData(){
				
				axios.get('https://m.fstvgo.com/Service.ashx?method=GetItemClassList')
				.then((response)=>{
					console.log(response.data)
					console.log(response.data[0].DefaultPicture)
					this.lists=(response.data)
				})
			
			}
		},
		mounted(){
			this.getData()
		}
	}
</script>

<style lang="scss" scoped>
	
    .app-hot{
    	width: 100%;
    	height: 100%;
    	.filter {
			    position: fixed;
			    top: 42px;
			
			    width: 100%;
			    height: 34px;
			    background-color: #fff;
			    float: left;
			    z-index: 1100;
			-webkit-transition: all 0.5s ease;
			    -moz-transition: all 0.5s ease;
			    -ms-transition: all 0.5s ease;
			    -o-transition: all 0.5s ease;
			    transition: all 0.5s ease;
			  
    	  ul{
    	  	    width: 100%;
                
                list-style-type: none;
			    padding: 0;
			    margin: 0;
			    box-sizing: border-box;
			    
			    margin-top: 0;
                margin-bottom: 10px;
                display: block;
			    list-style-type: disc;
			    -webkit-margin-after: 1em;
			    -webkit-margin-start: 0px;
			    -webkit-margin-end: 0px;
			    
			     li{
			     	width: 25%;
				    border-right: 1px solid #d8d5d5;
				    float: left;
				    height: 34px;
				    border-bottom: 1px solid #eee;
				     list-style-type: none;
				    padding: 0;
				    margin: 0;
				    box-sizing: border-box;
				    display: block;
				    text-align: -webkit-match-parent;
				    
				    align-content: center;
				    flex:1;
				       a{
				       	    display: block;
						    width: 100%;
						    text-align: center;
						    line-height: 34px;
						    color: #000;
						    opacity: 0.5;
						    text-decoration: none;
                           color: #000;
                           background-color: transparent;
                            .icon{
                            	    background-position: bottom;
                            	    display: inline-block;
								    height: 14px;
								    width: 14px;
								    margin: -4px 0 0 2px;
								    vertical-align: middle;
								    background-size: 100% 200%;
								    background-position: top;
								    background-position: center center;
								    background-size: contain;
								    background-repeat: no-repeat;
								    background-position: center center;
								    background-size: contain;
								    background-repeat: no-repeat;
                            }
                            .icon-filter {
    background-image: url(https://m.fstvgo.com/Content/images/icon/icon-filter.png);
}
				       }
			     }
    	  }
    	 }
    }
</style>