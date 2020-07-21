<template>
  <div>
    <form>
      <label for="title">Title</label>
      <input type="text" id="title" placeholder="Enter title" v-model="product.title" />
      <label for="price">Price</label>
      <input type="number" id="price" placeholder="Enter price" v-model="product.cost" />
      <label for="qty">Quantity</label>
      <input type="number" id="qty" placeholder="Enter quantity" v-model="product.qty" />
      <button @click.prevent="addProduct">Submit</button>
      <span v-if="validation">Enter valid title or price</span>
    </form>
  </div>
</template>

<script>
import ProductService from "../productService";
export default {
  data() {
    return {
      product: {
        title: null,
        qty: null,
        cost: null
      },
      validation: false
    };
  },
  methods: {
    addProduct() {
      if (this.product.title !== null && this.product.cost !== null) {
        ProductService.addProductToArray(
          this.product.title,
          this.product.cost,
          this.product.qty
        );
        this.clearInput();
        console.log("if ddd");
      } else {
        this.validation = true;
      }
    },
    clearInput() {
      this.product.title = null;
      this.product.qty = null;
      this.product.cost = null;
      this.validation = false;
    }
  }
};
</script>

<style lang="css">
form {
  display: flex;
  flex-direction: column;
  align-self: start;
  padding: 10px;
  border: 1px solid green;
  border-radius: 10px;
}
form label {
  font-weight: 700;
}
form input {
  margin: 5px 0;
}
form button {
  max-width: 70px;
}
</style>