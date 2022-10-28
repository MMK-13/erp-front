<template>
	<CardComponent>
		<template #header>
			Modifier le nom d'utilisateur
		</template>
		<template #body>
			<InputField
				name="username"
				label="Username"
				type="text"
				placeholder="Veuillez saisir votre nouveau nom d'utilisateur"
				v-model:value="username" />
			<InputField
				name="password"
				label="Password"
				type="password"
				placeholder="Veuillez saisir votre mot de passe pour confirmer votre identité"
				v-model:value="password" />
		</template>
		<template #footer>
			<InputButton text="Enrégistrer" icon="save" classes="primary" @click="submit" />
			<InputButton text="Annuler" icon="cancel" classes="primary" @click="cancel" />
		</template>
	</CardComponent>
</template>

<script>
	import { mapGetters, mapActions } from 'vuex'
	import CardComponent from '@/components/forms/CardComponent'
	import InputField from '@/components/forms/InputField'
	import InputButton from '@/components/forms/InputButton'

	export default {
		name: 'UpdateUsername',
		components: {
			InputField,
			InputButton,
			CardComponent,
		},
		data() {
			return {
				username: '',
				password: '',
			}
		},
		methods: {
			...mapActions(['setUsername']),
			submit() {
				if (!this.username || !this.password) {
					this.$emit('sent-message', {
						type: 'warning',
						text: 'Veuillez remplir tous les champs'
					})
					return false
				}
				fetch('http://erp.ru/user/change-username', {
					method: 'POST',
					body: JSON.stringify({
						username: this.userData.username,
						password: this.password,
						new_username: this.username,
					})
				}).then((response) => response.json())
				.then((data) => {
					if (data.verified) {
						this.$emit('sent-message', {
							type: 'done',
							text: 'Le username a bien été modifié !'
						})
						this.setUsername(this.username)
						this.cancel()
					} else {
						this.$emit('sent-message', {
							type: 'dangerous',
							text: 'Votre mot de passe est incorrect !'
						})
					}
				})
				.catch((error) => {
					this.$emit('sent-message', {
						type: 'dangerous',
						text: 'Impossible de se connecter !'
					})
					console.log(error)
				})
			},
			cancel() {
				this.$emit('sent-hide', {
					show: false,
				})
			},
		},
		computed: {
			...mapGetters(['userData']),
		}
	}
</script>