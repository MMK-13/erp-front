<template>
	<CardComponent>
		<template #header>
			Modifier le mot de passe
		</template>
		<template #body>
			<InputField
				name="new_password"
				label="New password"
				type="password"
				placeholder="Veuillez saisir votre nouveau mot de passe"
				v-model:value="new_password" />
			<InputField
				name="conf_password"
				label="Confirm password"
				type="password"
				placeholder="Veuillez confirmer votre nouveau mot de passe"
				v-model:value="conf_password" />
			<InputField
				name="password"
				label="Current password"
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
	import { mapGetters } from 'vuex'
	import CardComponent from '@/components/forms/CardComponent'
	import InputField from '@/components/forms/InputField'
	import InputButton from '@/components/forms/InputButton'

	export default {
		name: 'UpdatePassword',
		components: {
			InputField,
			InputButton,
			CardComponent,
		},
		data() {
			return {
				password: '',
				new_password: '',
				conf_password: '',
			}
		},
		methods: {
			submit() {
				if (!this.password || !this.new_password || !this.conf_password)
					this.$emit('sent-message', {
						type: 'warning',
						text: 'Veuillez remplir tous les champs'
					})
				else if (this.new_password !== this.conf_password) {
					this.$emit('sent-message', {
						type: 'dangerous',
						text: 'Votre nouveau mot de passe est différent du mot de passe de confirmation !'
					})
				} else {
					fetch('http://erp.ru/user/change-password', {
						method: 'POST',
						body: JSON.stringify({
							username: this.userData.username,
							password: this.password,
							new_password: this.new_password
						})
					}).then((response) => response.json())
					.then((data) => {
						if (data.verified) {
							this.$emit('sent-message', {
								type: 'done',
								text: 'Le password a bien été modifié !'
							})
							this.cancel()
						} else {
							this.$emit('sent-message', {
								type: 'dangerous',
								text: 'Votre mot de passe est incorrect !'
							})
						}
					})
				}
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