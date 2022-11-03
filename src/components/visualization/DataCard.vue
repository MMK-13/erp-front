<template>
	<div class="card">
		<div class="card__content">
			<div class="card__content-title">{{ title }}</div>
			<div class="card__content-value">
				{{ value }}
				<span class="unity">{{ unity }}</span>
			</div>
		</div>
		<div class="card__icon">
			<i class="material-icons">{{ icon }}</i>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'DataCard',
		props: {
			title: {
				type: String
			},
			value: {
				type: Number,
				default: 0
			},
			icon: {
				type: String,
				default: 'person'
			},
			unity: {
				type: String,
				default: ''
			}
		}
	}
</script>

<style scoped>
	.card {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		background-color: #FFF;
		padding: 8px 16px;
		border-radius: 2px;
		border: 1px solid rgba(35, 57, 93, .1);
		box-shadow: 2px 2px 2px rgba(35, 57, 93, .2);
	}
	.card__icon {
		display: flex;
		align-items: center;
		justify-content: center;
		height: 64px;
		width: 64px;
		background-color: #42B883;
		box-shadow: 1px 1px 4px #23395D;
		border: 1px solid #42B883;
		border-radius: 4px;
	}
	.card__content {
		display: flex;
		flex-direction: column;
		gap: 8px;
	}
	.card__content-title {
		font-size: 20px;
		font-weight: 700;
		opacity: .5;
		color: #23395D;
	}
	.card__content-value {
		color: #42B883;
		font-size: 24px;
		font-weight: 900;
		
	}
	.material-icons {
		font-size: 48px;
		color: #FFF;
	}
</style>