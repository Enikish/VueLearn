<template>
  <li>
        <label >
            <input type="checkbox" v-model="todo.done"/>
            <span v-show="!todo.isEdit">{{ todo.title }}</span>
            <input type="text" 
                :value="todo.title" 
                v-show="todo.isEdit" 
                @blur="handleBlur(todo, $event)"
                ref="inputTitle"
                >
        </label>
        <button class="btn btn-danger" @click="handleDelete(todo.id)">删除</button>
        <button class="btn btn-edit" @click="handleEdit(todo)" >编辑</button>
    </li>
</template>

<script>
import pubsub from 'pubsub-js';
export default {
    name: 'MyItem',
    props:['todo', 'deleteTodo'],
    methods:{
        handleDelete(id){
            // this.deleteTodo(id)
            pubsub.publish('deleteTodo', id)
        },
        handleEdit(todo){
            // todo.isEdit = true;
            if(todo.hasOwnProperty('isEdit')){
                todo.isEdit = true;
            }
            else{
                this.$set(todo, 'isEdit', true);
            }
            // $nextTick是在下一次DOM更新的时候调用回调
            this.$nextTick(()=>{
                this.$refs.inputTitle.focus();
            })
        },
        handleBlur(todo, e){
            todo.isEdit = false;
            if(!e.target.value.trim()) return alert('不应为空');
            this.$bus.$emit('updateTodo', todo.id, e.target.value);
        }
    },
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