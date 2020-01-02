<template>
  <ul>
    <li>
      <router-link to="/">Home</router-link>
    </li>
    <template v-for="menu in menuobj.menulist">
      <li v-if="menu.highlight" class="headerNav--highlight" v-bind:key="menu.index">
        <router-link :to="/plp/+menu.href">{{ menu.Title }}</router-link>
      </li>
      <li v-if="!menu.highlight" v-bind:key="menu.index">
        <router-link :to="/plp/+menu.href">{{ menu.Title }}</router-link>
      </li>
    </template>
  </ul>
</template>

<script>
require("../header/navigation");
export default {
  data() {
    return {
      menuobj: []
    };
  },
  mounted() {
    this.menuobj = this.$store.state[0].navMenu;
  }
};
</script>