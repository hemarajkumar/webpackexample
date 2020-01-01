<template>
  <div>
    <div class="banner-container">
      <div class="container banner-container--title">{{ categoryTitle }}</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      categoryTitle: "Page not found. Please check the URL entered"
    };
  }
};
</script>