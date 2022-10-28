<template>
	<div class="card">
		<div class="card__header">
			<slot name="header"></slot>
		</div>
		<div class="card__body">
			<slot name="body"></slot>
		</div>
		<div class="card__footer">
			<slot name="footer"></slot>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'CardComponent',
	}
</script>

<style scoped>
	.card {
		display: grid;
		grid-template-rows: auto 1fr auto;
		height: fit-content;
	}
	.card__header {
		font-size: 18px;
		font-weight: 700;
		border-top-left-radius: 4px;
		border-top-right-radius: 4px;
		border: 1px solid #152238;
		background-color: #23395D;
		color: #FFF;
		padding: 8px 16px;
	}
	.card__footer {
		display: flex;
		flex-direction: row;
		gap: 8px;
		font-size: 18px;
		font-weight: 700;
		border-bottom-left-radius: 4px;
		border-bottom-right-radius: 4px;
		border: 1px solid #152238;
		background-color: #23395D;
		color: #FFF;
		padding: 8px 16px;
	}
	.card__body {
		background-color: #FFF;
		display: flex;
		flex-direction: column;
		gap: 16px;
		padding: 16px 32px;
		border: 1px solid #152238;
	}
</style>