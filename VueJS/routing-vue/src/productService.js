import Vue from 'vue';
import _ from 'lodash'

export default new Vue({
	data: {
		products: [
			{ id: 1, title: "Product A", qty: 1000, cost: 50 },
			{ id: 2, title: "Product B", qty: 456, cost: 100 },
			{ id: 3, title: "Product C", qty: 2345, cost: 23 },
			{ id: 10, title: "Product D", qty: 150, cost: 34 }
		]
	},
	methods: {
		viewDetails(id) {
			let viewToDetails = _.find(this.products, { id: parseInt(id) })
			let indexProd = this.products.indexOf(viewToDetails)
			this.$emit("eventviewDetails", viewToDetails, indexProd);
		},
		addProductToArray(title, cost, qty) {
			let id = this.products[this.products.length - 1].id + 1;
			this.products.push({ id, title, qty, cost })
		},
		productIndex() {

		}
	}
})