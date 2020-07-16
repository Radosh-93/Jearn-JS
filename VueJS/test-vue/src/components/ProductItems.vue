<template>
  <li>
    <h4>{{product.title}} #{{index + 1}}</h4>
    <p>{{product.qty}} items for ${{product.cost}}</p>
    <button @click="viewDetailsClicked">View Details</button>
  </li>
</template>

<script>
import ProductService from "../productService";

export default {
  props: {
    product: Object,
    index: Number
  },
  data() {
    return {};
  },
  methods: {
    viewDetailsClicked() {
      //this.$emit("eventForList", this.index); // имитировать событие
      //this.getIndex(this.index); // или возвращать функцию
      ProductService.viewDetails(this.index);
    }
  }
};
</script>
<style scoped>
li {
  list-style: none;
  border: 1px solid red;
  padding: 20px;
  margin-bottom: 10px;
  border-radius: 10px;
}
</style>