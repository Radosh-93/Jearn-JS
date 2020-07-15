<template>
  <div id="app">
    <MyHeader />
    <div>
      <ProductList />
    </div>
  </div>
</template>

<script>
import MyHeader from "./components/Header";
import ProductList from "./components/ProductList";

export default {
  name: "App",
  components: {
    MyHeader,
    ProductList
  }
};
</script>

<style>
h4 {
  margin: 0;
}
</style>
