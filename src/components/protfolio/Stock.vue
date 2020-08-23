<template>
	<div class="col-sm-6 col-md-4">
		<div class="panel panel-info">
			<div class="panel-heading">
				<h3 class="panel-title">
					{{ stock.name }}
					<small>
						(Price: {{ stock.price }} || Quantity:
						{{ stock.quantity }})</small
					>
				</h3>
			</div>
			<div class="panel-body">
				<div class="pull-left">
					<input
						type="number"
						class="form-control"
						placeholder="Quantity"
						v-model="quantity"
						:class="{ danger: insufficienQuantity }"
					/>
				</div>
				<div class="pull-right">
					<button
						class="btn btn-info"
						@click="sellStock"
						:disabled="insufficienQuantity || quantity <= 0"
					>
						{{ insufficienQuantity ? 'Not enough' : 'sell' }}
					</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
	props: {
		stock: Object
	},
	data() {
		return {
			quantity: 0
		};
	},
	methods: {
		...mapActions({
			sellOrder: 'sellStock'
		}),
		sellStock() {
			const order = {
				stockID: this.stock.id,
				stockPrice: this.stock.price,
				quantity: this.quantity
			};
			this.sellOrder(order);
			// this.$store.dispatch('sellStock', order);
			this.quantity = 0;
		}
	},
	computed: {
		insufficienQuantity() {
			return this.quantity > this.stock.quantity;
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
