<template>
  <div class="maps-wrapper">
    <div class="scale-wrapper" :style="{ transform: 'scale(' + zoomMap + ')'}">
      <ParentMap></ParentMap>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import ParentMap from "@/components/maps/maps-field/ParentMap";
export default {
  name: "MapsField",
  data: () => ({
    height: 0
  }),
  computed: {
    ...mapGetters("zoom", ["zoomMap"])
  },
  mounted: () => {
    const intViewportHeight = window.innerHeight;
    const appBar = document.querySelector(".v-app-bar");
    const appBarHeight = appBar.offsetHeight;
    const systemBar = document.querySelector(".v-system-bar");
    const systemBarHeight = systemBar.offsetHeight;
    const bottomNav = document.querySelector(".v-bottom-navigation");
    const bottomNavHeight = bottomNav.offsetHeight;
    const mapsWrapperHeight =
      intViewportHeight - appBarHeight - bottomNavHeight - systemBarHeight;

    const mapsWrapper = document.querySelector(".maps-wrapper");
    mapsWrapper.style.height = mapsWrapperHeight + "px";
    console.log(mapsWrapper);

    console.log({ mapsWrapperHeight, appBarHeight, bottomNavHeight });
  },
  components: {
    ParentMap
  }
};
</script>

<style>
.maps-wrapper {
  position: relative;
  background-color: coral;
  width: 100%;
  overflow: scroll;
}
.s-circle {
  border-radius: 50%;
}
.scale-wrapper {
  -webkit-transition: 0 0;
  -o-transition: 0 0;
  transition: 0 0;
  transform-origin: top left;
}
</style>
