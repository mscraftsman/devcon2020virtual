<template>
  <div class="schedule__container">
    <div class="container__fw">
      <div class="title__section">
        <div class="sub-text">What's on the menu</div>
        <div class="title">Schedule</div>
      </div>
      <img class="schedule-wf" src="/schedule.jpg" alt />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.schedule__container {
  padding: 0px 0px 100px 0;
  width: 100%;
  background: url("/superheros.png");
  background-repeat: no-repeat;
  background-size: 250px;
  background-position: center left;

  .title__section {
    margin-bottom: 40px;
  }

  .schedule-wf {
    width: 100%;
  }
}
</style>