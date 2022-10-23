<template>
	<div class="item">
		<router-link :to="route" @click="expand">
			<div class="link">
				<div class="link__left">
					<i class="material-icons">{{ icon }}</i>
					{{ title }}
				</div>
				<i class="material-icons">{{ expand_icon }}</i>
			</div>
		</router-link>
		<Transition name="expand">
			<div v-if="expanded" class="item-children">
				<SideBarLink-item v-for="(child, index) in children"
					:route="child.route"
					:title="child.title"
					:deep="deep + 1"
					icon="chevron_right"
					:key="index"
					:style="{'margin-left': 5 * deep + 10 + 'px'}"
					:children="child.children"
				/>
			</div>
		</Transition>
	</div>
</template>

<script>
	export default {
		name: 'SideBarLink-item',
		props: ['route', 'title', 'icon', 'deep', 'children'],
		data() {
			return {
				expanded: false,
				childrenHeight: 0,
			}
		},
		methods: {
			expand() {
				if (this.children)
					this.expanded = !this.expanded
			}
		},
		computed: {
			expand_icon() {
				if (!this.children)
					return ''
				else if (!this.expanded)
					return 'expand_less'
				else if (this.children)
					return 'expand_more'
				return ''
			},
		},
	}
</script>

<style scoped>
	.expand-enter-active,
	.expand-leave-active {
		transition: all .3s ease-in-out;
	}
	.expand-leave-from {
		height: 0;
		opacity: 0;
	}
	.expand-enter-to {
		height: auto;
		opacity: 1;
	}
	.expand-enter-from,
	.expand-leave-to {
		height: 0;
		opacity: 0;
	}
	a {
		color: #FFF;
		text-decoration: none;
	}
	.material-icons {
		margin-right: 4px;
	}
	.link {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		padding: 11px;
		cursor: pointer;
		font-size: 16px;
	}
	.link__left {
		display: flex;
		flex-direction: row;
		align-items: center;
	}
	.link:hover {
		background-color: #203354;
		border-right: 2px solid #42B883;
		color: #42B883;
	}
	.rooter-link-active > .link {
		background-color: #203354;
		border-right: 2px solid #42B883;
		color: #42B883;
	}
</style>