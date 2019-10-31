<template>
  <div id="app">
    <Navigation />
    <router-view />
  </div>
</template>

<script>
import Navigation from "@/components/Navigation";

export default {
  components: { Navigation }
};
</script>

<style lang="scss">
// $primary: #80daeb;

@import "src/assets/sass/variables.scss";
@import "node_modules/bootstrap/scss/bootstrap";
@import "src/assets/sass/bootswatch.scss";
@import "node_modules/bootstrap-vue/src/index.scss";

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
