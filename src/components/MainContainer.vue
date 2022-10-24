<template>
	<div class="main">
		<slot></slot>
	</div>
</template>

<script>
	export default {
		name: 'MainContainer',
	}
</script>

<style>
	.main {
		margin: 24px 32px;
		padding: 16px;
		height: fit-content;
	}
</style>