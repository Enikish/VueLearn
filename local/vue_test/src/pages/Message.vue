<template>
  <div>
    <h2>message</h2>
    <div>
        <ul>
            <li v-for="message in messageList" :key="message.id">
                <!-- <a href="/message">{{ message.title }}</a> -->
                <!-- 跳转路由并携带query参数 -->
                <!-- <router-link :to="`/home/message/detail?id=${message.id}&title=${message.title}`">
                  {{ message.title }}
                </router-link> -->
                <router-link :to="{
                    // path: '/home/message/detail',
                    name: 'xiangqing', // 在路径过长时简化路径
                    // query: {
                    //     id: message.id,
                    //     title: message.title,
                    // },
                    // 使用params后不能使用path，只能使用name
                    params: {
                        id: message.id,
                        title: message.title,
                    }
                }">
                    {{ message.title }}
                </router-link>
            </li>
        </ul>
        <hr>
        <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
name: 'Message',
data() {
    return {
        messageList:[
            {id: '001', title: '消息001'},
            {id: '002', title: '消息002'},
            {id: '003', title: '消息003'},
        ]
    }
},
}
</script>

<style>

</style>