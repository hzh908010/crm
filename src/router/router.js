import Vue from 'vue'
import Router from 'vue-router'
import index from '../components/index.vue'
import info from '../components/info/info.vue'
import mgr from '../components/mgr/mgr.vue'

Vue.use(Router)

const routes = [
    { path: '/', name: 'index', component: index },
    { path: '/info', name: 'info', component: info },
    { path: '/mgr', name: 'mgr', component: mgr },
]

export default new Router({
    routes
})