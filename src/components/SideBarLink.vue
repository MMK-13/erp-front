<template>
	<router-link :to="route">
		<div class="link">
			<i class="material-icons">{{ icon }}</i>
			{{ title }}
		</div>
	</router-link>
</template>

<script>
	export default {
		name: 'SideBarLink',
		props: ['route', 'title', 'icon']
	}
</script>

<style scoped>
	a {
		color: #FFF;
		text-decoration: none;
	}
	.material-icons {
		margin-right: 4px;
	}
	.link {
		display: flex;
		flex-direction: row;
		align-items: center;
		margin-bottom: 8px;
		padding: 11px;
		cursor: pointer;
		font-size: 16px;
	}
	.link:hover {
		background-color: #203354;
		border-right: 8px solid #42B883;
		color: #42B883;
	}
</style>