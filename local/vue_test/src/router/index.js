// 该文件专门用于创建整个应用的路由
import VueRouter from "vue-router";

import About from '../pages/About.vue'
import Home from '../pages/Home.vue'

// 创建一个路由器
export default new VueRouter({
    routes:[
        {
            path: '/about',
            component: About,
        },
        {
            path: '/home',
            component: Home,
        }
    ]
})


