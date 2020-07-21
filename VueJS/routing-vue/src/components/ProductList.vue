<template>
  <ul>
    <ProductItem v-for="(productItem, i) in products" :key="i" :product="productItem" :index="i" />
  </ul>
</template>

<script>
import ProductItem from "./ProductItems";
import ProductService from "../productService";

export default {
  data() {
    return {
      products: []
    };
  },
  components: {
    ProductItem
  },
  created() {
    this.products = ProductService.products;
  }
};
</script>

<style scoped>
ul {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 400px;
  padding: 0;
  margin: 0 25px;
}
</style>