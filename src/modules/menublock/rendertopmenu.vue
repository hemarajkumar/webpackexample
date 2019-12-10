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
  export default {
    data () {
      return {
        menuobj: []
      }
    },
    mounted() {
      this.menuobj = this.$store.state.data.menu;
    }
  }; 
</script>