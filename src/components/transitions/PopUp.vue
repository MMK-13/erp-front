<template>
	<transition name="pop-up">
		<slot></slot>
	</transition>
</template>

<script>
	export default {
		name: 'SlideUp',
	}
</script>

<style scoped>
	.pop-up-enter-active,
	.pop-up-leave-active {
		transition: all .3s cubic-bezier(1, 0.5, 0.8, 1);
	}
	.pop-up-enter-from,
	.pop-up-leave-to {
		transform: scale(.5);
	}
</style>