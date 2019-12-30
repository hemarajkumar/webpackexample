<template>
  <div>
    <div class="col-12 col-sm-12 noPad plp-products__list">
      <template v-for="lists in productList">
        <div class="plp-products__product" v-bind:key="lists.index">
          <div class="plp-products__img-container">
            <a href="javascript:void(0);" class="js-navigatePdp plp-products__img-container--link">
              <img v-bind:srcset="lists.image" class="plp-products__img" />
            </a>
          </div>
          <span class="plp-products__name">{{ lists.name }}</span>
          <div class="plp-products__price">
            <span class="plp-products__now-price">
              <i v-if="lists.wasprice">Now -</i>
              £{{ lists.price }}
            </span>
            <span v-if="lists.wasprice" class="plp-products__was-price">
              Was -
              <i>£{{ lists.wasprice }}</i>
            </span>
          </div>
          <button class="btn btn-danger plp-products--add-basket-btn">Add to Basket</button>
          <div
            v-if="lists.roundelImg"
            class="plp-products__roundel-product"
            v-bind:style="{ 'background-image': 'url(' + lists.roundelImg + ')'}"
          ></div>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { productObject } from "../store/store";
export default {
  data() {
    return {
      sortObj: productObject.state[0].sortOption,
      productList: []
    };
  },
  computed: {},
  mounted() {
    this.productList = this.updatePlpData();
  },
  methods: {
    updatePlpData: function() {
      productObject.commit("getCategoryDetails");
      return productObject.getters.generateProductList;
    }
  },
  watch: {
    productList: function() {},
    $route() {
      this.productList = [];
      this.productList = this.updatePlpData();
    }
  }
};
</script>