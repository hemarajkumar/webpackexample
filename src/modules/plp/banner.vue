<template>
  <div class="banner-container">
    <div class="container banner-container--title">{{ categoryTitle }}</div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["categoryTitle"])
  },
  watch: {
    $route() {
      return this.$store.commit("categoryTitle");
    }
  }
};
</script>