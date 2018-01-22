
import Vue from 'vue'

Vue.directive('color-show',{
    bind(el,binding){
      console.log(binding)
    }
})

Vue.directive('back-top',{
    inserted(el,binding){
       
        el.onclick=function(){
           
           document.documentElement.scrollTop = document.body.scrollTop = 0;
        }
    }
})