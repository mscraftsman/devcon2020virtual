<template>
  <footer class="global__footer">
    <div class="container__fw">
      <div class="footer__content">
        <div class="left__wrapper">
          <img src="/MSCC-logo-inverted.svg" alt />
        </div>
        <div class="right__wrapper"></div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.global__footer {
  background: black;
  padding: 30px 0;

  .footer__content {
    display: grid;
    grid-template-columns: 0.2fr 1fr;

    .left__wrapper {
      img {
        width: 100px;
      }
    }
  }

  p {
    color: white;
    font-family: var(--font-noto);
    font-size: 12px;
    line-height: 18px;

    &.bold {
      font-weight: 900;
    }
  }

  a {
    margin: 0;
    color: white;
  }
}
</style>
