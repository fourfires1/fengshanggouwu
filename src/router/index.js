import Vue from 'vue'
import Router from 'vue-router'
import AppMain from '../components/main/AppMain.vue'
import AppShop from '../components/shop/AppShop'
import AppSort from '../components/sort/AppSort'
import AppHot from '../components/hot/AppHot'
import AppFengshanghui from '../components/fengshanghui/AppFengshanghui'
import AppBrand from '../components/brand/AppBrand' 
import AppMine from '../components/mine/AppMine'
import AppLogin from '../components/mine/AppLogin'
import AppPersonal from '../components/mine/AppPersonal'

//import AppReigister from '../components/reigister/AppReigister'
Vue.use(Router)





const routes = [
  {path:'',redirect:'/main'},
  {path:'/main',name:'main',component:AppMain},
  {path:'/shop',name:'shop',component:AppShop},
  {path:'/sort',name:'sort',component:AppSort},
  {path:'/hot',name:'hot',component:AppHot},
  {path:'/fengshanghui',name:'fengshanghui',component:AppFengshanghui},
  {path:'/brand',name:'brand',component:AppBrand},
  {path:'/mine',name:'mine',component:AppMine,children:[
      {path:'',redirect:to=>{ 			
  			//判断是否登陆
  		
  			if(!localStorage.user_info){
  			
  				return {name:'login'}
  			}else{
  			
  				//vuex里的同步
  				store.commit("changeUserInfo",JSON.parse(localStorage.user_info))
  				return {name:'personal'}
  			}
  			
  		}},  		
       {path:'login',name:'login',component:AppLogin},
       {path:'personal',name:'personal',component:AppPersonal}
  ]},
  
//{path:'/reigister',name:'reigister',component:AppReigister},
{path:'**',redirect:'/main'},
]   



const router = new Router({
	routes,
})

export default router