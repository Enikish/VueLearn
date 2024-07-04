<template>
  <section class="jumbotron">
    <h3 class="jumbotron-heading">Search Github Users</h3>
    <div>
        <input type="text" placeholder="enter the name you search" v-model="keyWord">&nbsp;
        <button @click="searchUsers">Search</button>
    </div>
  </section>
</template>

<script>
import axios from 'axios';
export default {
    name: 'Search',
    data() {
        return {
            keyWord: '',
        }
    },
    methods:{
        searchUsers(){
            this.$bus.$emit('getUsers', {isFirst: false, isLoading: true,errMsg: '', users: []});

            axios.get(`https://api.github.com/search/users?q=${this.keyWord}`).then(
                response => {
                    console.log('成功');
                    this.$bus.$emit('getUsers', {isFirst: false, isLoading: false,errMsg: '', users: response.data.items});
                },
                error => {
                    console.log('失败', error.message);
                }
            )
        }
    }
}
</script>
