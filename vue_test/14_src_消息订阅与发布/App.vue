<template>
    <div>
        <h2 ref="title">{{ msg }}</h2>
        <School/>
        <Student/>
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
      
  }
  </script>
  
  <style>
  
  </style>