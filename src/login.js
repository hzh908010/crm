import Vue from 'vue'  //引入vue 
import resource from 'vue-resource';
import ElementUI from 'element-ui';   //引入element
import 'element-ui/lib/theme-chalk/index.css';
import login from './login.vue'  //引入login vue
Vue.use(resource);
Vue.use(ElementUI);

new Vue({
    el: '#app',
    render: h => h(login)
})
