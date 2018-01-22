<template>
	<div class="app-sort app-box">
		 <div class="sortleft">
		   <ul class="all" data-bind="foreach:ItemLevelFirst">
                    <li data-bind="attr:{class:ClassId==$root.CurClassId()?'active':''}" class="active"><a data-bind="html:ClassName,click:$parent.change">所有类别</a></li>
                </ul>
                <ul class="sor">
                    <li><a href="#Product/prolist/">热销产品</a></li>
                    <li id="brandid" data-bind="attr:{class:$root.CurClassId()==''?'active':''}" class=""><a data-bind="click:brandchange">品  牌</a></li>
                </ul>
		    
		 </div>
		 
		 <div class="sortright">
		 	<div class="pro-class-list">
		 		  <div class="pro-class">
                    <a data-bind="attr:{href:$root.ItemUrl($data)}" class="title" href="Index2.html#Product/prolist/category/数码家电/199"><span data-bind="html:ClassName">数码家电</span><span class="icon icon-arrow-right-grey"></span></a>
                    
                    <ul data-bind="foreach:$parent.LevelThird($data)">
                        <li><a class="interception" data-bind="html:ClassName,attr:{href:$root.ItemUrl($data)}" href="Index2.html#Product/prolist/category/日用电器/203">日用电器</a></li>
                    
                        <li><a class="interception" data-bind="html:ClassName,attr:{href:$root.ItemUrl($data)}" href="Index2.html#Product/prolist/category/数码影音/204">数码影音</a></li>
                    
                        <li><a class="interception" data-bind="html:ClassName,attr:{href:$root.ItemUrl($data)}" href="Index2.html#Product/prolist/category/电脑及周边/205">电脑及周边</a></li>
                    
                        <li><a class="interception" data-bind="html:ClassName,attr:{href:$root.ItemUrl($data)}" href="Index2.html#Product/prolist/category/手机/206">手机</a></li>
                    </ul>
                    
                    <div class="clear"></div>
                    </div>
                </div>
		 	
		 </div>

		<app-foot></app-foot>
	</div>
</template>

<script>
	import AppFoot from "../main/AppFoot"
	export default{
		name:'app-sort',
		props:['search'],
		components:{
		  AppFoot
		},
	
	}
</script>

<style lang="scss" scoped>
   .app-sort{
   	  width:100%;
   	  height: 100%;
   	  /*background: red;*/
   	  display: flex;
   	   .sortleft{
   	   	width: 1.25rem;
   	    height: 5.73rem;
   	    background: #eee;
   	     .all{
   	     	  padding: 0 10px;
   	     	    list-style-type: none;
			    padding: 0;
			    margin: 0;
			    box-sizing: border-box;
			    display: block;
			    li{
			    	  width: 1.05rem;
			    	  height: 0.5rem;
			    	  margin: 0 auto;
			    	   text-align: center;
			    	   border-bottom: 1px solid #E7213C;
			    	   list-style-type: none;    
			    }
   	      }
   	      .sor{
  				/*padding: 0 10px;*/
      	    	list-style-type: none;
				padding: 0;
				margin: 0;
				box-sizing: border-box;
				display: block;
				 margin-top: 0;
               margin-bottom: 10px;
                display: block;
			    list-style-type: disc;
			    -webkit-margin-before: 1em;
			    -webkit-margin-after: 1em;
			    -webkit-margin-start: 0px;
			    -webkit-margin-end: 0px;
			    /*-webkit-padding-start: 40px;*/
			        list-style-type: none;
			     li{
			     	height: 50px;
				    border-bottom: 1px solid #ccc;
				    padding: 10px 0;
				    list-style-type: none;
				    padding: 0;
				    margin: 0;
				    box-sizing: border-box;
				    display: block;
				    display: list-item;
                  text-align: -webkit-match-parent;
                  /*width: 1rem;*/
                  /*text-align: center;*/
                      a{
                      	 color: #888;
					    line-height: 30px;
					    display: block;
					    width: 100%;
					    text-align: center;
					    font-size: 12px; 
                              text-decoration: none;
					    text-decoration-line: none;
					    text-decoration-style: initial;
					    text-decoration-color: initial;
					     color: #000;
                         color: #337ab7;
                         text-decoration: none;
                         background-color: transparent;
                             color: #888;
					    line-height: 30px;
					    display: block;
					    width: 100%;
					    text-align: center;
					    font-size: 12px;
                      }
			     }
           }
   	      }
   	   .sortright{
   	   	 width: 2.5rem;
   	   	 height: 5.73rem;
   	   	 background: #fff; 
   	   	     div, img {
		    display: block;
		    box-sizing: border-box;
		      .pro-class {
			    display: block;
			    width: 100%;
			    background-color: #f4f4f4;
			    color: #000;
			    line-height: 30px;
			    padding: 5px 15px;
			    position: relative;
			    box-sizing: border-box;
			        .title{
			          display: block;
   	   	   	     	  width: 2.2rem;
   	   	   	     	  height: 0.3rem;
   	   	   	     	  background: pink;
   	   	   	     }
       }
        ul{
   	   	   	 width: 2.5rem;
   	   	   	 height: 1.12rem;
   	   	   	 background: red; 
   	   	   }
      }
    }
 }
    
</style>
	
	
	
	
	
	
