<template>
    <div>
      <h2 ref="title">{{ msg }} 学生姓名是:{{ studentName }}</h2>
      <School :getSchoolName="getSchoolName"></School>
      <!-- @click.native表示当前的click是原生的绑定事件，不添加.native就会认为是自定义事件 -->
      <Student v-on:atguigu="getStudentName" @click.native="show"/>
  
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
              studentName: '',
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
            this.studentName = name;
        },
        show(){
            alert(123);
        }
      }
      
  }
  </script>
  
  <style>
  
  </style>