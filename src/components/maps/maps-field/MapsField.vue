<template>
  <div class="maps-wrapper">
    <div class="scale-wrapper">
      <ParentMap></ParentMap>
    </div>
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
