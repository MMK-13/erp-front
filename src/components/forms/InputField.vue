<template>
	<div class="row">
		<label :for="name" class="label">{{ label }}</label>
		<input :id="name" class="input" 
			:type="type"
			:placeholder="placeholder"
			:value="value"
			@input='$emit("update:value", $event.target.value)'
			/>
	</div>
</template>

<script>
	export default {
		name: 'InputField',
		props: ['name', 'label', 'type', 'value', 'placeholder'],
	}
</script>

<style scoped>
	.row {
		width: 100%;
		display: flex;
		flex-direction: column;
		gap: 8px;
	}
	.label {
		color: #000;
		font-size: 16px;
		font-weight: 500;
	}
	.input {
		font-size: 18px;
		border: 1px solid #192841;
		padding: 8px 16px;
		border-radius: 4px;
	}
	.input:focus {
		outline: none;
		border-color: #42B883;
	}
</style>