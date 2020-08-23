import Vue from 'vue';
import Vuex from 'vuex';

import stocks from './modules/stocks';
import protfolio from './modules/protfolio';

Vue.use(Vuex);

export default new Vuex.Store({
	modules: {
		stocks,
		protfolio
	}
});
