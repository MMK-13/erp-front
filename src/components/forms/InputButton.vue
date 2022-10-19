<template>
	<button :class="'btn ' + classes">
		<i class="material-icons">{{ icon }}</i>
		{{ text }}
	</button>
</template>

<script>
	export default {
		name: 'InputButton',
		props: ['text', 'icon', 'classes'],
	}
</script>

<style>
	.btn {
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 4px 8px;
		gap: 8px;
		font-size: 16px;
		border-radius: 4px;
		cursor: pointer;
	}
	.primary {
		color: #FFF;
		background-color: #42B883;
		border: 1px solid #35495E;
	}
	.primary:hover {
		background-color: #32A873;
	}
	.block {
		width: 100%;
	}
</style>