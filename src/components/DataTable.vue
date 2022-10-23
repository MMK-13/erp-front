<template>
	<div class="data-table">
		<div class="data-table__filter" v-if="searchBar">
			<div class="element-by-page">
				<label for="elementByPage" class="element-by-page__label">Eléments affiché</label>
				<select id="elementByPage" v-model="elementByPage" class="element-by-page__select">
					<option>10</option>
					<option>25</option>
					<option>50</option>
					<option>100</option>
				</select>
			</div>
			<div class="search">
				<label for="searchBar" class="search__label">Rechercher : </label>
				<input id="searchBar" type="text" v-model="search" class="search__input">
			</div>
		</div>
		<table>
			<thead>
				<tr>
					<th v-for="(th, index) in thead"
					:key="index"
					@click="setSortedIndex(index)">
					<span>{{ th }}</span>
					<i class="material-icons" v-if="index == sortedIndex">
						{{ (sortDirection === 1)? 'arrow_drop_up' : 'arrow_drop_down' }}
					</i>
				</th>
			</tr>
		</thead>
		<tbody>
			<tr v-for="(line, key) in resultByPage" :key="key">
				<td v-for="(cell, index) in line" :key="index" v-html="cell"></td>
			</tr>
		</tbody>
	</table>
	<div class="data-table__info">
		<div>
			{{ elementShowed }} élément(s) affiché(s) sur {{ countLine }}
		</div>
		<div class="navigation">
			<button @click="previousPage" class="navigation__move" :disabled="currentPage == 0">
				<i class="material-icons">arrow_back_ios</i>
				Précédent
			</button>
			<button v-for="page in countPage" :key="page" @click="setCurrentPage(page)"
				:class="(((currentPage +1) == page )?'active-page ':'') + 'navigation__page'">
				{{ page }}
			</button>
			<button @click="nextPage" class="navigation__move" :disabled="currentPage == (countPage -1)">
				Suivant
				<i class="material-icons">arrow_forward_ios</i>
			</button>
		</div>
	</div>
</div>
</template>

<script>
	export default {
		name: 'DataTable',
		props: ['thead', 'data', 'searchBar'],
		data() {
			return {
				search: '',
				sortedIndex: 0,
				elementByPage: 10,
				currentPage: 0,
				sortDirection: 1
			}
		},
		methods: {
			sortField(array) {
				return array.sort((a, b) => {
					const i = this.sortedIndex
					if (a[i] == b[i])
						return 0
					return a[i] < b[i] ? (-1 *this.sortDirection) : (1 * this.sortDirection)
				})
			},
			setSortedIndex(index) {
				if (index === this.sortedIndex)
					this.sortDirection = -1 * this.sortDirection
				else
					this.sortDirection = 1
				this.sortedIndex = index
			},
			nextPage() {
				if (this.currentPage < (this.countPage - 1))
					this.currentPage++
			},
			previousPage() {
				if (this.currentPage > 0)
					this.currentPage -= 1
			},
			setCurrentPage(page) {
				this.currentPage = page - 1
			}
		},
		computed: {
			result() {
				if (this.searchBar) {
					const result = this.data.filter(element => {
						for (let key in element) {
							if (String(element[key]).toLowerCase().includes(this.search.toLowerCase()) || !this.search)
								return true
							// console.log(e)
						}
					})
					//console.log(result)
					return this.sortField(result)
				}
				return this.data
			},
			resultByPage() {
				let beginAt = this.currentPage * this.elementByPage
				let endAt = (this.currentPage + 1) * this.elementByPage
				let array = this.result.slice(
					beginAt,
					endAt
					)
				return array
			},
			countLine() {
				return this.result.length
			},
			countPage() {
				return Math.ceil(this.countLine / this.elementByPage)
			},
			elementShowed() {
				return this.resultByPage.length
			}
		},
	}
</script>

<style scoped>
	table {
		width: 100%;
		border-collapse: collapse;
	}
	thead {
		background-color: #23395D;
		color: #FFF;
	}
	th, td {
		border: 1px solid black;
		font-size: 16px;
	}
	td {
		padding: 8px 16px;
	}
	th {
		cursor: pointer;
		padding: 4px 8px;
		font-weight: 700;
		text-align: left;
	}
	tbody tr:nth-child(odd){
		background-color: rgba(35, 57, 93, .05);
	}
	.data-table__info {
		margin: 8px 0;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
	}
	.data-table__filter {
		margin: 8px 0;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
	}
	.element-by-page {
		display: flex;
		flex-direction: column;
	}
	.element-by-page__label {
		font-weight: 700;
		font-size: 16px;
	}
	.element-by-page__select {
		background-color: transparent;
		border: 1px solid #152238;
		border-radius: 4px;
		padding: 4px;
		outline: none;
		margin: 0;
	}
	.element-by-page__select:focus {
		border: 1px solid #42B883;
	}
	.search {
		display: flex;
		flex-direction: column;
	}
	.search__label {
		font-weight: 700;
		font-size: 16px;
	}
	.search__input {
		background-color: transparent;
		border: 1px solid #152238;
		border-radius: 4px;
		padding: 4px 8px;
		outline: none;
		margin: 0;
	}
	.search__input:focus .search__label {
		border: 1px solid #42B883;
	}
	.navigation {
		display: flex;
		flex-direction: row;
		align-items: center;
		gap: 4px;
	}
	.navigation__move, .navigation__page {
		font-size: 16px;
		cursor: pointer;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		height: 26px;
		border-radius: 4px;
	}
	.navigation__move i {
		font-size: 16px;
	}
	.navigation__move:disabled {
		cursor: not-allowed;
	}
	.navigation__move {
		border: 1px solid #152238;
		background-color: #23395D;
		color: #FFF;
	}
	.navigation__page {
		border: 1px solid #152238;
		background-color: #FFF;
	}
	.active-page {
		background-color: #42B883;
		color: #FFF;
		font-weight: 700;
	}
</style>