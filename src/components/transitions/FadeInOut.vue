<template>
	<transition name="fade-in-out">
		<slot></slot>
	</transition>
</template>

<script>
	export default {
		name: 'FadeInOut',
	}
</script>

<style scoped>
	.fade-in-out-enter-active,
	.fade-in-out-leave-active {
		transition: all .3s cubic-bezier(1, 0.5, 0.8, 1);
	}
	.fade-in-out-enter-from,
	.fade-in-out-leave-to {
		opacity: 0;
	}
</style>