<template>
  <div id="app">
    <product-list-one v-bind:products="products"></product-list-one>
    <product-list-two v-bind:products="products"></product-list-two>
  </div>
  <!-- <div class="plp-products__product">
    <div class="plp-products__img-container">
      <a href="javascript:void(0);" class="js-navigatePdp plp-products__img-container--link">
        <img srcset="dist/images/clothing2.jpg" class="plp-products__img" />
      </a>
    </div>
    <span class="plp-products__name">Womens wear 1</span>
    <div class="plp-products__price">
      <span class="plp-products__now-price">£29.00</span>
    </div>
    <button class="btn btn-danger plp-products--add-basket-btn">Add to Basket</button>
  </div>-->
</template>

<script>
import ProductListOne from "./components/ProductListOne.vue";
import ProductListTwo from "./components/ProductListTwo.vue";
export default {
  name: "app",
  components: {
    "product-list-one": ProductListOne,
    "product-list-two": ProductListTwo
  },
  data() {
    return {
      products: [
        { name: "Banana Skin", price: 20 },
        { name: "Shiny Star", price: 40 },
        { name: "Green Shells", price: 60 },
        { name: "Red Shells", price: 80 }
      ]
    };
  }
};
</script>



<script>
// import { navmenu } from "../common/jsondata";
// export default {
//   name: "menu-list",
//   data: () => ({
//     menuobj: []
//   }),
//   mounted() {
//     this.menuobj = navmenu;
//   }
// };
//
</script>