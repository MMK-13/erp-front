<template>
	<div class="basic-modal" v-if="isModalVisibille">
		<div class="modal" :style="{width: width}">
			<div class="modal__header">
				<slot name="header"></slot>
				<i class="material-icons close-icons" @click="close">close</i>
			</div>
			<div class="modal__body">
				<slot name="body"></slot>
			</div>
			<div class="modal__footer">
				<slot name="footer"></slot>
			</div>
		</div>
	</div>
</template>

<script>
	import { mapGetters, mapActions } from 'vuex'

	export default {
		name: 'BasicModal',
		props: ['width'],
		methods: {
			...mapActions(['hideModal']),
			close() {
				console.log('Hide: from basic modal...')
				this.hideModal()
			},
		},
		computed: {
			...mapGetters(['isModalVisibille']),
		},
	}
</script>

<style scoped>
	.close-icons {
		cursor: pointer;
	}
	.close-icons:hover {
		transform: scale(1.1);
	}
	.basic-modal {
		z-index: 102;
		position: fixed;
		top: 0;
		left: 0;
	}
	.modal {
		display: grid;
		grid-template-rows: auto 1fr auto;
		height: fit-content;
		position: absolute;
		top: 25%;
		left: 50%;
		transform: translate(100%, 100%);
	}
	.modal__header {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		font-size: 18px;
		font-weight: 700;
		border-top-left-radius: 4px;
		border-top-right-radius: 4px;
		border: 1px solid #152238;
		background-color: #23395D;
		color: #FFF;
		padding: 8px 16px;
	}
	.modal__footer {
		display: flex;
		flex-direction: row;
		gap: 8px;
		font-size: 18px;
		font-weight: 700;
		border-bottom-left-radius: 4px;
		border-bottom-right-radius: 4px;
		border: 1px solid #152238;
		background-color: #23395D;
		color: #FFF;
		padding: 8px 16px;
	}
	.modal__body {
		background-color: #FFF;
		display: flex;
		flex-direction: column;
		gap: 16px;
		padding: 16px 32px;
		border: 1px solid #152238;
	}
</style>