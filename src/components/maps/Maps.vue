<template>
  <div>
    <template>
      <DialogParentMap></DialogParentMap>
      <DialogParentMapList></DialogParentMapList>
      <DialogChildMap></DialogChildMap>
      <DialogChildMapEditText></DialogChildMapEditText>
    </template>
    <MapsField></MapsField>
    <MapsBottomNav></MapsBottomNav>
  </div>
</template>

<script>
import MapsField from "@/components/maps/maps-field/MapsField";
import MapsBottomNav from "@/components/maps/maps-nav/MapsBottomNav";
import DialogParentMapList from "@/components/maps/DialogParentMapList";
import DialogParentMap from "@/components/maps/DialogParentMap";
import DialogChildMap from "@/components/maps/DialogChildMap";
import DialogChildMapEditText from "@/components/maps/DialogChildMapEditText";
export default {
  name: "Maps",
  methods: {},
  watch: {},
  components: {
    MapsField,
    MapsBottomNav,
    DialogParentMap,
    DialogParentMapList,
    DialogChildMap,
    DialogChildMapEditText
  }
};
</script>
