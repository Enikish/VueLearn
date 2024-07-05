<template>
  <div class="category">
    <h3>{{ title }}</h3>
    <!-- 定义一个插槽, 等待组件使用者进行填充 -->
    <slot name="center">当没有传递具体结构时, 作为默认值</slot>
    <slot name="footer"></slot>
    
  </div>
</template>

<script>
export default {
    name: 'Category',
    props:['listData', 'title'],
}
</script>

<style>
    .category{
        background-color: skyblue;
        width: 200px;
        height: 300px;
    }

    h3{
        text-align: center;
        background-color: orange;
    }

    img{
        width: 100%;
    }
    
</style>