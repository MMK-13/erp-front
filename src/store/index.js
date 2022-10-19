import { createStore } from 'vuex'

const state = {
	user: {
		isLogged: false,
		data: {}
	}
}

const getters = {
	isConnected: (state) => state.user.isLogged,
	userData: (state) => state.user.data,
}

const mutations = {
	SET_USER_INFO: (state, data) => {
		state.user.data = data
	},
	CONNECTED: (state) => {
		state.user.isLogged = true
	}
}

const actions = {
	setConnected: (store, data) => {
		store.commit('CONNECTED')
		store.commit('SET_USER_INFO', data)
	}
}

export default createStore({
	state: state,
	getters: getters,
	mutations: mutations,
	actions: actions,
	modules: {
	},
	strict: true
})
