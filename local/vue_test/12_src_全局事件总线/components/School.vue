<template>
  <div id="school">
    <h2>学校名称:{{ name }}</h2>
    <h2>学校地址:{{ address }}</h2>
  </div>
</template>

<script>
export default {
    name: 'School',
    data() {
        return {
            name: '尚硅谷',
            address: '北京昌平',
        }
    },
    mounted(){
        // 绑定自定义事件，在bus上绑定的事件可以在兄弟组件中触发和响应
        this.$bus.$on('hello', (data)=>{
            console.log('收到数据', data);
        })
    },
    beforeDestroy(){
        this.$bus.$off('hello')
    }
}
</script>

<style>
    .school{
        background-color: skyblue;
        padding: 5px;
    }
</style>