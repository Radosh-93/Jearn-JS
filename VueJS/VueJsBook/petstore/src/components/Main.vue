<template>
	<div>
		<keep-alive>
			<component :is="component" :cartItemCount="cartItemCount"></component>
		</keep-alive>
		<main>
			<div v-if="showProduct">
				<button @click="sortedProducts">Sort</button>
				<div class="row product" v-for="(product, i) in products" :key="i">
					<div class="col">
						<figure>
							<img :src="product.image" />
						</figure>
					</div>
					<div class="col col-expand">
						<router-link tag="h1" :to="{name: 'Id', params: {id: product.id}}">{{product.title}}</router-link>
						<p v-html="product.description"></p>
						<p class="price">{{product.price | formatPrice}}</p>
						<div class="action-block">
							<button
								class="btn btn-primary"
								@click="addToCart(product)"
								:disabled="canAddToCart(product)"
							>
								Add to
								cart
							</button>
							<span
								class="inventory-message"
								v-if="product.availableInventory - cartCount(product.id) == 0"
							>
								All
								Out!
							</span>
							<span
								class="inventory-message"
								v-else-if="product.availableInventory - cartCount(product.id) < 5"
							>
								Only
								{{product.availableInventory - cartCount(product.id)}} left!
							</span>
							<span class="inventory-message green" v-else>Buy Now!</span>
							<div class="rating">
								<span :class="{'rating-active': checkRating(n, product)}" v-for="(n, i) in 5" :key="i">☆</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</main>
	</div>
</template>

<script>
import MyHeader from "./Header";
import axios from "axios";

export default {
	components: {
		MyHeader,
	},
	data() {
		return {
			showProduct: true,
			products: [],
			cart: [],
			component: 'MyHeader'
			
		};
	},
	computed: {
		cartItemCount() {
			return this.cart.length || "";
		},
	},
	methods: {
		addToCart(aProduct) {
			this.cart.push(aProduct.id);
		},
		showCheckout() {
			this.showProduct = this.showProduct ? false : true;
		},
		checkRating(n, myProduct) {
			return myProduct.rating - n >= 0;
		},
		canAddToCart(aProduct) {
			return aProduct.availableInventory === this.cartCount(aProduct.id);
		},
		cartCount(id) {
			let count = 0;
			for (let i = 0; i < this.cart.length; i++) {
				if (this.cart[i] === id) {
					count++;
				}
			}
			return count;
		},
		compare(a, b) {
			if (a.title.toLowerCase() < b.title.toLowerCase()) return -1;
			if (a.title.toLowerCase() > b.title.toLowerCase()) return 1;
			return 0;
		},
		sortedProducts() {
			if (this.products.length > 0) {
				let productArray = this.products.splice(0);

				return (this.products = productArray.sort(this.compare));
			}
		},
	},
	filters: {
		formatPrice(price) {
			if (!parseInt(price)) return "";
			if (price > 99999) {
				let priceString = (price / 100).toFixed(2);
				let priceArray = priceString.split("").reverse();
				let index = 3;
				while (priceArray.length > index + 3) {
					priceArray.splice(index + 3, 0, "'");
					index += 4;
				}
				return "$" + priceArray.reverse().join("");
			} else {
				return "$" + (price / 100).toFixed(2);
			}
		},
	},
	created() {
		axios.get("/static/products.json").then((response) => {
			this.products = response.data.products;
		});
	},
};
</script>