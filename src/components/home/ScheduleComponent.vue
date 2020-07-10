<template>
  <div class="schedule__container">
    <div class="schedule__superheros">
      <div class="container__fw">
        <div class="title__section">
          <div class="sub-text">What's on the menu</div>
          <div class="title">Schedule</div>
        </div>
        <img class="schedule-wf" src="/schedule.jpg" alt />
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.schedule__container {
  margin-bottom: 10vw;
  padding: 0;
  background: #fcfcfc;
  background: url("/radial.svg");
  background-position: center top;
  background-repeat: no-repeat;
  background-size: cover;

  .schedule__superheros {
    width: 100%;
    background: url("/superheros.png");
    background-repeat: no-repeat;
    background-size: 250px;
    background-position: bottom left;
  }

  .title__section {
    margin-bottom: 40px;
  }

  .schedule-wf {
    width: 100%;
    margin-top: 20px;
  }
}
</style>