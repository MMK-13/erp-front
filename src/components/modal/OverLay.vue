<template>
	<div class="overlay"
		v-if="isModalVisibille"
		@click="hide"></div>
</template>

<script>
	import { mapGetters, mapActions } from 'vuex'

	export default {
		name: 'OverLay',
		computed: {
			...mapGetters(['isModalVisibille']),
		},
		methods: {
			...mapActions(['hideModal']),
			hide() {
				console.log('Hide: from Overlay...')
				this.hideModal()
			}
		}
	}
</script>

<style>
	.overlay {
		z-index: 100;
		background-color: #000;
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		opacity: .6;
	}
</style>