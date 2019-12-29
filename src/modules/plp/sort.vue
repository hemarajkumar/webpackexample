<template>
  <div>
    <select @change="updateSort($event.target.value)" class="plp-products__sort-by js-sort-by">
      <option value="default">Sort By</option>
      <option
        v-for="sortOption in sortObj.lists"
        v-bind:value="sortOption.id"
        v-bind:key="sortOption.id"
      >{{ sortOption.title }}</option>
    </select>
  </div>
</template>

<script>
import { productObject, sortOption } from "../store/store";
import { mapMutations } from "vuex";
export default {
  data() {
    return {
      sortObj: []
    };
  },
  mounted() {
    this.sortObj = sortOption.state[0].data;
  },
  computed: {
    sortOptionSelected() {
      var sortTypeSelected = sortOption.state[0].sortOption;
      return {
        sortTypeSelected
      };
    }
  },
  methods: {
    updateSort: function(event) {
      productObject.commit("updateSortOption", event);
    }
  }
};
</script>