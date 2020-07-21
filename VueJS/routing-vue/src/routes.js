import ProductList from "./components/ProductList";
import ProductDetails from "./components/ProductDetails";
import ProductAdd from "./components/AddProduct";

export const routes = [
	{
		path: '/',
		component: ProductList,
		name: 'home'
	},
	{
		path: '/add',
		component: ProductAdd
	},
	{
		path: '/detail/:id/',
		component: ProductDetails,
		name: 'product-details'
	},
	{
		path: '*',
		component: ProductList
	}
]