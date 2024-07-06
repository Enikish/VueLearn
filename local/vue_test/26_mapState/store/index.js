// 该文件用于创建vuex最为核心的store
import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

// 准备actions, 用于响应组件中的动作
const actions = {
    jia(context, value){
        context.commit('JIA', value);
    },
    jian(context, value){
        context.commit('JIAN', value);
    },
    
}

// 准备mutations, 用于操作数据
const mutations = {
    JIA(state, value){
        state.sum += value;
    },
    JIAN(state, value){
        state.sum -= value;
    },
}

// 准备getters 用于将state的数据加工
const getters = {
    bigSum(state){
        return state.sum * 10;
    }
}

// 准备state, 用于存储数据
const state = {
    sum: 0, //当前的和
}

// 创建Store
export default new Vuex.Store({
    actions: actions,
    mutations: mutations,
    state: state,
    getters: getters,
})
