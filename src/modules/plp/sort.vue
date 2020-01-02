<template>
  <div v-if="getCategoryId">
    <select class="plp-products__sort-by js-sort-by">
      <option value="default">Sort By</option>
      <option
        v-for="sortOption in sortOption.lists"
        v-bind:value="sortOption.id"
        v-bind:key="sortOption.id"
      >{{ sortOption.title }}</option>
    </select>
  </div>
</template>

<script>
export default {
  computed: {
    sortOption() {
      return this.$store.state[0].sortList;
    },
    getCategoryId() {
      return this.$store.state[0].categoryId;
    }
  },
  watch: {
    $route() {
      // function update
    }
  }
};
</script>