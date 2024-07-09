// 该文件专门用于创建整个应用的路由
import VueRouter from "vue-router";

import About from '../pages/About.vue'
import Home from '../pages/Home.vue'
import News from '../pages/News.vue'
import Message from '../pages/Message.vue'
import Detail from '../pages/Detail.vue'

// 创建一个路由器
const router = new VueRouter({
    // 一级路由
    routes:[
        {
            name: 'guanyu',
            path: '/About',
            component: About,
            // 二级路由
            children:[
                
            ]
        },
        {
            name: 'zhuye',
            path: '/Home',
            component: Home,
            children:[
                {
                    name: 'xinwen',
                    path: 'news',
                    component: News,
                    // 独享路由守卫, 只有前置路由守卫， 没有后置
                    beforeEnter(){
                        
                    }
                },
                {
                    name: 'xiaoxi',
                    path: 'message',
                    component: Message,
                    children:[
                        {
                            name: 'xiangqing',
                            // 使用name属性后需要改为这样的格式
                            path: 'detail/:id/:title',
                            component: Detail,
                            // 若此处props值为true, 会将所有的params转为props参数
                            props:true,
                        }
                    ]
                },
            ],
        },
    ]
})

// 全局前置路由守卫--初始化、每次路由切换时调用
router.beforeEach((to, from, next)=>{
    if(localStorage.getItem('school') === 'atguigu' && to.name === 'zhuye')
    next();
})

// 全局后置路由守卫
router.afterEach((to, from)=>{

})

export default router;
