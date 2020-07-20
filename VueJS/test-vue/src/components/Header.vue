<template>
  <div>
    <div>
      <slot></slot>
    </div>
    <div>
      <slot name="subtitle"></slot>
    </div>
    <div>
      <slot name="copyright">Max. B Inc</slot>
    </div>
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
  text-align: center;
}
h2 {
  color: green;
}
</style>