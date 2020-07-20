<template>
  <div id="app">
    <MyHeader />
    <div class="container">
      <ProductList />
      <ProductDetails />
    </div>
  </div>
</template>

<script>
import MyHeader from "./components/Header";
import ProductList from "./components/ProductList";
import ProductDetails from "./components/ProductDetails";

export default {
  components: {
    MyHeader,
    ProductList,
    ProductDetails
  }
};
</script>

<style>
h4 {
  margin: 0;
}
.container {
  display: flex;
}
</style>
