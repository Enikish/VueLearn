<template>
    <!-- 组件的结构 -->
    <div id="root">
        <h2>学生姓名:{{ name }}</h2>
        <h2>学生年龄:{{ age }}</h2>
        <button @click="showName">点我提示学生姓名</button>
    </div>

</template>

<script>
    // 组件交互相关的代码
    export default Vue.extend({
        name:'Student',
        data() {
            return {
                name: '张三',
                age: 18,
            }
        },
        methods: {
            showName(){
                alert(this.name)
            },
        },
    })
</script>

<style>
    /* 组件的样式i */
    .demo{
        background-color: purple;
    }
</style>