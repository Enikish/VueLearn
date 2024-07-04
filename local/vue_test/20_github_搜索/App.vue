<template>
    <div id="container">
        <Search></Search>
        <List></List>
    </div>
</template>

<script>
import List from './components/List.vue'
import Search from './components/Search.vue'
export default {
    name: 'App',
    components:{
        List: List,
        Search: Search,
    }
}
</script>
