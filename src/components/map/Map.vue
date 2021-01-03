<template>
  <div>
    <MapsField></MapsField>
    <MapBottomNav></MapBottomNav>
  </div>
</template>

<script>
import MapsField from "@/components/map/map-field/MapsField";
import MapBottomNav from "@/components/map/map-nav/MapBottomNav";
export default {
  name: "Map",
  methods: {},
  watch: {},
  components: {
    MapsField,
    MapBottomNav
  }
};
</script>
