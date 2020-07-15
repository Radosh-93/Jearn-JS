<template>
  <li>
    <h4>{{item.title}} #{{index}}</h4>
    <p>{{item.qty}} items for ${{item.cost}}</p>
    <button>View Details</button>
  </li>
</template>

<script>
export default {
  props: ["item", "index"],
  data() {
    return {};
  }
};
</script>