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