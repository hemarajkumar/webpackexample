<template>
  <div class="banner-container">
    <div class="container banner-container--title">{{ getBannerTitle }}</div>
  </div>
</template>

<script>
export default {
  computed: {
    getBannerTitle() {
      return this.$store.getters.categoryTitle;
    }
  },
  watch: {
    $route() {
      return this.$store.commit("getCategoryTitle");
    }
  }
};
</script>