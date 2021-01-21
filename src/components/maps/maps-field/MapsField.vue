<template>
  <div class="maps-wrapper">
    <div class="scale-wrapper" :style="{ transform: 'scale(' + zoomMap + ')' }">
      <ParentMap></ParentMap>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import ParentMap from "@/components/maps/maps-field/ParentMap";
export default {
  name: "MapsField",
  computed: {
    ...mapGetters("zoom", ["zoomMap"])
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
  height: 100vh;
  overflow: scroll;
}
.s-circle {
  border-radius: 50%;
}
</style>
