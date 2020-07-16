import Vue from 'vue'

export default new Vue({
	data: {
		products: [
			{ id: 1, title: "Product A", qty: 1000, cost: 50 },
			{ id: 2, title: "Product B", qty: 456, cost: 100 },
			{ id: 3, title: "Product C", qty: 2345, cost: 23 },
			{ id: 4, title: "Product D", qty: 150, cost: 34 }
		]
	},
	methods: {
		viewDetails(i) {
			this.$emit("eventviewDetails", this.products[i]);
		}
	}
})