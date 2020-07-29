<template>
	<div>
		<my-header :cartItemCount="cartItemCount"></my-header>
		<div class="wrapper">
			<div class="checkout_form">
				<h2>Enter Your Information</h2>
				<div class="form_info">
					<div class="col-md-6">
						<strong>First name:</strong>
						<input class="form-control" v-model.trim.lazy="order.firstName" />
					</div>
					<div class="col-md-6">
						<strong>Last name:</strong>
						<input class="form-control" v-model.trim="order.lastName" />
					</div>
					<div class="form-group">
						<div class="col-md-12">
							<strong>Address:</strong>
						</div>
						<div class="col-md-12">
							<input class="form-control" v-model.trim="order.address" />
						</div>
					</div>
					<div class="form-group">
						<div class="col-md-12">
							<strong>City:</strong>
						</div>
						<div class="col-md-12">
							<input class="form-control" v-model.trim="order.city" />
						</div>
					</div>
					<div class="form-group col-md-2">
						<strong>State:</strong>
						<select class="form-control" v-model="order.state">
							<option disabled value>State</option>
							<option v-for="(state, key) in states" :value="state" :key="key">{{key}}</option>
						</select>
					</div>
					<div class="form-group col-md-6 col-md-offset-4">
						<strong>Zip / Postal Code:</strong>
						<input type="number" class="form-control" v-model.number="order.zip" />
					</div>
					<div class="col-md-6 boxes">
						<input
							type="checkbox"
							id="gift"
							value="true"
							v-model="order.gift"
							:true-value="order.sendGift"
							:false-value="order.dontSendGift"
						/>
						<label for="gift">Ship As Gift?</label>
					</div>
					<div class="col-md-6 boxes">
						<input type="radio" id="home" :value="order.home" v-model="order.method" />
						<label for="home">Home</label>
						<input type="radio" id="business" :value="order.business" v-model="order.method" />
						<label for="business">Business</label>
					</div>
					<div class="col-md-6 button-sub">
						<button class="btn btn-primary" type="submit" @click="submitForm">Place Order</button>
					</div>
					<div class="col-md-12 verify">
						<pre>
              First name: {{order.firstName}}
               Last name: {{order.lastName}}
                 Address: {{order.address}}
                    City: {{order.city}}
                     Zip: {{order.zip}}
                   State: {{order.state}}
                  Method: {{order.method}}
                    Gift: {{order.gift}}
					</pre>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
import Header from "./Header";
export default {
	components: {
		"my-header": Header,
	},
	props: ["cartItemCount"],
	data() {
		return {
			order: {
				firstName: "",
				lastName: "",
				address: "",
				city: "",
				zip: "",
				state: "",
				method: "Home Address",
				business: "Business Address",
				home: "Home Address",
				gift: "Send As A Gift",
				sendGift: "Send As A Gift",
				dontSendGift: "Do Not Send A Gift",
			},
			states: {
				AL: "Alabama",
				AR: "Arisona",
				CA: "California",
				NV: "Nevada",
			},
		};
	},
	methods: {
		submitForm() {
			alert("Submited");
		},
	},
};
</script>

<style lang="css">
pre {
	text-align: left;
}
</style>