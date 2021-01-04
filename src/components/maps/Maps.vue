<template>
  <div>
    <MapsField></MapsField>
    <MapsBottomNav></MapsBottomNav>
  </div>
</template>

<script>
import MapsField from "@/components/maps/maps-field/MapsField";
import MapsBottomNav from "@/components/maps/maps-nav/MapsBottomNav";
export default {
  name: "Maps",
  methods: {},
  watch: {},
  components: {
    MapsField,
    MapsBottomNav
  }
};
</script>
