<template>
  <li>
    <h4>{{product.title}} #{{product.id}}</h4>
    <p>{{product.qty}} items for ${{product.cost}}</p>
    <button class="btn btn-primary" @click="viewDetailsClicked">View Details</button>
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
      //ProductService.viewDetails(this.product.id);
      this.$router.push("/detail/" + this.product.id);
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