<template>
  <div>
    <slot></slot>
  </div>
</template>
<script>
export default {
  data() {
    return {
      msg: "Communication between components in Vue.js"
    };
  }
};
</script>
<style lang="css" scoped>
div {
  display: grid;
  grid-template-columns: minmax(50px, 50px) 1fr;
  text-align: center;
}
h2 {
  color: green;
}
.logo {
  background-color: blue;
  text-align: center;
  cursor: pointer;
}
</style>