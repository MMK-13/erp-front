<template>
	<aside class="sidebar">
		<div class="sidebar__top">
			<div class="header">
				<img src="@/assets/logo.png" class="header__image">
				<div class="header__title">
					ERP
				</div>
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
			<SideBarLink route="#" title="My account" icon="account_circle" :deep="0" />
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
						route: '#',
						title: 'Home',
						icon: 'home',
						children: [
							{
								route: '/',
								title: 'Child 1',
							}, {
								route: '#',
								title: 'Child 2',
								children: [
									{
										route: '/',
										title: 'Child 2.1',
									}, {
										route: '/',
										title: 'Child 2.2'
									}
								]
							},
						]
					}, {
						route: '#',
						title: 'Settings',
						icon: 'settings',
						children: [
							{
								route: '#',
								title: 'Setting 1',
							}, {
								route: '#',
								title: 'Setting 2',
							},
						]
					}
				],
			}
		}
	}
</script>

<style scoped>
	.item {
		margin-bottom: 8px;
	}
	.sidebar {
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
		justify-content: center;
		border-bottom: 1px solid #152238;
		background-color: #203354;
		box-shadow: 0px 2px 8px #152238;
		margin-bottom: 32px;
		padding: 16px;
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