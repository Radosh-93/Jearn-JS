let APP_LOG_LIFECYCLE_EVENTS = true;
let webstore = new Vue({
	el: '#app',
	data: {
		siteName: 'Vue.js Pet Depot',
		product: {
			id: 1001,
			title: 'Cat Food 25lb bag',
			description: 'A 25 pound bag of <em>irresistible</em>' + ' organic goodness for your cat.',
			price: 2000,
			image: 'assets/images/product-fullsize.png'
		},
		cart: [],
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
		addToCart() {
			this.cart.push(this.product.id);
		}
	},

	beforeCreate() {
		if (APP_LOG_LIFECYCLE_EVENTS) console.log('beaforeCreate')
	},
	created() {
		if (APP_LOG_LIFECYCLE_EVENTS) console.log('created')
	},
	beforeMount() {
		if (APP_LOG_LIFECYCLE_EVENTS) console.log('beaforeMount')
	},
	mounted() {
		if (APP_LOG_LIFECYCLE_EVENTS) console.log('mounted')
	},
	beforeUpdate() {
		if (APP_LOG_LIFECYCLE_EVENTS) console.log('beaforeUpdated')
	},
	updated() {
		if (APP_LOG_LIFECYCLE_EVENTS) console.log('updated')
	},
	beforeDestroy() {
		if (APP_LOG_LIFECYCLE_EVENTS) console.log('beaforeDestoy')
	},
	destroyed() {
		if (APP_LOG_LIFECYCLE_EVENTS) console.log('destroyed')
	},
})