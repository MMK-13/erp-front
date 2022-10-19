<template>
	<div class="card">
		<AlertInfo :text="alert.text" :type="alert.type" v-if="showAlert" @click="hideAlert" />
		<div class="card__header">
			Connexion
		</div>
		<div class="card__body">

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
		</div>
		<div class="card__footer">
			<InputButton
			text="Envoyer"
			icon="login"
			classes="primary block"
			@click="submit"
			/>
		</div>
	</div>
</template>

<script>
	import InputField from './forms/InputField'
	import InputButton from './forms/InputButton'
	import AlertInfo from './forms/AlertInfo'

	export default {
		name: 'LoginBox',
		components: {
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
		methods: {
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
							this.alert = {
								text: 'Connexion réussie !',
								type: 'done'
							}
						}

						console.log(data)
					})
					.catch((error) => console.log(error))
				} else {
					this.showAlert = true
					this.alert = {
						text: 'Veuillez remplir les champs !',
						type: 'warning'
					}
				}
			},
			hideAlert() {
				this.showAlert = false
			},
		},
	}
</script>

<style scoped>
	.card {
		display: grid;
		grid-template-rows: auto 1fr auto;
		/* A supprimer plutard  */
		width: 400px;
	}
	.card__header {
		font-size: 18px;
		font-weight: 700;
		border-top-left-radius: 4px;
		border-top-right-radius: 4px;
		border: 1px solid #152238;
		background-color: #192841;
		color: #FFF;
		padding: 8px 16px;
	}
	.card__footer {
		font-size: 18px;
		font-weight: 700;
		border-bottom-left-radius: 4px;
		border-bottom-right-radius: 4px;
		border: 1px solid #152238;
		background-color: #23395D;
		color: #FFF;
		padding: 8px 16px;
	}
	.card__body {
		background-color: #FFF;
		display: flex;
		flex-direction: column;
		gap: 16px;
		padding: 16px 32px;
		border: 1px solid #152238;
	}
</style>