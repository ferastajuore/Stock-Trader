import stocks from '../../data/stocks';

const state = {
	stocks: []
};

const mutations = {
	SET_STOCK(state, stocks) {
		state.stocks = stocks;
	},
	RND_STOCK() {
		state.stocks.forEach(stock => {
			stock.price = Math.round(stock.price * (1 + Math.random() - 0.5));
		});
	}
};

const actions = {
	budyStocks: ({ commit }, order) => {
		commit('BUY_STOCK', order);
	},
	initStocks: ({ commit }) => {
		commit('SET_STOCK', stocks);
	},
	rondomStocks: ({ commit }) => {
		commit('RND_STOCK');
	}
};

const getters = {
	stocks: state => {
		return state.stocks;
	}
};

export default {
	state,
	mutations,
	actions,
	getters
};
