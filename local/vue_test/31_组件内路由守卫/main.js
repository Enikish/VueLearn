import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;
import VueRouter from "vue-router";
import router from './router/index'

Vue.use(VueRouter);

new Vue({
    router,
    render: h => h(App),
}).$mount('#root');