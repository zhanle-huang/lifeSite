import { createStore } from 'vuex'

export default createStore({
    state: {
        loginStatus: false,
        userInfo: {
            phone: '',
            token: ''
        }
    },
    mutations: {
        updateParams(state, arr) {
            // ¶ÔÏó
            if ((typeof arr[1]) === 'object') {
                let keys = Object.keys(arr[1]);
                if (keys.length > 1) {
                    for(let key in arr[1]) {
                        state[arr[0]][key] = arr[1][key]
                    }
                    return;
                }
            }
            state[arr[0]] = arr[1];
            console.log('state.loginStatus', state.loginStatus)
        }
    },
    actions: {},
    modules: {}
})
