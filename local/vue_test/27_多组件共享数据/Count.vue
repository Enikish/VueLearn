<template>
  <div class="category">
    <h1>当前求和为: {{ sum }}</h1>    
    <h1>当前求和放大十倍为: {{ $store.getters.bigSum }}</h1>    
    <select v-model.number="n">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
    </select>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementOdd">当前求和为奇数再加</button>
    <button @click="incrementWait">等一等再加</button>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
export default {
    name: 'Count',
    data() {
        return {
            n: 1, // 用户选择的数字
        }
    },
    methods:{
        increment(){
            this.$store.dispatch('jia', this.n);
        },
        decrement(){
            this.$store.dispatch('jian', this.n);
        },
        incrementOdd(){
            if(this.$store.state.sum % 2){
                this.$store.dispatch('jia', this.n);
            }
        },
        incrementWait(){
            setTimeout(()=>{
                this.$store.dispatch('jia', this.n);
            }, 500)
        },
    },
    computed:{
        ...mapState({'sum': 'sum', 'school': 'school', }) // 此处的...语法和python的元组或字典解包一样
    },
}
</script>

<style>
    button{
        margin-left: 5px;
    }


</style>