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
	modalVisibility: false,
}

const getters = {
	isConnected: (state) => state.user.isLogged,
	userData: (state) => state.user.data,
	fullname: (state) => state.user.data.firstname + ' ' + state.user.data.lastname,
	getNotification: (state) => state.notification,
	isModalVisibille: (state) => state.modalVisibility,
}

const mutations = {
	SET_USER_INFO: (state, data) => {
		state.user.data = data
	},
	CONNECTED: (state) => {
		state.user.isLogged = true
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
	},
	SET_MODAL_VISIBILITY: (state, visibility) => {
		state.modalVisibility = visibility
	},
	SET_NOTIFICATION: (state, notification) => {
		state.notification = notification
	},
}

const actions = {
	setConnected: (store, data) => {
		store.commit('CONNECTED')
		store.commit('SET_USER_INFO', data)
		store.commit('SET_NOTIFICATION', {
			show: true,
			type: 'done',
			text: 'Bienvenue ' + state.user.data.firstname + ' ' + state.user.data.lastname,
		})
	},
	setDisconnected: (store) => store.commit('DISCONNECTED'),
	setUsername: (store, username) => store.commit('SET_USERNAME', username),
	resetNotification: (store) => {
		store.commit('RESET_NOTIFICATION')
	},
	showModal: (store) => store.commit('SET_MODAL_VISIBILITY', true),
	hideModal: (store) => store.commit('SET_MODAL_VISIBILITY', false),
	savedSuccessfully: (store) => {
		store.commit('SET_NOTIFICATION', {
			show: true,
			type: 'done',
			text: 'Opération réussie !'
		})
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
