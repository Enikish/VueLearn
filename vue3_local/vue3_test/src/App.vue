<template>
  <h1>App组件</h1>
  <h2>姓名:{{ name }}</h2>
  <h2>年龄:{{ age }}</h2>
  <h2>工种:{{ job.type }}</h2>
  <h2>工资:{{ job.salary }}</h2>
  <button @click="sayHello">说话</button>
  <button @click="changeInfo">修改信息</button>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import { h } from 'vue'
import { ref, reactive } from 'vue';

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  setup(){
    // 数据, 使用ref函数声明为响应式, 使用reactive声明响应式对象或数组数据
    let name = ref('张三')
    let age = ref(18)
    let job = reactive({
      type: '前端',
      salary: '30k',
    })


    // 方法
    function sayHello(){
      alert(`我叫${this.name}, 我${age}岁了`)
    }

    function changeInfo(){
      name.value =  '李四'
      age.value = 19
      job.value.type = '后端'
      job.value.salary = '80k'
    }

    return {
      name,
      age,
      job,
      sayHello,
      changeInfo,
    }

    // 返回渲染函数
    // return ()=>h('h1', '尚硅谷')
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
