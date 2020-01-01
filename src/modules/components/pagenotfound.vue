<template>
  <div>
    <header v-bind:routepage="$route.params.category" class="js-router-category navbar">
      <div class="container nopad headerNav" style="position: relative;">
        <nav class="navbar">
          <div id="cssmenu">
            <app-header></app-header>
          </div>
        </nav>
        <app-baskettotal></app-baskettotal>
      </div>
    </header>
    <app-pagenotfound></app-pagenotfound>
  </div>
</template>

<script>
import Header from "../header/rendertopmenu.vue";
import miniBasket from "../minibasket/minibasket.vue";
import pagenotfound from "../pagenotfound/404.vue";
export default {
  components: {
    "app-header": Header,
    "app-baskettotal": miniBasket,
    "app-pagenotfound": pagenotfound
  },
  data() {
    return {};
  }
};
</script>