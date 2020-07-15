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
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
