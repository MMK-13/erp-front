<template>
	<LayoutContainer>
		<SideBar />
		<TopHeader />
	</LayoutContainer>
</template>

<script>
	import LayoutContainer from '@/components/LayoutContainer'
	import SideBar from '@/components/SideBar'
	import TopHeader from '@/components/TopHeader'

	export default {
		name: 'DashboardView',
		components: {
			SideBar,
			LayoutContainer,
			TopHeader,
		}
	}
</script>