<template>
  <div id="app">
    <MyHeader>
      <router-link :to="{name: 'home'}" class="logo">R</router-link>
      <h1>Routing in Vue.js</h1>
    </MyHeader>
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import MyHeader from "./components/Header";

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
    MyHeader
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
