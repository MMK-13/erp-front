<template>
	<LayoutContainer address="User/List" title="User list">
		<DataTable :thead="head_fields" :data="users" :searchBar="true" @addNew="iSee" />
	</LayoutContainer>
</template>

<script>
	import LayoutContainer from '@/components/LayoutContainer'
	import DataTable from '@/components/DataTable'
	
	export default {
		name: 'UserView',
		components: {
			LayoutContainer,
			DataTable
		},
		data() {
			return {
				head_fields: ['Firstname', 'Lastname', 'Username'],
				users: [],
			}
		},
		methods: {
			iSee() {
				console.log('Add new')
			},
		},
	}
</script>

<style scoped>
	
</style>