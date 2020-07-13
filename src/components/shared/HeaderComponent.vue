<template>
  <header class="global__header">
    <div class="container__fw">
      <div class="inner__grid">
        <div class="left__block">
          <router-link :to="{ name: 'Home' }" class="logo">
            <div class="mscc">
              <img src="/MSCC-logo-inverted.svg" alt />
            </div>
            <div class="text">
              Developers Conference
              <span class="year">2020</span>
            </div>
          </router-link>
        </div>
        <div class="right__block">
          <router-link :to="{ name: 'Code' }" class="header__button light"
            >Code of conduct</router-link
          >
          <!-- <router-link to="/" class="header__button">Calendar +</router-link> -->
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.global__header {
  background: black;
  height: 70px;
  box-shadow: 0 0 13px rgba(0, 0, 0, 0.3);
  font-family: var(--font-bangers);
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 100;

  .inner__grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  .logo {
    margin: 0;
    display: inline-block;
    display: inline-flex;
    align-items: center;
    text-decoration: none;
    color: white;
    font-size: 32px;
    height: 70px;

    .year {
      color: var(--bronze);
    }

    .mscc {
      margin-right: 5px;
      width: 50px;
      height: 50px;
      display: flex;
      align-items: center;
      // border-right: 1px solid rgba(255, 255, 255, 0.3);

      img {
        height: 40px;
      }
    }

    .text {
    }
  }

  .right__block {
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }

  .header__button {
    height: 40px;
    line-height: 40px;
    background: white;
    color: black;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    font-size: 20px;
    margin-right: 10px;
    width: 170px;

    &.light {
      background: var(--titanium);
      color: white;
    }
  }

  img {
    height: 40px;

    .st0 {
      fill: white;
    }
  }
}

@media (max-width: 768px) {
  .global__header {
    .logo {
      .text {
        font-size: 25px;
      }
    }
  }
}

@media (max-width: 500px) {
  .global__header {
    .logo {
      .text {
        font-size: 20px;
      }
    }

    .inner__grid {
      grid-template-columns: 1fr;

      .right__block {
        display: none;
      }
    }
  }
}
</style>
