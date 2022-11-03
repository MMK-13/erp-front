<template>
	<div class="main">
		<slot></slot>
		<AlertInfo />
	</div>
</template>

<script>
	import AlertInfo from '@/components/forms/AlertInfo'

	export default {
		name: 'MainContainer',
		components: {
			AlertInfo,
		},
	}
</script>

<style>
	.main {
		margin: 24px 32px;
		padding: 16px;
		height: fit-content;
	}
</style>