<template>
	<transition name="slide-up">
		<slot></slot>
	</transition>
</template>

<script>
	export default {
		name: 'SlideUp',
	}
</script>

<style scoped>
	.slide-up-enter-active,
	.slide-up-leave-active,
	.slide-up-enter-active,
	.slide-up-enter-active {
		transition: all .3s ease-in;
	}

	.slide-up-enter-from,
	.slide-up-leave-to,
	.slide-up-enter-from,
	.slide-up-leave-to {
		transform: translateY(100px);
		opacity: 0;
	}
</style>