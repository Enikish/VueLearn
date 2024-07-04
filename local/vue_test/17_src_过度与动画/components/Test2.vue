<template>
    <div>
      <button @click="isShow = !isShow">显示/隐藏</button>
      <!-- 如果transition标签没有加name属性, 需要用v-enter-active或者v-leave-active
          如果有name属性, 例如hello, 那就使用hello-enter-active或者hello-leave-active
       -->
      <transition name="hello" :appear="true">
          <h1 v-show="isShow" >你好啊！</h1>
      </transition>
      
    </div>
  </template>
  
  <script>
  export default {
      name: 'Test',
      data() {
          return {
                  isShow: true
          }
      },
  }
  </script>
  
  <style>
      h1{
          background-color: orange;
          transition: 0.5s linear;
      }
      
      /* 进入的起点 离开的终点 */
      .hello-enter, .hello-leave-to{
        transform: translateX(-100%);
      }

      /* 进入的终点 离开的起点 */
      .hello-enter-to, .hello-leave{
        transform: translateX(0);
      }

  </style>