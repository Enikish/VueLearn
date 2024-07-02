<template>
    <div>
      <h2 v-text="msg" ref="title"></h2>
      <School :getSchoolName="getSchoolName"></School>
      <Student v-on:atguigu="getStudentName"/>
  
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
        getSchoolName(name){
            console.log('收到学校名:', name);
        },
        getStudentName(name){
            console.log('log被调用了', name);
        }
      }
      
  }
  </script>
  
  <style>
  
  </style>