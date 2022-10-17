<template>
	<LayoutContainer>
		<SideBar />
	</LayoutContainer>
</template>

<script>
	import SideBar from '@/components/SideBar'
	import LayoutContainer from '@/components/LayoutContainer'

	export default {
		name: 'DashboardView',
		components: {
			SideBar,
			LayoutContainer,
		}
	}
</script>