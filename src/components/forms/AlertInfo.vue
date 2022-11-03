<template>
	<div class="container">
		<transition name="toast">
			<div :class="'alert ' + type" @click="hideAlert" v-if="show">
				<i class="material-icons">{{ type }}</i>
				{{ text }}
			</div>
		</transition>
	</div>
</template>

<script>
	import { mapActions } from 'vuex'

	export default {
		name: 'AlertInfo',
		props: {
			text: String,
			type: String,
			show: {
				type: Boolean,
				default: false,
			}
		},
		methods: {
			...mapActions(['resetNotification']),
			hideAlert() {
				this.$emit("update:show", false)
				this.resetNotification()
			},
		},
	}
</script>

<style scoped>
	.container {
		display: inline-block;
	}
	.toast-enter-from,
	.toast-leave-to {
		opacity: 0;
	}
	.toast-enter-active,
	.toast-leave-active {
		transition: all 1s ease-in-out;
		opacity: .3;
		transform: translateX(300px);
	}
	.toast-enter-to,
	.toast-leave-from {
		opacity: 1;
		transform: translateX(0px);
	}
	/* Warning, done, info, dangerous */
	.alert {
		position: fixed;
		top: 16px;
		right: 16px;
		display: flex;
		flex-direction: row;
		align-items: center;
		gap: 8px;
		padding: 8px 16px;
		border-radius: 4px;
		z-index: 1000;
		cursor: pointer;
	}
	.dangerous {
		background-color: #F6685E;
		color: #FFF;
		border: 1px solid #F44336;
	}
	.info {
		background-color: #539ED6;
		color: #FFF;
		border: 1px solid #2986CC;
	}
	.done {
		background-color: #87b972;
		color: #FFF;
		border: 1px solid #6aa84f;
	}
	.warning {
		background-color: #eba75f;
		color: #FFF;
		border: 1px solid #e69138;
	}
</style>