<template>
  <div class="schedule__container">
    <div class="schedule__superheros">
      <div class="container__fw">
        <div class="title__section">
          <div class="sub-text">What's on the menu</div>
          <div class="title">Schedule</div>
        </div>

        <div class="selection__day">
          <div class="block">
            <input type="radio" id="day-1" value="day-1" checked v-model="day">
            <label for="day-1">Day 1</label>
          </div>
          <div class="block">
            <input type="radio" id="day-2" value="day-2" v-model="day">
            <label for="day-2">Day 2</label>
          </div>
          <div class="block">
            <input type="radio" id="day-3" value="day-3" v-model="day">
            <label for="day-3">Day 3</label>
          </div>
        </div>

        <img class="schedule-wf" src="/schedule.jpg" alt />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      day: 'day-1'
    }
  }
};
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
    background: url("/superhero-left.png"), url("/superhero-right.png");
    background-repeat: no-repeat;
    background-size: 200px, 200px;
    background-position: center left, bottom right;
  }

  .selection__day {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 60px;
    margin-bottom: 20px;
    grid-gap: 10px;

    input[type="radio"] {
      display: none;
    }

    .block {
      input[type="radio"]:checked + label {
        background: black;
        color: white;
        width: 100%;
        text-align: center;
      }

      label {
        width: 100%;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 60px;
        font-family: var(--font-bangers);
        font-size: 30px;
        border-radius: 255px 15px 225px 15px/15px 225px 15px 255px;
        border: solid #000;
        border-color: #000;

        &:hover {
          cursor: pointer;
        }
      }
    }
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