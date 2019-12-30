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
    <app-banner></app-banner>
    <div class="container">
      <h4>This page content is not fully completed. products are loading through vue</h4>
      <div class="row margin10top col-12 noPad">
        <div id="ProductLists" class="col-12 noPad plp-products">
          <div class="col-12 col-sm-12 col-md-2 noPad">
            <!-- <app-facet></app-facet> -->
          </div>
          <div class="col-12 col-sm-12 col-md-10 noPad">
            <div class="plp-products__pagination col-12 col-sm-12">
              <app-sort></app-sort>
            </div>
            <app-productlist></app-productlist>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "../header/rendertopmenu.vue";
import miniBasket from "../minibasket/minibasket.vue";
import productList from "../plp/products.vue";
import sortOptions from "../plp/sort.vue";
import facet from "../plp/facets.vue";
import banner from "../plp/banner.vue";
export default {
  components: {
    "app-header": Header,
    "app-baskettotal": miniBasket,
    "app-productlist": productList,
    "app-facet": facet,
    "app-sort": sortOptions,
    "app-banner": banner
  },
  data() {
    return {};
  }
};
</script>