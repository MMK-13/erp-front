<template>
	<div class="container">
		<SideBar />
		<TopHeader />
		<BreadCrumb :address="address" :title="title" />
		<MainContainer>
			<slot></slot>
		</MainContainer>
	</div>
</template>

<script>
	import { mapGetters } from 'vuex'
	import SideBar from '@/components/SideBar'
	import TopHeader from '@/components/TopHeader'
	import MainContainer from '@/components/MainContainer'
	import BreadCrumb from '@/components/BreadCrumb'

	export default {
		name: 'LayoutContainer',
		props: ['address', 'title'],
		mounted() {
			if (!this.isConnected)
				this.$router.push('/')
		},
		components: {
			SideBar,
			TopHeader,
			MainContainer,
			BreadCrumb,
		},
		computed: {
			...mapGetters(['isConnected']),
		},
	}
</script>

<style scoped>
	.container {
		display: grid;
		grid-template-columns: auto 1fr;
		grid-template-rows: 60px 60px 1fr;
		min-height: 100vh;
	}
</style>