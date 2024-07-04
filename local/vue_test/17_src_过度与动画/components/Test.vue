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
    }

    .hello-enter-active{
        animation: atguigu 1s;
    }

    .hello-leave-active{
        animation: atguigu 1s reverse;
    }

    @keyframes atguigu{
        from{
            transform: translateX(-100%);
        }
        to{
            transform: translateX(0px);
        }
    }
    
</style>