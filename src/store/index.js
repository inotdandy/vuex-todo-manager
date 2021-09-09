import Vuex from 'vuex'
import todos from './modules/todos'

import Vue from 'vue'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        todos
    }
})