<template>
	<div class="container">
		<slot></slot>
	</div>
</template>

<script>
	export default {
		name: 'LayoutCenter',
	}
</script>

<style scoped>
	.container {
		min-height: 100vh;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
</style>