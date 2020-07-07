<template>
  <div class="home">
    <IntroComponent />
    <TextComponent />
    <ScheduleComponent />
    <SponsorsComponent />
  </div>
</template>

<script>
import IntroComponent from "@/components/home/IntroComponent";
import ScheduleComponent from "@/components/home/ScheduleComponent";
import SponsorsComponent from "@/components/home/SponsorsComponent";
// import SpeakersComponent from "@/components/home/SpeakersComponent";
import TextComponent from "@/components/home/TextComponent";

export default {
  name: "Home",
  components: {
    IntroComponent,
    SponsorsComponent,
    TextComponent,
    ScheduleComponent
    // SpeakersComponent
  }
};
</script>
