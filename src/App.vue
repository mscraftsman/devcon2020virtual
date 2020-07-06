<template>
  <div id="app">
    <HeaderComponent />
    <div class="main__view">
      <router-view />
    </div>
    <FooterComponent />
  </div>
</template>

<script>
import HeaderComponent from "@/components/shared/HeaderComponent.vue";
import FooterComponent from "@/components/shared/FooterComponent.vue";

export default {
  components: {
    HeaderComponent,
    FooterComponent
  }
};
</script>

<style lang="scss">
@import "~normalize.css/normalize";

html {
  --dark: #333;
  --background: #f0f0f0;
  --diamond: #bf8bbc;
  --titanium: #4daee2;
  --platinium: #c74b47;
  --gold: #e97f29;
  --silver: #4bb484;
  --bronze: #f6c376;
  --mediapartner: #ccc;
  --happyhourpartner: #ccc;
  --speaker: #ccc;
  --daycare: #ccc;
  --gutter: 40px;
  --font-bangers: "Bangers", cursive;
  --font-poppins: "Poppins", Helvetica, Arial, sans-serif;
  --font-nunito: "Nunito", Helvetica, Arial, sans-serif;
}

#app {
  font-family: var(--font-poppins);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

*,
body,
html {
  box-sizing: border-box;
}

.main__view {
  margin-top: 65px;
}

.container__fw {
  margin: 0 auto;
  max-width: 1400px;
  width: 100%;
  padding: 0 10px;
}

.title__section {
  text-align: center;

  .sub-text {
    color: var(--platinium);
    font-weight: 400;
    text-transform: uppercase;
    font-size: 18px;
  }

  .title {
    font-size: 70px;
    text-transform: uppercase;
    font-family: var(--font-bangers);
  }
}
</style>
