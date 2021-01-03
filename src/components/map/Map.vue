<template>
  <div>
    <MapField></MapField>
    <MapBottomNav></MapBottomNav>
  </div>
</template>

<script>
import MapField from "@/components/map/map-field/MapField";
import MapBottomNav from "@/components/map/map-nav/MapBottomNav";
export default {
  name: "Map",
  methods: {},
  watch: {},
  components: {
    MapField,
    MapBottomNav
  }
};
</script>
