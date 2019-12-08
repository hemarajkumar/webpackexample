<template>
  <ul>
    <li v-for="menu in menuobj.menulist">
            <a v-bind:href="menu.href">
                {{ menu.Title }}
            </a>
        </li>
    </ul>
</template>

<script>
import { navmenu } from "../common/jsondata";
export default {
  name: "menu-list",
  data: () => ({
    menuobj: []
  }),
  mounted() {
    this.menuobj = navmenu;
  }
};
</script>