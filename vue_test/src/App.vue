<template>
  <div id="app">
    <div class="todo-container">
        <div class="todo-wrap">
            <MyHeader :addTodo="addTodo"/>
            <MyList :todos="todos" :checkTodo="checkTodo"/>
            <MyFooter/>
        </div>
    </div>
  </div>
</template>

<script>
import MyFooterVue from './components/MyFooter.vue'
import MyHeaderVue from './components/MyHeader.vue'
import MyListVue from './components/MyList.vue'


export default {
    name: 'App',
    data() {
        return {
            todos:[
                {id: '001', title: '吃饭', done: true},
                {id: '002', title: '睡觉', done: true},
                {id: '003', title: '开车', done: false},
            ]
        }
    },
    components:{
        MyHeader: MyHeaderVue,
        MyFooter: MyFooterVue,
        MyList: MyListVue,
    },
    methods:{
        addTodo(e){
            this.todos.unshift(e)
        },
        
        checkTodo(id){
            this.todos.forEach((todo)=>{
                if(todo.id === id) todo.done = !todo.done
            })
        }
        
    }
}
</script>
    

<style>
    /*base*/
    body{
        background: #fff;
    }

    .btn{
        display: inline-block;
        padding: 4px 2px;
        margin-bottom: 0;
        font-size: 14px;
        line-height: 20px;
        text-align: center;
        vertical-align: middle;
        cursor: pointer;
        box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.2);
        border-radius: 4px;
    }

    .btn-danger{
        color: #fff;
        background-color: #da4f49;
        border: 1px solid #bd362f;
    }

    .btn-danger:hover{
        color: #fff;
        background-color: #bd362f;
    }

    .btn:focus{
        outline: none;
    }

    .todo-container{
        width: 600px;
        margin: 0 auto;
    }

    .todo-container .todo-wrap{
        padding: 10px;
        border: 1px solid #ddd;
        border-radius: 5px;
    }
    
</style>