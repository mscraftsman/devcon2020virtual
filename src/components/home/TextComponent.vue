<template>
  <div class="text__container">
    <div class="container__fw">
      <div class="title__section">
        <div class="sub-text">Innovation. Technology. Community.</div>
        <div class="title">Why a virtual conference this year?</div>
        <div class="content">
          <p>As you are aware, we are at the moment going through a very hard time with the pandemic, COVID-19 (novel Coronavirus) all over the world. Due to various lock downs and travel bans, we had no choice than to postpone the Developers Conference 2020 at a later stage.</p>
          <p>However, being the largest IT Community in Mauritius, we are so passionate about the tech world that we have decided to instead hold a virtual conference to unite all our geeks over 3 days of knowledge sharing. The Organising Team has created a platform where we can virtually get together and enjoy those sessions none of us want to miss out.</p>
          <p>So, save the dates and join us for the Virtual Developers Conference 2020 with multiple streams hosted from around the world for 3 days of technical geekery in the anticipation of our yearly Developers Conference.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.text__container {
  padding: 60px 0;
  text-align: center;
  background: url("/cloud-right.svg");
  background-size: 400px;
  background-position: bottom right;
  background-repeat: no-repeat;

  // .sub-text {
  //   text-align: center;
  // }

  // .title {
  //   text-align: center;
  //   font-size: 45px;
  // }

  .content {
    text-align: center;

    p {
      font-weight: 300;
      line-height: 32px;
      font-size: 18px;
    }
  }
}

@media (max-width: 768px) {
  .text__container {
    background-size: 200px;
  }

  .title__section {
    .sub-text {
      font-size: 16px;
    }
    .title {
      font-size: 40px;
    }
  }
}

@media (max-width: 1660px) {
  .text__container {
    background-size: 290px;
  }
}

@media (max-width: 1200px) {
  .text__container {
    padding-bottom: 110px;
  }
}

@media (max-width: 500px) {
  .text__container {
    background-size: 250px;
    padding-bottom: 60px;
  }
}
</style>