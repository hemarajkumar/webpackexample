<template>
    <ul class="nav navbar-nav">
         <li class="nav-item active main-link" v-for="menu in menuobj.menulist">
            <a class="nav-link" href="#">
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