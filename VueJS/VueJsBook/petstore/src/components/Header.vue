<template>
	<header>
		<div class="wrapper">
			<div class="header">
				<div class="navbar navbar-light">
					<h1>
						<router-link :to="{name: 'iMain'}">{{sitename}}</router-link>
					</h1>
				</div>
				<div class="navbar-right cart">
					<router-link
						tag="button"
						active-class="active"
						class="btn btn-outline-secondary btn-lg"
						:to="{name: 'Form'}"
					>
						{{cartItemCount}}
						<span>Checkout</span>
					</router-link>
				</div>
			</div>
		</div>
	</header>
</template>

<script>
export default {
	name: "my-header",
	data() {
		return {
			sitename: "Vue.js Pet Depot",
		};
	},
	props: ["cartItemCount"],
	methods: {
		showCheckout() {
			this.$router.push({ name: "Form" });
		},
	},
};
</script>

<style lang="css">
.router-link-exact-active {
	color: blue !important;
}
</style>