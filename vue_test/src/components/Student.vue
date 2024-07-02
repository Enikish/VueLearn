<template>
  <div id="Student">
    <h2>{{ name }}</h2>
    <h2>{{ age }}</h2>
    <button @click="sendStudentName">把学生名给app</button>
  </div>
</template>

<script>
export default {
    name: 'Student',
    data() {
        return {
            name: '张三',
            age: 19,
        }
    },
    methods: {
        sendStudentName(){
            // 发送信号
            this.$emit('atguigu', this.name)
        }
    },
    
}
</script>

<style>

</style>