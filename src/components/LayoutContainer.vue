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
		display: grid;
		grid-template-columns: auto 1fr;
		grid-template-rows: 60px 1fr;
		min-height: 100vh;
	}
</style>