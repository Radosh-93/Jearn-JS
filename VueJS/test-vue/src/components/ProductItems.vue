<template>
  <li>
    <h4>{{itemX.title}} #{{index}}</h4>
    <p>{{itemX.qty}} items for ${{itemX.cost}}</p>
    <button>View Details</button>
  </li>
</template>

<script>
export default {
  props: ["itemX", "index"],
  data() {
    return {};
  }
};
</script>
<style scoped>
li {
  list-style: none;
  border: 1px solid red;
  width: 100%;
  max-width: 300px;
  padding: 20px;
  margin: 5px 0;
  border-radius: 10px;
}
</style>