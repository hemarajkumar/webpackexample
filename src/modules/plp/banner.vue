<template>
  <div class="plp-banner">
    <div class="container plp-banner--title">{{ categoryTitle }}</div>
  </div>
</template>

<script>
import { productObject } from "../store/store";
export default {
  data() {
    return {
      categoryTitle: ""
    };
  },
  mounted() {
    this.categoryTitle = this.getBannerTitle();
  },
  methods: {
    getBannerTitle() {
      productObject.commit("getCategoryDetails");
      return productObject.state[0].categoryTitle;
    }
  },
  watch: {
    categoryTitle: function() {},
    $route() {
      productObject.commit("getCategoryDetails");
      this.categoryTitle = productObject.state[0].categoryTitle;
    }
  }
};
</script>