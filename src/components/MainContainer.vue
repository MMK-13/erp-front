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
		margin: 32px;
		padding: 16px;
		border: 1px solid #EAEAEA;
		background-color: #FFF;
		border-radius: 4px;
	}
</style>