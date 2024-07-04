<template>
  <div id="Student">
    <h2>{{ name }}</h2>
    <h2>{{ age }}</h2>
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
    mounted(){
        this.$bus.$emit('hello', this.name)
    }
    
}
</script>

<style>
    .student{
        background-color: pink;
        padding: 5px;
        margin-top: 30px;
    }
</style>