const state = {
	funds: 10000,
	stocks: []
};

const mutations = {
	BUY_STOCK(state, { stockID, quantity, stockPrice }) {
		const record = state.stocks.find(e => e.id === stockID);

		if (record) {
			record.quantity += quantity;
		} else {
			state.stocks.push({
				id: stockID,
				quantity
			});
		}

		state.funds -= stockPrice * quantity;
	},

	SELL_STOCK(state, { stockID, quantity, stockPrice }) {
		const record = state.stocks.find(e => e.id === stockID);

		if (record.quantity > quantity) {
			record.quantity -= quantity;
		} else {
			state.stocks.splice(state.stocks.indexOf(record), 1);
		}

		state.funds += stockPrice * quantity;
	}
};

const actions = {
	sellStock({ commit }, order) {
		commit('SELL_STOCK', order);
	}
};

const getters = {
	stockProtfolio(state, getters) {
		return state.stocks.map(stock => {
			const record = getters.stocks.find(e => e.id === stock.id);
			return {
				id: stock.id,
				quantity: stock.quantity,
				name: record.name,
				price: record.price
			};
		});
	},
	funds(state) {
		return state.funds;
	}
};

export default {
	state,
	mutations,
	actions,
	getters
};
