<template>
	<div class="grid">
		<DataCard v-for="(item, index) in items" :key="index"
			:title="item.title"
			:icon="item.icon"
			:value="item.value"
			:unity="item.unity" />
	</div>
</template>

<script>
	import DataCard from '@/components/visualization/DataCard'

	export default {
		name: 'DashboardCardList',
		components: {
			DataCard,
		},
		data() {
			return {
				items: [
					{title: 'Ventes de la semaine', icon: 'attach_money', value: 100, unity: '₽'},
					{title: 'Clients unique', icon: 'person', value: 54},
					{title: 'Croissance', icon: 'trending_up', value: 11, unity: '%'},
					{title: 'Mon solde', icon: 'account_balance', value: 871, unity: '₽'},
				]
			}
		}
	}
</script>

<style scoped>
	.grid {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		grid-gap: 8px;
	}
</style>