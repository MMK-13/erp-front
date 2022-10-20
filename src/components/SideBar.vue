<template>
	<aside class="sidebar">
		<div class="sidebar__top">
			<div class="header">
				<div class="header__left">
					<img src="@/assets/logo.png" class="header__image">
					<div class="header__title">
						ERP
					</div>
				</div>
				<i class="material-icons expand">menu</i>
			</div>
			<div class="navigation">
				<div class="navigation__tilte">Menu</div>
				<SideBarLink v-for="(link, index) in links" class="item" 
				:route="link.route"
				:title="link.title"
				:icon="link.icon"
				:children="link.children"
				:deep="0"
				:key="index" />
			</div>
		</div>
		<div class="sidebar__down">
			<SideBarLink route="#" title="Settings" icon="settings" :deep="0" />
		</div>
	</aside>
</template>

<script>
	import SideBarLink from './SideBarLink'

	export default {
		name: 'SideBar',
		components: {
			SideBarLink,
		},
		data() {
			return {
				links: [
					{
						route: '/',
						title: 'Home',
						icon: 'home'
					},
				],
			}
		}
	}
</script>

<style scoped>
	.expand {
		cursor: pointer;
	}
	.item {
		margin-bottom: 8px;
	}
	.sidebar {
		width: 240px;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		background-color: #23395D;
		box-shadow: 2px 1px 2px #152238;
		border-right: #152238;
		color: #FFF;
		grid-row-start: span 2;
	}
	.header {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		border-bottom: 1px solid #152238;
		background-color: #203354;
		box-shadow: 0px 2px 8px #152238;
		margin-bottom: 32px;
		padding: 16px;
	}
	.header__left {
		display: flex;
		flex-direction: row;
		align-items: center;
	}
	.header__title {
		font-weight: bold;
		font-size: 24px;
	}
	.header__image {
		width: 24px;
		height: 24px;
		margin-right: 8px;
	}
	.sidebar__down {
		display: flex;
		flex-direction: column;
		border-top: 1px solid #152238;
		background-color: #203354;
		box-shadow: 0px -2px 8px #152238;
		padding: 16px;
	}
	.navigation {
		display: flex;
		flex-direction: column;
		justify-content: space-around;
	}
	.navigation__tilte {
		color: #FFF;
		opacity: .2;
		font-weight: 700;
		text-align: center;
		border-bottom: 1px solid #CCC;
		padding-bottom: 4px;
	}
</style>