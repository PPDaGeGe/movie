import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        title: '电影',
        color: 'pink'
    },
    mutations: {
        change(state, arg) {
            this.state.title = arg.title;
            this.state.color = arg.color;
            // console.log(arg)
        }
    },
    actions: {},
    modules: {}
})