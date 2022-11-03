<template>
	<LayoutContainer address="User/Profile" title="Profile Page">
		<div class="profile-container">
			<UserCardInfo
				@sent-update-username="setUpdateUsername"
				@sent-update-password="setUpdatePassword" />
			<SlideUp>
				<UpdateUsername
					v-if="showUpdateUsername"
					@sent-hide="setUpdateUsername"
					@sent-message="setAlertMessage"
					class="change" key="0" />
			</SlideUp>
			<SlideUp>
				<UpdatePassword
					v-if="showUpdatePassword"
					@sent-hide="setUpdatePassword"
					@sent-message="setAlertMessage"
					class="change" key="1" />
			</SlideUp>
		</div>
	</LayoutContainer>
</template>

<script>
	import { mapActions } from 'vuex'
	import LayoutContainer from '@/components/LayoutContainer'
	import SlideUp from '@/components/transitions/SlideUp'
	import UserCardInfo from '@/components/profile/UserCardInfo'
	import UpdatePassword from '@/components/profile/UpdatePassword'
	import UpdateUsername from '@/components/profile/UpdateUsername'
	
	export default {
		name: 'ProfileView',
		components: {
			LayoutContainer,
			SlideUp,
			UserCardInfo,
			UpdatePassword,
			UpdateUsername,
		},
		data() {
			return {
				showUpdateUsername: false,
				showUpdatePassword: false,
			}
		},
		methods: {
			...mapActions(['setCustomNotification']),
			setAlertMessage(payload) {
				this.setCustomNotification({
					show: true,
					type: payload.type,
					text: payload.text
				})
			},
			setUpdateUsername(payload) {
				this.showUpdatePassword = false
				setTimeout(() => {
					this.showUpdateUsername = payload.show
				}, 300)
			},
			setUpdatePassword(payload) {
				this.showUpdateUsername = false
				setTimeout(() => {
					this.showUpdatePassword = payload.show
				}, 300)
			},
		},
	}
</script>

<style scoped>
	.change {
		grid-column-start: 2;
	}
	.profile-container {
		display: grid;
		grid-template-columns: 280px 1fr;
		grid-gap: 32px;
	}
</style>