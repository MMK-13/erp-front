<template>
	<div class="header">
		<div class="header__left">
			Left
		</div>

		<div class="header__center">
			Center
		</div>

		<div class="header__right">
			Right
		</div>
	</div>
</template>

<script>
	export default {
		name: 'TopHeader',
	}
</script>

<style scoped>
	.header {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		padding: 0 16px;
		color: #FFF;
		border-bottom: 1px solid #152238;
		border-left: 1px solid #152238;
		background-color: #203354;
		box-shadow: 2px 2px 8px #152238;
	}
</style>