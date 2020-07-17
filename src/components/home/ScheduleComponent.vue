// prettier-ignore
<template>
  <div class="schedule__container">
    <div class="schedule__superheros">
      <div class="container__fw">
        <div class="title__section">
          <div class="sub-text">What's on the menu</div>
          <div class="title">Schedule</div>
        </div>

        <!-- <img class="schedule-wf" src="/schedule.jpg" alt /> -->

        <div class="schedule__parent__container">
          <div class="schedule-container">
            <div class="date-track">
              <div
                class="day-item"
                :class="{ active: currentDay == 0 }"
                @click="currentDay = 0"
              >
                Day 1
              </div>
              <div
                class="day-item"
                :class="{ active: currentDay == 1 }"
                @click="currentDay = 1"
              >
                Day 2
              </div>
              <div
                class="day-item"
                :class="{ active: currentDay == 2 }"
                @click="currentDay = 2"
              >
                Day 3
              </div>
            </div>

            <div class="room-track">
              <button title="prev" v-if="isMobile" @click="prev">&lt;</button>
              <css-grid
                class="room-name"
                :columns="currentGrid.columns"
                :rows="currentGrid.rows"
                :areas="currentGrid.areas"
              >
                <css-grid-item
                  :area="room"
                  class="room-item uppercase text-sm"
                  :data-room="index"
                  v-for="(room, index) in displayedRooms"
                  :key="index"
                >
                  {{ roomRepo[room] }}
                </css-grid-item>
              </css-grid>
              <button title="next" v-if="isMobile" @click="next">&gt;</button>
            </div>

            <div class="programme-track">
              <css-grid
                :columns="currentGrid.columns"
                :rows="currentGrid.rows"
                :areas="currentGrid.areas"
                class="programme-track-container"
                :gap="isMobile ? '4px' : '10px'"
              >
                <!-- Time -->
                <css-grid-item
                  area="Time"
                  class="time-item"
                  v-for="(time, index) in times.slice(timeStart, timeEnd)"
                  :style="timeStartCoordinate(time)"
                  :key="index"
                >
                  <span>
                    {{ time }}
                  </span>
                </css-grid-item>

                <!-- Programmes -->
                <css-grid-item
                  :area="'r' + programme.roomId"
                  class="programme-item box"
                  v-for="(programme, index) in displayedSessions"
                  :style="programmeStartCoordinate(programme)"
                  :room-id="getRoomId(programme)"
                  :key="index"
                >
                  <div
                    class="session__block"
                    @click="openModal(programme.id, getRoomId(programme))"
                  >
                    <div class="title">
                      {{ checkLength(programme.title) }}
                    </div>

                    <div
                      v-if="programme.speakers.length > 0"
                      class="speaker__info"
                    >
                      <template
                        v-if="
                          programme.speakers && programme.speakers.length == 1
                        "
                      >
                        <div
                          v-for="(speaker, index) in programme.speakers"
                          :key="index"
                          class="speaker"
                        >
                          <div class="image">
                            <img
                              :src="speakersById[speaker.id].profilePicture"
                              :alt="speaker.name"
                            />
                          </div>
                          <div class="info">
                            {{ checkNameLength(speaker.name) }}
                          </div>
                        </div>
                      </template>
                      <template
                        v-if="
                          programme.speakers && programme.speakers.length > 1
                        "
                      >
                        <div
                          v-for="(speaker, index) in programme.speakers"
                          :key="index"
                          class="speaker multiple"
                        >
                          <div class="image">
                            <img
                              :src="speakersById[speaker.id].profilePicture"
                              :alt="speaker.name"
                            />
                          </div>
                        </div>
                      </template>
                    </div>
                  </div>
                  <!-- <router-link
                    :to="{ name: 'session', params: { id: programme.id } }"
                    class="session__block"
                  >
                  </router-link> -->
                </css-grid-item>
              </css-grid>
            </div>

            <div class="room-track">
              <button title="prev" v-if="isMobile" @click="prev">&lt;</button>
              <css-grid
                class="room-name"
                :columns="currentGrid.columns"
                :rows="currentGrid.rows"
                :areas="currentGrid.areas"
              >
                <css-grid-item
                  :area="room"
                  class="room-item uppercase text-sm"
                  :data-room="index"
                  v-for="(room, index) in displayedRooms"
                  :key="index"
                >
                  {{ roomRepo[room] }}
                </css-grid-item>
              </css-grid>
              <button title="next" v-if="isMobile" @click="next">&gt;</button>
            </div>

            <div class="date-track">
              <div
                class="day-item"
                :class="{ active: currentDay == 0 }"
                @click="currentDay = 0"
              >
                Day 1
              </div>
              <div
                class="day-item"
                :class="{ active: currentDay == 1 }"
                @click="currentDay = 1"
              >
                Day 2
              </div>
              <div
                class="day-item"
                :class="{ active: currentDay == 2 }"
                @click="currentDay = 2"
              >
                Day 3
              </div>
            </div>
          </div>
          <ViewportListener v-model="viewport" />
        </div>
      </div>
    </div>
    <modal
      name="session_modal"
      :class="['session_modal', 'r' + modal_info.theme]"
      :width="1100"
      height="auto"
      :adaptive="true"
      :clickToClose="false"
      :scrollable="true"
    >
      <div class="close__button">
        <button @click="closeModal()">
          <img src="/close.svg" alt="close" />
        </button>
      </div>
      <div class="content">
        <div class="left__wrapper">
          <h3>{{ modal_info.title }}</h3>
          <div class="location__time">
            <div class="location">
              <span class="icon">
                <img src="/location.svg" alt="" />
              </span>
              <span class="data">
                {{ modal_info.room }}
              </span>
            </div>
            <div class="time">
              <span class="icon">
                <img src="/time.svg" alt="" />
              </span>
              <span class="data">
                {{ getDay(modal_info.startsAt) }}
                {{ time(modal_info.startsAt) }} -
                {{ time(modal_info.endsAt) }}
              </span>
            </div>
          </div>
          <div class="description">
            <p v-html="modal_info.description"></p>
          </div>
        </div>
        <div class="right__wrapper">
          <div
            :class="[
              'author__information',
              {
                multiple: modal_info.speakers && modal_info.speakers.length > 1,
              },
            ]"
          >
            <div
              class="speaker"
              v-for="(speaker, index) in modal_info.speakers"
              :key="index"
            >
              <div class="profile__name">
                <div class="image">
                  <img
                    :src="speakersById[speaker.id].profilePicture"
                    :alt="speaker.name"
                  />
                </div>
                <div class="info">
                  <div class="name">
                    {{ speaker.name }}
                  </div>
                  <div
                    class="profession"
                    v-if="speakersById[speaker.id].tagLine"
                  >
                    {{ speakersById[speaker.id].tagLine }}
                  </div>
                </div>
              </div>
              <div class="bio">
                <p v-html="speakersById[speaker.id].bio"></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </modal>
  </div>
</template>

<script>
import { CssGrid, CssGridItem, ViewportListener } from "vue-css-grid";
import { mapGetters } from "vuex";
import { time as timeHelper, getDay as getDayHelper } from "@/helpers";

export default {
  data() {
    return {
      day: "day-1",
      viewport: { width: 320, height: 568 },
      programmes: null,
      schedule_height: 50,
      times: [
        "09:00",
        "09:30",
        "10:00",
        "10:30",
        "11:00",
        "11:30",
        "12:00",
        "12:30",
        "13:00",
        "13:30",
        "14:00",
        "14:30",
        "15:00",
        "15:30",
        "16:00",
        "16:30",
        "17:00",
        "17:30",
      ],
      MINUTES_TO_EIGHT_OCLOCK: 8 * 67,
      timeStart: 0,
      timeSpan: 48,
      timeScale: 5,
      rooms: ["r12900", "r12901", "r12902", "r12903"],
      roomRepo: {
        r12900: "Batcave",
        r12901: "Avengers Tower",
        r12902: "New Asgard",
        r12903: "Kryptone",
      },
      availableRooms: [
        { id: "r12900", index: 0 },
        { id: "r12901", index: 1 },
        { id: "r12902", index: 2 },
        { id: "r12903", index: 3 },
      ],
      currentDay: 0,
      currentRoom: { id: "r12900", index: 0 },
      modal_info: {},
    };
  },
  methods: {
    time: timeHelper,
    getDay: getDayHelper,
    openModal(id, room) {
      let info = this.sessionsById[id];
      this.modal_info = info;
      this.modal_info.theme = room;

      this.$modal.show("session_modal");
    },
    closeModal() {
      this.$modal.hide("session_modal");
    },
    checkLength(title) {
      if (title.length > 60) {
        return title.substring(0, 60) + "...";
      } else {
        return title;
      }
    },
    checkNameLength(name) {
      if (name.length > 20) {
        return name.substring(0, 20) + "...";
      } else {
        return name;
      }
    },
    timeStartCoordinate(time) {
      let temp = time.split(":");
      let minutes = parseInt(temp[1]);
      let hours = parseInt(temp[0]) * 60;
      let result = hours + minutes;
      // let duration = "30";
      let duration = "30";
      const offsetResult = result - this.MINUTES_TO_EIGHT_OCLOCK;

      return {
        top: offsetResult * (this.timeScale * 0.7) + "px",
        height: duration * (this.timeScale * 0.7) + "px",
      };
    },
    // Takes a programme object
    getRoomId(programme) {
      return programme.roomId;
    },
    programmeStartCoordinate(programme) {
      console.log(programme);

      let startMinutes = new Date(programme.startsAt).getMinutes();
      let startHours = new Date(programme.startsAt).getHours() * 60;
      let startCoordinate =
        startHours + startMinutes - this.MINUTES_TO_EIGHT_OCLOCK;
      let endMinutes = new Date(programme.endsAt).getMinutes();
      let endHours = new Date(programme.endsAt).getHours() * 60;
      let endCoordinate = endHours + endMinutes - this.MINUTES_TO_EIGHT_OCLOCK;
      let duration = endCoordinate - startCoordinate;
      return {
        top: startCoordinate * (this.timeScale * 0.7) + "px",
        height: duration * (this.timeScale * 0.7) + "px",
      };
    },
    next() {
      this.changeRoom(true);
    },
    prev() {
      this.changeRoom(false);
    },
    changeRoom(next) {
      const currentIndex = this.availableRooms.findIndex((room) => {
        return room.id === this.currentRoom.id;
      });
      const prev = !next;
      const lastIndex = this.availableRooms.length - 1;
      const isFirst = currentIndex === 0;
      const isLast = currentIndex === lastIndex;
      if (next && isLast) {
        this.currentRoom = this.availableRooms[0];
        return;
      }
      if (next && !isLast) {
        const nextIndex = currentIndex + 1;
        this.currentRoom = this.availableRooms[nextIndex];
        return;
      }
      if (prev && isFirst) {
        this.currentRoom = this.availableRooms[lastIndex];
        return;
      }
      if (prev && !isFirst) {
        const prevIndex = currentIndex - 1;
        this.currentRoom = this.availableRooms[prevIndex];
        return;
      }
    },
  },
  computed: {
    timeEnd() {
      return this.timeStart + this.timeSpan;
    },
    ...mapGetters({
      sessions: "getSessions",
      speakers: "getSpeakers",
      speakersById: "getSpeakersById",
      sessionsById: "getSessionsById",
    }),
    currentDaySessions() {
      let result = null;
      if (this.sessions.length > 0) {
        result = this.sessions[this.currentDay].sessions;
      }
      return result;
    },
    isMobile() {
      return !(this.viewport.isDesktop || this.viewport.isLargeDesktop);
    },
    currentGrid() {
      if (this.isMobile) {
        return {
          columns: ["50px", "1fr"],
          rows: ["1fr"],
          areas: [["Time", this.currentRoom.id]],
        };
      }
      return {
        columns: ["50px", "1fr", "1fr", "1fr", "1fr"],
        rows: ["1fr"],
        areas: [["Time", "r12900", "r12901", "r12902", "r12903"]],
      };
    },
    displayedRooms() {
      const currentRoomIndex = this.currentRoom.index;
      if (this.isMobile) {
        return this.rooms.slice(currentRoomIndex, currentRoomIndex + 1);
      }
      return this.rooms;
    },
    displayedSessions() {
      if (!this.currentDaySessions) {
        return [];
      }
      if (this.isMobile) {
        return this.currentDaySessions.filter((session) => {
          // * Keep coercion (`==` instead of `===`) here. Please.
          // * Processing `this.currentRoom` directly here to trigger reactivity.
          // * The update is not triggered when declared in a variable.
          return session.roomId == this.currentRoom.id.replace("r", "");
        });
      }
      return this.currentDaySessions;
    },
  },
  mounted() {
    // this.fetchSessions();
  },
  components: {
    CssGrid,
    CssGridItem,
    ViewportListener,
  },
  async created() {
    const stats = this.$store.dispatch("FETCH_STATS");
    const sponsors = this.$store.dispatch("FETCH_SPONSORS");
    const speakers = this.$store.dispatch("FETCH_SPEAKERS");
    const sessions = this.$store.dispatch("FETCH_SESSIONS");
    const credits = this.$store.dispatch("FETCH_CREDITS");
    const promises = [stats, sponsors, speakers, sessions, credits];
    if (!Promise.allSettled) {
      try {
        await Promise.all(promises);
      } catch (error) {
        // * Something did not load. Let's try again.
        await Promise.all(promises);
      }
      return;
    }
    Promise.allSettled(promises);
  },
};
</script>

<style lang="scss" scoped>
.schedule__container {
  --red: #f53f32;
  --blue: #14a0c7;
  --yellow: #fed02b;
  --green: #45b656;

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
    grid-template-rows: 70px;
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
        cursor: pointer;

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

.schedule-container {
  --sess-height: 100px;

  width: 100%;
  height: 100%;
  display: block;

  .date-track {
    color: white;
    margin-bottom: 25px;

    .day-item {
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
      background: white;
      color: black;
      margin-right: 20px;
      cursor: pointer;

      &:hover {
        background: red;
        color: white;
      }

      &:last-child {
        margin-right: 0;
      }

      &.active {
        background: black;
        color: white;
        /*background: theme(colors.blue.500);*/
      }
    }
  }

  .time-track {
    grid-area: time;
  }

  .room-track {
    font-family: var(--font-bangers);
    font-size: 25px;
    height: 50px;
    border-bottom: 2px solid black;
    margin-bottom: 10px;
    border-radius: 255px 15px 225px 15px/15px 225px 15px 255px;

    .room-item {
      font-size: 30px;

      &[data-room="0"] {
        color: var(--red);
      }
      &[data-room="1"] {
        color: var(--blue);
      }
      &[data-room="2"] {
        color: var(--yellow);
      }
      &[data-room="3"] {
        color: var(--green);
      }
    }
  }

  .programme-track {
    // background: green;
    height: 1900px;
    /*overflow-y: scroll;*/
    .programme-track-container {
      /*scroll-snap-type: y proximity;*/
    }
  }
}

.date-track {
  display: flex;
  & > div {
    flex: 1;
  }
  // justify-content: space-between;
}

.programme-item {
  // width: 250px;
  /*border: 1px solid black;*/
}

.time-item {
  position: relative;
  background: black;
  color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--font-bangers);
  font-size: 24px;
  border-radius: 255px 15px 225px 15px/15px 225px 15px 255px;
  border: solid #000;
  border-color: #000;
  height: var(--sess-height);
  transform: scale(0.95);

  span {
    transform: rotate(-90deg);
  }

  &:nth-child(4n + 1) {
    background: var(--red);
  }
  &:nth-child(4n + 2) {
    background: var(--blue);
  }
  &:nth-child(4n + 3) {
    background: var(--green);
  }
  &:nth-child(4n + 4) {
    background: var(--yellow);
  }
}
.room-item {
  height: 30px;
}
.room-item {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  /*scroll-snap-align: start;*/
  text-align: center;
  overflow: hidden;
  text-overflow: ellipsis;
}

.programme-item {
  height: var(--sess-height);
  position: relative;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  /*scroll-snap-align: start;*/
  text-align: left;
  overflow: hidden;
  text-overflow: ellipsis;
  font-family: var(--font-bangers);
  background: white;
  color: black;
  cursor: pointer;

  a {
    text-decoration: none;
    color: black;
    font-size: 20px;
  }

  .session__block {
    position: relative;
    height: 100%;
    width: 100%;

    .title {
      padding: 15px 18px;
      font-size: 23px;
      // text-shadow: 0px 0px 2px rgba(0, 0, 0, 1);
    }
    .speaker__info {
      position: absolute;
      bottom: 0px;
      right: 0;
      background: black;
      height: 35px;
      color: white;
      display: flex;
      align-items: center;
      justify-content: center;

      // transform: skew(5deg);

      .speaker {
        display: grid;
        grid-template-columns: 30px 1fr;

        &.multiple {
          display: flex;

          .image {
            margin-right: 5px;

            img {
              left: -10px;
            }
          }
        }

        .image {
          img {
            position: relative;
            left: -20px;
            width: 45px;
            border-radius: 45px;
            top: -2px;
            box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.5);
            // border: 1px solid black;
          }
        }
        .info {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0 10px 0 5px;
          position: relative;
          font-size: 12px;
          font-family: var(--font-poppins);
          font-weight: 700;
          text-transform: uppercase;
        }
      }
    }
  }
}
.box {
  border: 3px solid black;
  border-radius: 255px 15px 225px 15px/15px 225px 15px 255px;

  // &:nth-child(2n + 1) {
  //   border-radius: 255px 45px 25px 35px/15px 255px 15px 255px;
  // }
  // &:nth-child(3n + 1) {
  //   border-radius: 45px 55px 5px 5px/15px 15px 15px 155px;
  // }

  &[room-id="12900"] {
    .session__block {
      background: url("/red_bg.png");
      background-position: center center;
      background-size: cover;

      .title {
        color: var(--red);
      }
      .speaker__info {
        background: var(--red);
      }

      &:hover {
        background: var(--red);

        .title {
          color: white;
        }
        .speaker__info {
          background: black;
        }
      }
    }
  }
  &[room-id="12901"] {
    .session__block {
      // background: url("/blue_bg.png");
      // background-position: center center;
      // background-size: cover;

      .title {
        color: var(--blue);
      }
      .speaker__info {
        background: var(--blue);
      }

      &:hover {
        background: var(--blue);

        .title {
          color: white;
        }
        .speaker__info {
          background: black;
        }
      }
    }
  }
  &[room-id="12902"] {
    .session__block {
      background: url("/yellow_bg.png");
      background-position: center center;
      background-size: cover;

      .title {
        color: var(--yellow);
      }
      .speaker__info {
        background: var(--yellow);
        color: black;
      }

      &:hover {
        background: var(--yellow);

        .title {
          color: white;
        }
        .speaker__info {
          background: black;
          color: white;
        }
      }
    }
  }
  &[room-id="12903"] {
    .session__block {
      background: url("/green_bg.png");
      background-position: center center;
      background-size: cover;

      .title {
        color: var(--green);
      }
      .speaker__info {
        background: var(--green);
      }

      &:hover {
        background: var(--green);

        .title {
          color: white;
        }
        .speaker__info {
          background: black;
        }
      }
    }
  }
}

@media (max-width: 1024px) {
  .schedule__container {
    .schedule__superheros {
      background: initial;
    }
  }

  .schedule-container {
    .room-track {
      display: grid;
      grid-template-columns: 50px 1fr 50px;

      button {
        background: black;
        color: white;
        border: 0;
      }

      .room-name {
        display: block !important;

        .room-item {
          color: rgb(177, 138, 138);
        }
      }
    }
  }
}
</style>

<style lang="scss">
.session_modal {
  --red: #f53f32;
  --blue: #14a0c7;
  --yellow: #fed02b;
  --green: #45b656;

  &.r12900 {
    .vm--modal {
      .content {
        .left__wrapper {
          h3 {
            color: var(--red);
          }
        }
        .right__wrapper {
          background: var(--red);
          .author__information {
            background: var(--red);
          }
        }
      }
    }
  }
  &.r12901 {
    .vm--modal {
      .content {
        .left__wrapper {
          h3 {
            color: var(--blue);
          }
        }
        .right__wrapper {
          background: var(--blue);
          .author__information {
            background: var(--blue);
          }
        }
      }
    }
  }
  &.r12902 {
    .vm--modal {
      .content {
        .left__wrapper {
          h3 {
            color: var(--yellow);
          }
        }
        .right__wrapper {
          background: var(--yellow);
          color: black;

          .author__information {
            background: var(--yellow);
            color: black;

            .speaker {
              .profile__name {
                display: flex;

                .info {
                  color: black;
                }
                .bio {
                  color: black;
                  p {
                    color: black;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  &.r12903 {
    .vm--modal {
      .content {
        .left__wrapper {
          h3 {
            color: var(--green);
          }
        }
        .right__wrapper {
          background: var(--green);
          .author__information {
            background: var(--green);
          }
        }
      }
    }
  }

  .close__button {
    height: 50px;
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    position: absolute;
    right: 0;
    top: 0;

    button {
      height: 40px;
      margin-right: 20px;
      background: none;
      border: 0;
      cursor: pointer;

      img {
        height: 30px;
      }
    }
  }

  .vm--modal {
    border-radius: 255px 15px 225px 15px/15px 225px 15px 255px;
    border: 2px solid #000;
    border-color: #000;
    max-height: 90vh;
    overflow: scroll;

    .content {
      display: grid;
      grid-template-columns: 50% 50%;

      .left__wrapper {
        border-radius: 255px 15px 225px 15px/15px 225px 15px 255px;
        border-right: 2px solid #000;

        h3 {
          text-transform: uppercase;
          font-size: 45px;
          font-family: var(--font-bangers);
          letter-spacing: 1px;
          text-align: center;
          padding: 10px 20px;
          margin: 20px 0;
          margin-top: 30px;
        }

        .location__time {
          display: grid;
          grid-template-columns: 1fr 1fr;
          background: black;
          padding: 10px;
          margin-bottom: 20px;
          font-size: 15px;

          .location,
          .time {
            display: flex;
            align-items: center;
            justify-content: center;

            .icon {
              margin-right: 15px;
              img {
                height: 30px;
              }
            }
            .data {
              color: white;
            }
          }
        }

        .description {
          padding: 10px 20px;
          font-weight: 300;
          line-height: 26px;
          // max-height: 600px;
          // overflow: scroll;

          p {
            line-height: 25px;
            font-weight: 300;
            white-space: pre-wrap;
            text-align: left;
          }
        }
      }

      .right__wrapper {
        height: 100%;
        width: 100%;
        border-radius: 255px 15px 225px 15px/15px 225px 15px 255px;
        border-left: 2px solid #000;

        .author__information {
          background: black;
          padding: 30px;

          &.multiple {
            // display: grid;
            // grid-template-columns: 1fr 1fr;
            // grid-gap: 10px;

            .speaker {
              justify-content: flex-start;
            }
          }

          .speaker {
            .profile__name {
              display: flex;
              justify-content: flex-start;
              align-items: center;
              .image {
                margin-right: 20px;
                img {
                  width: 110px;
                  height: 110px;
                  border-radius: 100px;
                }
              }

              .info {
                color: white;

                .name {
                  font-size: 26px;
                  font-weight: 700;
                  margin-bottom: 5px;
                  text-transform: uppercase;
                }

                .profession {
                  font-size: 17px;
                  font-weight: 300;
                }
              }
            }

            .bio {
              p {
                color: white;
                line-height: 25px;
                font-weight: 300;
                white-space: pre-wrap;
                text-align: left;
              }
            }
          }
        }
      }
    }
  }
}

@media (max-width: 500px) {
  .session_modal {
    .vm--modal {
      .content {
        h3 {
          font-size: 28px;
        }

        .description {
          // max-height: 300px;
          // overflow: scroll;
        }
      }
    }
  }
}
</style>
