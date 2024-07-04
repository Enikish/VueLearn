<template>
    <div class="demo">
      <h2 @click="showName">学校名称:{{ name }}</h2>
      <h2>学校地址:{{ address }}</h2>
    </div>
  </template>
  
  <script>
  import { mixin } from '../mixin';
  export default {
      name: 'School',
      data(){
          return{
              name: '尚硅谷',
              address: '北京昌平',
          }
      },

      mixins:[mixin,]
  }
  </script>
  
  <!-- style 使用scoped属性 可以将style变为局部的，其他组件用相同的class名称不影响 -->
  <style scoped>
      .school{
          background-color: gray;
      }
      .demo{
        background-color: skyblue;
      }
  
  </style>