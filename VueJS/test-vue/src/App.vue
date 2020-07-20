<template>
  <div id="app">
    <MyHeader>
      <h1>Communication between components in Vue.js</h1>
      <span>{{secondPart}}</span>
      <h2 slot="subtitle">Slots</h2>
      <span slot="subtitle">Slots span</span>
    </MyHeader>
    <div class="container">
      <ProductList />
      <div class="right">
        <span class="btn-action" @click="mode = (mode == 'view' ? 'add' : 'view')">{{mode}}</span>
        <keep-alive>
          <component :is="componentName"></component>
        </keep-alive>
      </div>
    </div>
  </div>
</template>

<script>
import MyHeader from "./components/Header";
import ProductList from "./components/ProductList";
import ProductDetails from "./components/ProductDetails";
import ProductAdd from "./components/AddProduct";

export default {
  data() {
    return {
      secondPart: "Second part",
      mode: "view"
    };
  },
  computed: {
    componentName() {
      return this.mode == "view" ? "ProductAdd" : "ProductDetails";
    }
  },
  components: {
    MyHeader,
    ProductList,
    ProductDetails,
    ProductAdd
  }
};
</script>

<style>
.right {
  width: 50%;
}
h4 {
  margin: 0;
}
.container {
  display: flex;
}
h2 {
  color: red;
}
.btn-action {
  cursor: pointer;
  padding: 5px 10px;
  background-color: blue;
  display: inline-block;
  border-radius: 10px;
  margin-bottom: 10px;
}
</style>
