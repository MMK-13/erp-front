<template>
	<div :class="'alert ' + type">
		<i class="material-icons">{{ type }}</i>
		{{ text }}
	</div>
</template>

<script>
	export default {
		name: 'AlertInfo',
		props: ['text', 'type'],
	}
</script>

<style scoped>
	/* Warning, done, info, dangerous */
	.alert {
		position: fixed;
		top: 16px;
		right: 16px;
		display: flex;
		flex-direction: row;
		align-items: center;
		gap: 8px;
		padding: 8px 16px;
		border-radius: 4px;
	}
	.dangerous {
		background-color: #F6685E;
		color: #FFF;
		border: 1px solid #F44336;
	}
	.info {
		background-color: #539ED6;
		color: #FFF;
		border: 1px solid #2986CC;
	}
	.done {
		background-color: #87b972;
		color: #FFF;
		border: 1px solid #6aa84f;
	}
	.warning {
		background-color: #eba75f;
		color: #FFF;
		border: 1px solid #e69138;
	}
</style>