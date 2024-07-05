<template>
    <div class="container">
        <Category title="游戏">
            <template scope="atguigu">
                <ul slot="center">
                    <li v-for="(g, index) in atguigu.games" :key="index">{{ g }}</li>
                </ul>
            </template>
        </Category>

        <!-- 使用作用域插槽就可以使用不同的结构，但是数据是相同的 -->
        <Category title="游戏">
            <template scope="atguigu">
                <ol slot="center">
                    <li v-for="(g, index) in atguigu.games" :key="index" style="color: red;">{{ g }}</li>
                </ol>
            </template>
        </Category>
    </div>
</template>

<script>
import Category from './components/Category.vue'
export default {
    name: 'App',
    components:{
        Category: Category,
    },
    
}
</script>

<style>
    .container{
        display: flex;
        justify-content: space-around;
    }
</style>
