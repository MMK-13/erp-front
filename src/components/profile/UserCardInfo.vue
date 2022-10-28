<template>
	<div class="card">
		<div class="card__image">
			<i class="material-icons">account_circle</i>
		</div>
		<div class="card__info">
			<div class="card__info-fullname">
				{{ fullname }}
			</div>
			<div class="card__info-jobs">
				Développer
			</div>
		</div>
		<div class="divider"></div>
		<div class="card__action">
			<InputButton text="Modifier le nom d'utilisateur" icon="person" classes="primary block" @click="updateUsername" />
			<InputButton text="Modifier le mot de passe" icon="lock" classes="primary block" @click="updatePassword" />
		</div>
	</div>
</template>

<script>
	import { mapGetters } from 'vuex'
	import InputButton from '@/components/forms/InputButton'

	export default {
		name: 'UserCardInfo',
		components: {
			InputButton,
		},
		computed: {
			...mapGetters(['userData']),
			fullname() {
				return this.userData.firstname + ' ' + this.userData.lastname
			},
		},
		methods: {
			updateUsername() {
				this.$emit('sent-update-username', {
					show: true,
				})
			},
			updatePassword() {
				this.$emit('sent-update-password', {
					show: true,
				})
			},
		},
	}
</script>

<style scoped>
	.card {
		flex-direction: column;
		align-items: center;
		gap: 16px;
		border: 1px solid #152238;
		border-radius: 4px;
		background-color: #FFF;
		box-shadow: 2px 2px 4px #152238;
		height: fit-content;
	}
	.card__image {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 160px;
		background-color: #23395D;
	}
	.card__image i {
		font-size: 128px;
		color: #FFF;
	}
	.card__info {
		display: flex;
		flex-direction: column;
		gap: 4px;
		padding: 8px 16px;
	}
	.card__info-fullname {
		text-align: center;
		font-size: 22px;
		font-weight: 600;
		color: #23395D;
	}
	.card__info-jobs {
		text-align: center;
		font-size: 20px;
		font-weight: 600;
		color: #42B883;
	}
	.divider {
		border-bottom: 2px solid #152238;
		opacity: .5;
		box-shadow: 2px 2px 4px #152238;
		margin-bottom: 4px;
	}
	.card__action {
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		align-items: center;
		gap: 4px;
		padding: 8px;
	}
</style>