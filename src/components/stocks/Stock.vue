<template>
	<div class="col-sm-6 col-md-4">
		<div class="panel panel-default">
			<div class="panel-heading">
				<h3 class="panel-title">
					{{ stock.name }} <small> (Price: {{ stock.price }})</small>
				</h3>
			</div>
			<div class="panel-body">
				<div class="pull-left">
					<input
						type="number"
						class="form-control"
						placeholder="Quantity"
						v-model="quantity"
						:class="{ danger: insufficienFund }"
					/>
				</div>
				<div class="pull-right">
					<button
						class="btn btn-success"
						@click="buyStock"
						:disabled="insufficienFund || quantity <= 0"
					>
						{{ insufficienFund ? 'insufficien Fund' : 'Buy' }}
					</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		stock: Object
	},
	data() {
		return {
			quantity: 0
		};
	},
	computed: {
		funds() {
			return this.$store.getters.funds;
		},
		insufficienFund() {
			return this.quantity * this.stock.price > this.funds;
		}
	},
	methods: {
		buyStock() {
			const order = {
				stockID: this.stock.id,
				stockPrice: this.stock.price,
				quantity: this.quantity
			};
			this.$store.dispatch('budyStocks', order);
			this.quantity = 0;
		}
	}
};
</script>

<style lang="scss" scoped>
.danger {
	border: 1px solid #ec0c0cc0;
	box-shadow: inset 0 1px 1px rgba(236, 12, 12, 0.65);
}
</style>
