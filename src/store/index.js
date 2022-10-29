import { createStore } from 'vuex'

const state = {
	user: {
		isLogged: false,
		data: {}
	},
	notification: {
		show: true,
		type: '',
		text: ''
	},
}

const getters = {
	isConnected: (state) => state.user.isLogged,
	userData: (state) => state.user.data,
	fullname: (state) => state.user.data.firstname + ' ' + state.user.data.lastname,
	getNotification: (state) => state.notification,
}

const mutations = {
	SET_USER_INFO: (state, data) => {
		state.user.data = data
	},
	CONNECTED: (state) => {
		state.user.isLogged = true
	},
	HELLO_MESSAGE: (state) => {
		state.notification = {
			show: true,
			type: 'done',
			text: 'Bienvenue ' + state.user.data.firstname + ' ' + state.user.data.lastname,
		}
	},
	DISCONNECTED: (state) => {
		state.user.isLogged = false
		state.user.data = {}
	},
	SET_USERNAME: (state, username) => {
		state.user.data.username = username
	},
	RESET_NOTIFICATION: (state) => {
		state.notification = {
			show: false
		}
	}
}

const actions = {
	setConnected: (store, data) => {
		store.commit('CONNECTED')
		store.commit('SET_USER_INFO', data)
		store.commit('HELLO_MESSAGE')
	},
	setDisconnected: (store) => store.commit('DISCONNECTED'),
	setUsername: (store, username) => store.commit('SET_USERNAME', username),
	resetNotification: (store) => {
		store.commit('RESET_NOTIFICATION')
	},
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
