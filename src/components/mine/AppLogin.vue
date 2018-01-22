<template>
	<div class="app-login">
          
          
           <!--<div class="logo"><img src="https://m.fstvgo.com/Content/images/logo_login.png"></div>
           
           <div class="myinput" @submit.prevent = "login">
           
             
             <div class="myinputtop"><input  v-model="username"      type="text" id="Mobile" name="Mobile" data-bind="value:Mobile" placeholder="输入手机号" ></div> 
             -->
             <!--<div class="myinputcenter ">
             <input data-bind="value:imgVerifyCodeText" type="tel" id="SMSimgVerifyCode" name="imgVerifyCode" placeholder="图片验证码" class="valid">
             <img data-bind="attr:{src:provImgUrl},click:tabProvImgUrl" alt="Alternate Text" src="http://inner.fstvgo.com/Rest/ViewModel/Customer/ShowImage.aspx?VerifyKey=9783cfcb-8876-418b-94fd-0163e75bf746&amp;RelationId=1495510953&amp;MaxLength=4">
             </div>
             -->
             <!--<div class="myinputbottom">-->
             	<!--<input type="text" id="VerifyCode" name="VerifyCode" data-bind="value:VerifyCode" placeholder="请输入短信验证码">
             	<a data-bind="click:sendVerifyCode,disable:leftSeconds()>0,attr:{class:leftSeconds()>0?'btn btn-info no-margin btn-xs':'btn btn-success no-margin btn-xs'},text:leftSeconds() == 0 ? '获取验证码':$.format('获取验证码({0})', leftSeconds())" class="btn btn-success no-margin btn-xs">获取验证码</a>-->
             	<!--<input  v-model="password"   type="password" id="Mobile" name="Mobile" data-bind="value:Mobile" placeholder="输入密码" >-->
             	
             	
             <!--</div>-->
<!--             
             <div class="container loginbtn">
                    <a data-bind="click:savebindmobi" class="btn btn-success">登录</a>
                </div>-->
                
         
                
            <!--<div class="container links">
                    <a data-bind="attr:{href:regurl}" class="left" href="#/reigister">免费注册</a>
                    <a href="#/login" class="right">密码登录</a>
             </div>-->
             
             <!--<div class="container kefu-login">
                登录注册中遇到问题？请联系客服
                <a href="tel:021-52896553" class="color-green">
                    <span class="icon icon-headset"></span> 在线客服
                </a>
            </div>-->
          
          
       <!--</div>-->   
       
       
        <form @submit.prevent = 'login'>
        	<div class="form-group">
        		<input v-model="username" type="text" placeholder="输入手机号/邮箱"/>
        		<div class="input-bg"></div>
        	</div>
        	<div class="form-group">
        		<input v-model='password' type="password" placeholder="输入密码/验证码"/>
        		<div class="input-bg"></div>
        	</div>
        	<button type="submit" class="login-btn">
        		登陆
        	</button>
        </form>
    </div>
       
       
</div>
	
	
	
	
</template>


<script>
//	import {Toast} from "mint-ui"
//	export default {
//		name:'app-login',
//		data(){
//			return {
//				username:'',password:''
//			}
//		},
//		
//		methods:{
//			login(){
//				user_info:{}
//				let that = this
//				setTimeout(()=>{	 
//					 if(that.username!='123'||that.password!='456'){
//					 	Toast('登录失败')
//					 	return false;
//					 }
//					 Toast('登录成功')
//					  let data = {user_id:12345,username:that.username}
//					  
//					  that.$store.commit('changeUserInfo',data)
//					  thst.$router.replace({name:'personal'})
//				},500)
//			},
//			changeUserInfo(state,user_info){
//	  	     state.user_info = user_info
//	  	     localStorage.user_info = JSON.stringify(user_info)
//	       }
//		}
//	}

import bus from '../../modules/bus.js'
import {Toast} from 'mint-ui'
    export default {
        name:'app-login',
        data(){
        	return {
        		username:'',password:''
        	}
        },
       methods:{
//     	login(){
//     		let that = this
//     		setTimeout(()=>{
//     			if(that.username!='123'||that.password!='456') {
//     				Toast('登陆失败')
//     				return false;
//     			}
//     			Toast('登陆成功')
//     			let data = {user_id:12345,username:that.username}      			
//     			that.$store.commit('changeUserInfo',data)    
//     			
//     			that.$router.replace({name:'personal'})
//     		},500)
//     	}

     login(params){
			let that =this
			setTimeout(()=>{
				if(that.username!='123'||that.password!='456') {
       				Toast('登陆失败')
       				return false;
       			}
			
				Toast('登陆成功')
				let data={
					user_id:123456,username:that.username
				}
//				that.$store.commit('changeUserInfo',data) 
				that.$router.replace({name:'personal'})
			},500)
				
			}
     
       }
    }




</script>


<style lang="scss" scoped>
      /*.app-login{
	 	width:100%;
	 	height: 100%;
	 	 
	 	    .logo{
	 	  	    width: 1.60rem;
			    margin: 0 auto;
			    padding: 0.2rem 0 0.2rem 0;
	     
			     img{
		     	    display: block;
                    box-sizing: border-box;
                    width: 100%;
				    max-width: 100%;
				    height: auto;
				    margin: 0 auto;
				    border: none;
				    vertical-align: middle;
			     }
	 	  }
	.myinput{
	     	    width:100%;
	 	       height: 100%;
	 	  .myinputtop{
                display: block;
			    position: relative;
			    width: 3.55rem;  
			     margin: 0 auto;
			     padding: 3px 0;
			       input{
				       	background-color: #e5e5e5;
					    border: 1px solid #e5e5e5;
					    border-radius: 6px;
					    outline: none;
					    display: block;
					    color: #000;
					    font-size: 12px;
					    width: 100%;
					    height: 0.4rem;
					    box-sizing: border-box;
					    padding-left: 0.1rem;
			       }
	 	  }*/
	 	  /*.myinputcenter{
			    position: relative;
			    width: 3.75rem;
			    height: 0.6rem;  
			    display: flex;
			     justify-content: space-between;
			     align-items: center;
			     input{
				       	background-color: #e5e5e5;
					    border: 1px solid #e5e5e5;
					    border-radius: 6px;
					    outline: none;
					    display: block;
					    height: 0.4rem;
					    color: #000;
					    font-size: 12px;
					    width: 1.67rem;
					    box-sizing: border-box;
					    padding-left: 0.1rem;
					    display: block;
					    margin-left: 0.1rem;
			       }
			       img{
			       	display: inline-block;
			       	margin-right: 0.4rem;
			       	width: 1.20rem;
			       	height: 0.29rem;
			       }
	 	  }*/
	 	  /*.myinputbottom{
	 	  	width: 3.75rem;
		    height: 0.6rem;  
		    display: flex;
		     justify-content: space-between;
		     align-items: center;
		        input{
				       	background-color: #e5e5e5;
					    border: 1px solid #e5e5e5;
					    border-radius: 6px;
					    width: 3.55rem; 
					    outline: none;
					    display: block;
					    height: 0.4rem;
					    color: #000;
					    font-size: 12px;
					    box-sizing: border-box;
					    padding-left: 0.1rem;
					    display: block;
					    margin-left: 0.1rem;
			       }
			       a{
			       	width: 1.77rem;
			       	height: 0.4rem;
			       	line-height: 0.4rem;
			       	display: block;
			       	color: #FFFFFF;
			       	text-align: center;
			       background: #36a74c !important;
                   border: 1px solid #36a74c !important;
                   border-radius: 6px;
                   margin-right: 0.1rem;
			       }
	 	  }
	 	  .loginbtn{
	 	  	    padding: 0 10px;
			    max-width: 640px;
			    display: block;
			    box-sizing: border-box;
			    clear: both;
			    margin: 0 auto;
			    padding: 0;
			    background: #36a74c !important;
                border: 1px solid #36a74c !important;
              	width: 3.55rem; 
			    height: 0.4rem;
			    line-height: 0.4rem;
			    color: #FFFFFF;
			     border-radius: 6px;
			     text-align: center;
	 	  }  
	 	  .links{
	 	  	 padding: 0 10px;
	 	  	 width: 100%;
		    max-width: 640px;
		    box-sizing: border-box;
		    clear: both;
		    margin: 0 auto;
		    padding: 0;
		    display: flex;
		    justify-content: space-between;
		    align-items: center;
		       a{
		       	color:#000 ;
		       	margin-left: 0.1rem;
		       	margin-right: 0.1rem;
		       	margin-top: 0.1rem;
		       }
	 	  }
	 	  .kefu-login{
	 	  	text-align: center;
	 	  	    color: #333;
	 	  }
	 	}*/
	 /*}*/
	
	
	.app-login{
       
       form{
       		padding: 0.31rem 0.31rem 0;
       }
       
       
       .form-group{
       	margin: 30px 0 0;
    	position: relative;
    	
    		input{
    			/*display: block;
			    width: 3.55rem;
			    height: 0.4rem;
			    padding: 6px 12px;
			    font-size: 14px;
			    line-height: 1.42857143;
			    color: #555;
			    /*background-color: #fff;*/
			    /*background-image: none;
			    border: 1px solid #ccc;
			    border-radius: 4px;
			    -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);
			    box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);
			    -webkit-transition: border-color ease-in-out .15s, -webkit-box-shadow ease-in-out .15s;
			    -o-transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;
			    transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;
			    border: none;
			    background-color: transparent;
			    border-radius: 0px;
			    box-shadow: none;
			    outline: none;*/
			   background-color: #e5e5e5;
					    border: 1px solid #e5e5e5;
					    border-radius: 6px;
					    outline: none;
					    display: block;
					    color: #000;
					    font-size: 12px;
					    width: 100%;
					    height: 0.4rem;
					    box-sizing: border-box;
					    padding-left: 0.1rem;
    		}
    		
    		.input-bg{
    			/*position: absolute;
			    top: 20px;
			    height: 12px;
			    width: 100%;
			    border: solid #c4c4c4;
			    border-width: 0 1px 1px 1px;*/
    		}
       }
       
       .login-btn{
       	   width: 1.63rem;
       	   height: 0.4rem;
		    background-color: #36a74c;
		    color: #fff;
		    border: none;
		    border-radius: 36px;
		    margin-top: 45px;
		    padding: 8px 12px;
		    font-size: 15px;
		    outline: none;
		    display: block;
            margin-right: auto;
            margin-left: auto;
   

       }
       
    }

	
	
	
</style>