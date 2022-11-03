<template>
	<div class="overlay"
		v-if="isModalVisibille"
		@click="hide"></div>
</template>

<script>
	import { mapGetters } from 'vuex'

	export default {
		name: 'OverLay',
		computed: {
			...mapGetters(['isModalVisibille']),
		},
	}
</script>

<style>
	.overlay {
		background-color: #000;
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		opacity: .6;
	}
</style>