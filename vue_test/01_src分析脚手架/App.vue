<template>
  <div>
    <!-- ref属性
        1.被用来给元素或子组件注册引用信息
        2.应用在html标签上获取的是真是DOM元素，应用在组件标签上是组件实例对象
        3.使用方式：
        标识 <h1 ref="xxx"></h1>
        获取 this.$refs.xxx
     -->
    <h2 v-text="msg" ref="title"></h2>
    <button @click="showDOM">点击获取上方元素的DOM</button>
    <School></School>

    <Student name="张三" :age="20" sex="男"/>
    <Student name="李四" :age="19" sex="女"/>

  </div>
</template>

<script>
import School from './components/School.vue';
import Student from './components/Student.vue';
export default { 
    name: 'App',
    data(){
        return{
            msg:'欢迎',
        }
    },
    components:{
        School:School,
        Student:Student,
    },
    methods:{
        showDOM(){
            // 通过ref属性获取到元素的真实DOM
            console.log(this.$refs.title);
        }
    }
}
</script>

<style>

</style>