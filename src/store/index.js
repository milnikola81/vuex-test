import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        count: 1,
        title: ''
    },
    mutations: {
        increment(state) { // za sinhrone funkcije
            return state.count++
        }
    },
    getters: { // computed property za store
        getCountAsPercentage(state) {
            return state.count + '%'
        }
    },
    actions: { // za asinhrone funkcije
        incrementAfter100ms(context) {
            setTimeout(() => {
                context.commit('increment')
            }, 1000)
        },
        incrementAfterProvidedTime(context, milliseconds) {
            setTimeout(() => {
                context.commit('increment')
            }, milliseconds)
        }
    }
})

