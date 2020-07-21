<template>
  <div class="product-details">
    <div class="wrapper">
      <h2>{{headerH2}}</h2>
      <span>Title: {{product.title}} #{{product.id}}</span>
      <span>Price: ${{product.cost}}</span>
      <span>Quantity: {{product.qty}}</span>
      <div class="buttons">
        <button :disabled="deactivePrev" class="btn btn-primary" @click="prevProduct">Prev. product</button>
        <button :disabled="deactiveNext" class="btn btn-primary" @click="nextProduct">Next product</button>
      </div>
    </div>
  </div>
</template>

<script>
import ProductService from "../productService";

export default {
  data() {
    return {
      headerH2: "Product Detail",
      product: {},
      index: null,
      deactiveNext: false,
      deactivePrev: false
    };
  },
  methods: {
    nextProduct() {
      let nextId = ProductService.products[this.index + 1].id;
      this.$router.push({ path: `/detail/${nextId}` });
    },
    prevProduct() {
      let prevId = ProductService.products[this.index - 1].id;
      this.$router.push({ path: `/detail/${prevId}` });
    }
  },

  created() {
    ProductService.$on("eventviewDetails", (selectedProduct, i) => {
      this.product = selectedProduct;
      this.index = i;
    });
  },
  mounted() {
    ProductService.viewDetails(this.$route.params.id);
  },
  updated() {
    this.deactiveNext =
      this.index + 1 == ProductService.products.length ? true : false;
    this.deactivePrev = this.index == 0 ? true : false;
  },
  watch: {
    "$route.params.id"(id) {
      ProductService.viewDetails(id);
    }
  }
};
</script>

<style lang="css" scoped>
.product-details {
  width: 100%;
  max-width: 400px;
}
div.wrapper {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border: 1px solid red;
  border-radius: 10px;
  padding: 10px;
}
span {
  margin: 5px 0;
}
</style>