import ProductList from "./components/ProductList";
import ProductDetails from "./components/ProductDetails";
import ProductAdd from "./components/AddProduct";

export const routes = [
	{
		path: '/',
		component: ProductList
	},
	{
		path: '/add',
		component: ProductAdd
	},
	{
		path: '/detail/:id/',
		component: ProductDetails
	},
	{
		path: '*',
		component: ProductList
	}
]