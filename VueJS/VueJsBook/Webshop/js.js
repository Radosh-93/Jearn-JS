let APP_LOG_LIFECYCLE_EVENTS = true;
let webstore = new Vue({
	el: '#app',
	data: {
		siteName: 'Vue.js Pet Depot',
		products: [],
		order: {
			firstName: '',
			lastName: '',
			address: '',
			city: '',
			zip: '',
			state: '',
			method: 'Home Address',
			business: 'Business Address',
			home: 'Home Address',
			gift: 'Send As A Gift',
			sendGift: 'Send As A Gift',
			dontSendGift: 'Do Not Send A Gift'
		},
		cart: [],
		showProduct: true,
		states: {
			AL: 'Alabama',
			AR: 'Arisona',
			CA: 'California',
			NV: 'Nevada'
		}
	},
	computed: {
		cartItemCount() {
			return this.cart.length || ''
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
		}
	},
	methods: {
		addToCart(aProduct) {
			this.cart.push(aProduct.id);
		},
		showCheckout() {
			this.showProduct = this.showProduct ? false : true
		},
		submitForm() {
			alert('Submited')
		},
		checkRating(n, myProduct) {
			return myProduct.rating - n >= 0
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
			return count
		},
		sortedProducts() {
			if (this.products.length > 0) {
				let productArray = this.products.splice(0);
				function compare(a, b) {
					if (a.title.toLowerCase() < b.title.toLowerCase()) return -1
					if (a.title.toLowerCase() > b.title.toLowerCase()) return 1
					return 0
				}
				return this.products = productArray.sort(compare)
			}
		}
	},

	created() {
		axios.get('./products.json').then((response) => {
			this.products = response.data.products;
			console.log(this.products)
		})
	},

})