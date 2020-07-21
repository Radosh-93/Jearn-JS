<template>
  <div class="product-list">
    <router-link to="/add" class="btn btn-success">Add Product</router-link>
    <ul class="list">
      <ProductItem v-for="(productItem, i) in products" :key="i" :product="productItem" :index="i" />
    </ul>
  </div>
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

<style lang="css">
div.product-list {
  width: 100%;
}
ul.list {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 510px;
  padding: 0;
  margin: 10px auto;
}
btn-success {
  max-width: 70px;
}
</style>