<template>
  <div id="Student">
    <h2>{{ name }}</h2>
    <h2>{{ age }}</h2>
    <button @click="sendStudentName">发送学生姓名</button>
  </div>
</template>

<script>
import PubSub from 'pubsub-js';
export default {
    name: 'Student',
    data() {
        return {
            name: '张三',
            age: 19,
        }
    },
    mounted(){
        // this.$bus.$emit('hello', this.name)
    },
    methods:{
        sendStudentName(){
            PubSub.publish('hello', 666)
        }
    },
    
}
</script>

<style>
    .student{
        background-color: pink;
        padding: 5px;
        margin-top: 30px;
    }
</style>