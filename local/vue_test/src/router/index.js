// 该文件专门用于创建整个应用的路由
import VueRouter from "vue-router";

import About from '../pages/About.vue'
import Home from '../pages/Home.vue'
import News from '../pages/News.vue'
import Message from '../pages/Message.vue'
import Detail from '../pages/Detail.vue'

// 创建一个路由器
export default new VueRouter({
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
            path: '/Home',
            component: Home,
            children:[
                {
                    path: 'news',
                    component: News,
                },
                {
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
            ]
        },
    ]
})


