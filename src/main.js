import Vue from 'vue'   //引入vue 
import resource from'vue-resource'  //引入vue-resource
import echarts from 'echarts'
import store from './store/index.js'    //引入 store
import ElementUI from'element-ui'   //引入element-ui
import 'element-ui/lib/theme-chalk/index.css'     // 引入element-ui的css样式表
import router from './router/router.js'
import App from './App.vue'           // 引入app 组件

//把echarts添加到vue实例中
Vue.prototype.$echarts = echarts
Vue.use(resource)
Vue.use(ElementUI);


//判断用户有没有登录
//拦截器
Vue.http.interceptors.push((request,next)=>{
  //设置token请求头
  if(localStorage.token){
    //设置token请求头
    Vue.http.headers.common['Authorization'] = localStorage.token
    }else{
    location.href = './login.html'
    }
    next((response)=>{
      if(response.status == 401){
        location.href = './login.html'
      }
      return response
    })
})


new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})
