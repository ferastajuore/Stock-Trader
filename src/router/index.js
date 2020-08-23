import Vue from 'vue';
import VueRouter from 'vue-router';
import { Home, Protfolio, Stocks } from '../components';
// import Home from '../components/Home.vue';

Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		component: Home
	},
	{
		path: '/protfolio',
		component: Protfolio
	},
	{
		path: '/stocks',
		component: Stocks
	}
];

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
});

export default router;
