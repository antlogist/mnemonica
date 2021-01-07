<template>
  <div>
    <template>
      <DialogParentMap></DialogParentMap>
    </template>
    <MapsField></MapsField>
    <MapsBottomNav></MapsBottomNav>
  </div>
</template>

<script>
import MapsField from "@/components/maps/maps-field/MapsField";
import MapsBottomNav from "@/components/maps/maps-nav/MapsBottomNav";
import DialogParentMap from "@/components/maps/DialogParentMap";
export default {
  name: "Maps",
  methods: {},
  watch: {},
  components: {
    MapsField,
    MapsBottomNav,
    DialogParentMap
  }
};
</script>
