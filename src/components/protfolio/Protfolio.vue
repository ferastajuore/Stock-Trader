<template>
	<div>
		<app-stock
			v-for="(stock, id) in stocks"
			:key="id"
			:stock="stock"
		></app-stock>
	</div>
</template>

<script>
import Stock from './Stock';
import { mapGetters } from 'vuex';

export default {
	components: {
		appStock: Stock
	},
	computed: {
		...mapGetters({
			stocks: 'stockProtfolio'
		})
	}
};
</script>
