<template>
  <div class="product-details">
    <div class="wrapper">
      <h2>{{headerH2}}</h2>
      <span>Title: {{product.title}}</span>
      <span>Price: ${{product.cost}}</span>
      <span>Quantity: {{product.qty}}</span>
    </div>
  </div>
</template>

<script>
import ProductService from "../productService";

export default {
  data() {
    return {
      headerH2: "Product Detail",
      product: {}
    };
  },
  created() {
    ProductService.$on(
      "eventviewDetails",
      selectedProduct => (this.product = selectedProduct)
    );
  }
};
</script>

<style lang="css" scoped>
.product-details {
  width: 50%;
  max-width: 400px;
}
div.wrapper {
  display: flex;
  flex-direction: column;
  border: 1px solid red;
  border-radius: 10px;
  padding: 10px;
}
span {
  margin: 5px 0;
}
</style>