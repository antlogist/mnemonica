<template>
  <div class="maps-wrapper">
    <ParentMap></ParentMap>
  </div>
</template>

<script>
import ParentMap from "@/components/maps/maps-field/ParentMap";

export default {
  name: "MapsField",
  components: {
    ParentMap
  }
};
</script>

<style lang="scss">
.maps-wrapper {
  position: relative;
  background-color: coral;
  width: 100%;
  height: 100vh;
  overflow: scroll;
}
</style>
