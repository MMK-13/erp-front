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
	fullname: (state) => state.user.data.firstname + ' ' + state.user.data.lastname,
}

const mutations = {
	SET_USER_INFO: (state, data) => {
		state.user.data = data
	},
	CONNECTED: (state) => {
		state.user.isLogged = true
	},
	SET_USERNAME: (state, username) => {
		state.user.data.username = username
	},
}

const actions = {
	setConnected: (store, data) => {
		store.commit('CONNECTED')
		store.commit('SET_USER_INFO', data)
	},
	setUsername: (store, username) => store.commit('SET_USERNAME', username),
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
