<template>
  <div class="home">
    <WakashioComponent />
    <IntroComponent />
    <RegisterComponent />
    <TextComponent />
    <ScheduleComponent />
    <SponsorsComponent />
  </div>
</template>

<script>
import IntroComponent from "@/components/home/IntroComponent";
import WakashioComponent from "@/components/home/WakashioComponent";
import ScheduleComponent from "@/components/home/ScheduleComponent";
import SponsorsComponent from "@/components/home/SponsorsComponent";
// import SponsorsComponent from "@/components/home/SponsorsComponentConf";
// import SpeakersComponent from "@/components/home/SpeakersComponent";
import TextComponent from "@/components/home/TextComponent";
import RegisterComponent from "@/components/home/RegisterComponent";

export default {
  name: "Home",
  components: {
    IntroComponent,
    WakashioComponent,
    SponsorsComponent,
    TextComponent,
    ScheduleComponent,
    RegisterComponent
    // SpeakersComponent
  }
};
</script>
