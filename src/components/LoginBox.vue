<template>
	<div style="margin-top: -240px;">
		<AlertInfo :text="alert.text" :type="alert.type" v-model:show="showAlert" />
		<CardComponent style="width: 420px;">
			<template #header>
				Connexion
			</template>
			<template #body>
				<InputField
					name="username"
					label="Username"
					type="text"
					placeholder="Username..."
					v-model:value="username" />
				<InputField
					name="password"
					label="Password"
					type="password"
					placeholder="Password..."
					v-model:value="password" />
			</template>
			<template #footer>
				<InputButton
					text="Envoyer"
					icon="login"
					classes="primary block"
					@click="submit" />
			</template>
		</CardComponent>
	</div>
</template>

<script>
	import InputField from './forms/InputField'
	import InputButton from './forms/InputButton'
	import AlertInfo from './forms/AlertInfo'
	import CardComponent from './forms/CardComponent'
	import { mapGetters, mapActions } from 'vuex'

	export default {
		name: 'LoginBox',
		components: {
			CardComponent,
			InputField,
			InputButton,
			AlertInfo,
		},
		data() {
			return {
				username: '',
				password: '',
				showAlert: false,
				alert: {
					text: '',
					type: '',
				}
			}
		},
		mounted() {
			if (this.isConnected){
				this.$router.push('/dashboard')
			}
		},
		watch: {
			isConnected(newValue) {
				if (newValue === true)
					this.$router.push('/dashboard')
			}
		},
		computed: {
			...mapGetters(['isConnected']),
		},
		methods: {
			...mapActions(['setConnected']),
			submit() {
				if (this.username && this.password) {
					fetch('http://erp.ru/user/login', {
						method: 'POST',
						body: JSON.stringify({
							username: this.username,
							password: this.password
						})
					}).then((response) => response.json())
					.then((data) => {
						this.showAlert = true
						if (!data.isLogged) {
							this.alert = {
								text: 'Vos identifiants incorrects !',
								type: 'dangerous'
							}
						} else {
							this.setConnected(data.user)
							this.alert = {
								text: 'Connexion réussie !',
								type: 'done'
							}
						}
					})
					.catch((error) => {
						this.showAlert = true
						this.alert = {
							text: 'Impossible de se connecter. Veuillez vérifier votre connexion internet !',
							type: 'dangerous'
						}
						console.log(error)
					})
				} else {
					this.showAlert = true
					this.alert = {
						text: 'Veuillez remplir les champs !',
						type: 'warning'
					}
				}
			},
		},
	}
</script>