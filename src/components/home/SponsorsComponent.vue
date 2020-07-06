<template>
  <div class="sponsors__container">
    <div class="container__fw">
      <div class="title__section">
        <div class="sub-text">WE'RE BACKED BY SOME BIG PLAYERS!</div>
        <div class="title">Made possible by the community</div>

        <div class="list">
          <div class="group power">
            <div class="title-package power">Power Stone</div>
            <div class="sponsors">
              <div class="item">
                <a href target="_blank">
                  <img src="/sponsors/liquid-telecom.png" alt />
                </a>
              </div>
              <div class="item">
                <a href target="_blank">
                  <img src="/sponsors/mcb.png" alt />
                </a>
              </div>
            </div>
          </div>

          <div class="group space">
            <div class="title-package space">Space Stone</div>
            <div class="sponsors">
              <div class="item">
                <a href target="_blank">
                  <img src="/sponsors/providus.png" alt />
                </a>
              </div>
            </div>
          </div>

          <div class="group reality">
            <div class="title-package reality">Reality Stone</div>
            <div class="sponsors">
              <div class="item">
                <a href target="_blank">
                  <img src="/sponsors/sd-worx.png" alt />
                </a>
              </div>
              <div class="item">
                <a href target="_blank">
                  <img src="/sponsors/teamonite.png" alt />
                </a>
              </div>
              <div class="item">
                <a href target="_blank">
                  <img src="/sponsors/9thbit.png" alt />
                </a>
              </div>
              <div class="item">
                <a href target="_blank">
                  <img src="/sponsors/event-store.png" alt />
                </a>
              </div>
              <div class="item">
                <a href target="_blank">
                  <img src="/sponsors/iqera.png" alt />
                </a>
              </div>
              <div class="item">
                <a href target="_blank">
                  <img src="/sponsors/synthesis.png" alt />
                </a>
              </div>
              <div class="item">
                <a href target="_blank">
                  <img src="/sponsors/swan.png" alt />
                </a>
              </div>
            </div>
          </div>

          <div class="group soul">
            <div class="title-package soul">Soul Stone</div>
            <div class="sponsors">
              <div class="item">
                <a href target="_blank">
                  <img src="/sponsors/corsham.png" alt />
                </a>
              </div>
              <div class="item">
                <a href target="_blank">
                  <img src="/sponsors/nettobe.png" alt />
                </a>
              </div>
              <div class="item">
                <a href target="_blank">
                  <img src="/sponsors/spoon.png" alt />
                </a>
              </div>
            </div>
          </div>

          <div class="group time">
            <div class="title-package time">Time Stone</div>
            <div class="sponsors">
              <div class="item">
                <a href target="_blank">
                  <img src="/sponsors/supinfo.png" alt />
                </a>
              </div>
            </div>
          </div>

          <div class="group mind">
            <div class="title-package mind">Mind Stone</div>
            <div class="sponsors">
              <div class="item">
                <a href target="_blank">
                  <img src="/sponsors/aerow.png" alt />
                </a>
              </div>
              <div class="item">
                <a href target="_blank">
                  <img src="/sponsors/ncb.png" alt />
                </a>
              </div>
              <div class="item">
                <a href target="_blank">
                  <img src="/sponsors/astek.png" alt />
                </a>
              </div>
              <div class="item">
                <a href target="_blank">
                  <img src="/sponsors/ios.png" alt />
                </a>
              </div>
              <div class="item">
                <a href target="_blank">
                  <img src="/sponsors/frci.png" alt />
                </a>
              </div>
            </div>
          </div>
          <!-- 
          <div class="group happy">
            <div class="title-package happy">Happy Hour Partner</div>
            <div class="sponsors">
              <div class="item">
                <a href="" target="_blank">
                  <img src="/sponsors/mscc.png" alt />
                </a>
              </div>
            </div>
          </div>-->

          <div class="group speaker">
            <div class="title-package speaker">Speaker</div>
            <div class="sponsors">
              <div class="item">
                <a href target="_blank">
                  <img src="/sponsors/ceridian.png" alt />
                </a>
              </div>
              <div class="item">
                <a href target="_blank">
                  <img src="/sponsors/ringier.png" alt />
                </a>
              </div>
            </div>
          </div>

          <div class="group media">
            <div class="title-package media">Media Partner</div>
            <div class="sponsors">
              <div class="item">
                <a href target="_blank">
                  <img src="/sponsors/lsldigital.png" alt />
                </a>
              </div>
              <div class="item">
                <a href target="_blank">
                  <img src="/sponsors/ictio.png" alt />
                </a>
              </div>
            </div>
          </div>

          <div class="group internet">
            <div class="title-package internet">Internet</div>
            <div class="sponsors">
              <div class="item">
                <a href target="_blank">
                  <img src="/sponsors/rogers-capital.png" alt />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.sponsors__container {
  padding: 100px 0;
  background: #fcfcfc;
  background: url("/radial.svg"), url("/sponsors-bottom-right.png");
  background-position: center top, bottom right;
  background-repeat: no-repeat;
  background-size: cover, 300px;
}

.list {
  margin-top: 30px;
  .group {
    .title-package {
      font-family: var(--font-bangers);
      font-size: 40px;
      margin-bottom: 30px;

      &.power,
      &.space,
      &.reality,
      &.soul,
      &.time,
      &.mind {
        text-shadow: 1px 1px 0 rgba(0, 0, 0, 1);
      }

      &.power {
        color: var(--diamond);
      }
      &.space {
        color: var(--titanium);
      }
      &.reality {
        color: var(--platinium);
      }
      &.soul {
        color: var(--gold);
      }
      &.time {
        color: var(--silver);
      }
      &.mind {
        color: var(--bronze);
      }
      &.happy {
        color: var(--dark);
      }
      &.speaker {
        color: var(--dark);
      }
      &.media {
        color: var(--dark);
      }
      &.internet {
        color: var(--dark);
      }
    }
    .sponsors {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: center;

      .item {
        width: 20%;
        margin: 10px;
        margin-bottom: calc(var(--gutter) / 1);

        img {
          width: 70%;
        }
      }
    }

    &.power {
      .sponsors {
        .item {
          img {
            width: 100%;
          }
        }
      }
    }
    &.space {
      .sponsors {
        .item {
          width: 25%;
          img {
            width: 95%;
          }
        }
      }
    }
    &.reality {
      .sponsors {
        .item {
          width: 20%;
          img {
            width: 90%;
          }
        }
      }
    }
    &.soul {
      .sponsors {
        .item {
          width: 20%;
          img {
            width: 85%;
          }
        }
      }
    }
    &.time {
      .sponsors {
        .item {
          width: 20%;
          img {
            width: 80%;
          }
        }
      }
    }
    &.mind {
      .sponsors {
        .item {
          width: 20%;
          img {
            width: 70%;
          }
        }
      }
    }
  }
}
</style>