<template>
	<div class="breadcrumb">
		<div class="breadcrumb__items">
			<span v-for="(item, index) in exploded" :key="index" class="breadcrumb__items-item">
				<i class="material-icons">chevron_right</i>
				{{ item }}
			</span>
		</div>
		<div class="breadcrumb__title">{{ title }}</div>
	</div>
</template>

<script>
	export default {
		name: 'BreadCrumb',
		props: ['address', 'title'],
		computed: {
			exploded() {
				return this.address.split('/')
			},
		},
	}
</script>

<style scoped>
	.breadcrumb {
		color: #42B883;
		margin-left: 32px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		grid-row-start: span 1;
	}
	.breadcrumb__items {
		display: flex;
		flex-direction: row;
	}
	.breadcrumb__items-item {
		font-size: 16px;
		display: flex;
		flex-direction: row;
		align-items: center;
	}
	.breadcrumb__items-item i {
		font-size: 24px;
	}
	.breadcrumb__title {
		font-size: 22px;
		margin-left: 24px;
		font-weight: 500;
	}
</style>