<template>
	<div class="main">
		<slot></slot>
		<AlertInfo
			:type="notification.type"
			:text="notification.text"
			v-model:show="notification.show" />
	</div>
</template>

<script>
	import { mapGetters, mapActions } from 'vuex'
	import AlertInfo from '@/components/forms/AlertInfo'

	export default {
		name: 'MainContainer',
		components: {
			AlertInfo,
		},
		mounted() {
			this.notification = this.getNotification
		},
		data() {
			return {
				notification: {},
			}
		},
		methods: {
			...mapActions(['resetNotification']),
		},
		watch: {
			notification(oldNotif, newNotif) {
				if (!newNotif.show)
					this.resetNotification()
			}
		},
		computed: {
			...mapGetters(['getNotification']),
		},
	}
</script>

<style>
	.main {
		margin: 24px 32px;
		padding: 16px;
		height: fit-content;
	}
</style>