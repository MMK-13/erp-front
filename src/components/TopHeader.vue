<template>
	<div class="header">
		<div class="header__left">
			Left
		</div>

		<div class="header__center">
			Center
		</div>

		<div class="header__right">
			<div class="user" @click="redirectToProfil">
				<i class="material-icons">account_circle</i>
				My account
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'TopHeader',
		methods: {
			redirectToProfil() {
				alert('Profile')
			}
		}
	}
</script>

<style scoped>
	.header {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		padding: 0 16px;
		color: #FFF;
		border-bottom: 1px solid #152238;
		border-left: 1px solid #152238;
		background-color: #203354;
		box-shadow: 2px 2px 8px #152238;
		grid-row-start: span 1;
	}
	.header__right {
		display: flex;
		flex-direction: row;
		align-items: center;
		gap: 8px;
	}
	.user {
		position: relative;
		display: flex;
		flex-direction: row;
		align-items: center;
		gap: 8px;
		cursor: pointer;
	}
	.user:hover {
		background-color: #23395D;
		color: #42B883;
	}
</style>