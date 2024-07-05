<template>
  <div class="category">
    <h3>{{ title }}</h3>
    <!-- 定义一个插槽, 等待组件使用者进行填充 -->
    <slot :games="games">当没有传递具体结构时, 作为默认值</slot>
    <!-- 插槽绑定games，将games传给插槽的使用者 -->
  </div>
</template>

<script>
export default {
    name: 'Category',
    props:['listData', 'title'],
    data() {
        return {
            foods: ['火锅', '烧烤', '小龙虾', '牛排'],
            games: ['红警', '穿越火线', '劲舞团', '超级玛丽'],
            films: ['教父', '拆弹专家', '你好李焕英', '尚硅谷'],    
        }
    },
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