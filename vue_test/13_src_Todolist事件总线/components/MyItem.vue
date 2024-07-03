<template>
  <li>
        <label>
            <input type="checkbox" v-model="todo.done"/>
            <span>{{ todo.title }}</span>
        </label>
        <button class="btn btn-danger" @click="handleDelete(todo.id)">删除</button>
    </li>
</template>

<script>
export default {
    name: 'MyItem',
    props:['todo', ],
    methods:{       
        handleDelete(id){
            this.$bus.$emit('checkTodo', id)            
        },
    }
}
</script>

<style scoped>
    /* item */
    li{
        list-style: none;
        height: 36px;
        line-height: 36px;
        padding: 0 5px;
        border-bottom: 1px solid #ddd;
    }

    li label{
        float: left;
        cursor: pointer;
    }

    li button{
        float: right;
        display: none;
        margin-top: 3px;
    }
    
    li:before{
        content: initial;
    }

    li:last-child{
        border-bottom: none;
    }

    li:hover{
        background-color: lightgray;
    }

    li:hover button{
        display: block;
    }
    
</style>