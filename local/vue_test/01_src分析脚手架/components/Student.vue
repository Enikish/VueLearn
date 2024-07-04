<template>
  <div class="demo">
    <hr>
    <h1 @click="showName">{{ msg }}</h1>
    <h2>学生姓名:{{ name }}</h2>
    <h2>学生性别:{{ sex }}</h2>
    <h2>学生年龄:{{ myAge }}</h2>
    <button @click="addAge">点击年龄+1</button>
  </div>
</template>

<script>
// 引入mixin
import { mixin } from '../mixin';
export default {
    name: 'Student',
    data() {
        return {
            msg: '这是一个学生',
            // props的值不能改变，但是可以通过代理方式修改最终显示出的值
            myAge: this.age,
        }
    },
    methods:{
        addAge(){
            this.myAge++;
            console.log(this.age);
        }  
    },
    // 使用了props属性后, 原本data里填的数据就无效了
    // props:['name', 'sex', 'age'], //简单接收

    // 接收同时进行类型校验
    // props:{
    //     name: String,
    //     sex: String,
    //     age: Number,
    // }

    props:{
        name:{
            type: String,
            required: true,
        },
        age:{
            type: Number,
            required: true,
        },
        sex:{
            type: String,
            required: true,
        }
    },

    mixins:[mixin]
}
</script>

<style scoped>
    .demo{
        background-color: orange;
    }
</style>