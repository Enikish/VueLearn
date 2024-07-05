import Vue from "vue";
import store from './store'
import App from "./App.vue";

Vue.config.productionTip = false;


new Vue({
    store,
    beforeCreate(){
        Vue.prototype.$bus = this // 创建bus
    },
    render: h => h(App),
}).$mount('#root');