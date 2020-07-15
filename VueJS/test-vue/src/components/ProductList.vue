<template>
  <ul>
    <ProductItem v-for="(item, i) in products" :key="i" :itemX="item" :index="(i + 1)" />
  </ul>
</template>

<script>
import ProductItem from "./ProductItems";
export default {
  data() {
    return {
      products: [
        { title: "Product A", qty: 1000, cost: 50 },
        { title: "Product B", qty: 456, cost: 100 },
        { title: "Product C", qty: 2345, cost: 23 },
        { title: "Product D", qty: 150, cost: 34 }
      ]
    };
  },
  components: {
    ProductItem
  }
};
</script>

<style scoped>
ul {
  display: flex;
  flex-direction: column;
  justify-content: end;
}
</style>