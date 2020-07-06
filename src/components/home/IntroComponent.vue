<template>
  <div class="intro__container">
    <div class="container__fw">
      <!-- <div class="date">1 - 4 July 2020</div> -->
      <div class="intro__text">
        <!-- The largest virtual tech conference
        <br />in Mauritius!-->
        <img src="/intro.svg" />
      </div>
      <!-- 
      <div class="button">
        <a href="/" class="cta">Registration</a>
      </div>-->
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.intro__container {
  padding: 10px 0;
  // background-image: linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%);
  // background: var(--bronze);
  background: url("/bg.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;

  .date {
    color: var(--platinium);
    font-size: 40px;
    text-align: center;
    text-transform: uppercase;
    font-weight: 400;
    text-shadow: 3px 5px 0 rgba(0, 0, 0, 0.1);
    margin-bottom: 20px;
  }

  .intro__text {
    font-family: var(--font-bangers);
    font-size: 80px;
    text-align: center;
    text-shadow: 5px 5px 0 rgba(0, 0, 0, 0.1);
    margin-bottom: 30px;

    img {
      max-height: 500px;
    }
  }

  .button {
    text-align: center;
    display: flex;
    justify-content: center;

    .cta {
      height: 60px;
      line-height: 40px;
      color: white;
      display: flex;
      align-items: center;
      justify-content: center;
      text-decoration: none;
      font-size: 20px;
      margin-right: 10px;
      width: 250px;
      background: var(--silver);
      text-transform: uppercase;
      font-weight: 700;
      text-shadow: 5px 5px 0 rgba(0, 0, 0, 0.1);
      box-shadow: 10px 10px 0 rgba(0, 0, 0, 0.1);
    }
  }
}
</style>