<template>
    <div>
        <div class="row">
            <Banner/>
        </div>
        <div class="row">
            <div class="col-xs-2 col-xs-offset-2">
                <div class="list-group">
                    <!-- <a href="" class="list-group-item" active>About</a>
                    <a href="" class="list-group-item">Home</a> -->

                    <!-- 使用router-link代替a标签 -->
                    <!-- 使用replace属性，替换当前历史记录，成为栈底，不能再回退操作 -->
                    <router-link 
                        replace
                        :to="{
                            name: 'guanyu',
                        }" 
                        class="list-group-item" active-class="active">
                        About
                    </router-link>
                    <router-link 
                        replace
                        to="/home" 
                        class="list-group-item" 
                        active-class="active">
                      Home
                    </router-link>
                    
                </div>
            </div>
            <div class="col-xs-6">
                <div class="panel">
                <div class="panel-body">
                    <!--router-view确定视图的位置-->
                    <router-view>
                    </router-view>
                </div>
                </div>
            </div>
        </div>
        <div class="col-xs-6">
            <div class="panel">
                <div class="panel-body">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Banner from './components/Banner.vue';
import About from './pages/About.vue';
import Home from './pages/Home.vue';

export default {
    name: 'App',
    components:{
        Banner,
        About,
        Home,
    }
}
</script>

<style>
</style>   