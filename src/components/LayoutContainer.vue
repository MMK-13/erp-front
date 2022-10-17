<template>
	<div class="container">
		<slot></slot>
	</div>
</template>

<script>
	export default {
		name: 'LayoutContainer',
	}
</script>

<style scoped>
	.container {
		min-height: 100vh;
	}
</style>