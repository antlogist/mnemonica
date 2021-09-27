<template>
  <v-bottom-navigation app>
    <v-btn @click="newMap">
      <span>New</span>
      <v-icon>mdi-plus</v-icon>
    </v-btn>
    <v-btn @click="zoomIn">
      <span>Zoom-in</span>
      <v-icon>mdi-magnify-plus-outline</v-icon>
    </v-btn>
    <v-icon>{{ zoomMap.toFixed(2) }}</v-icon>
    <v-btn @click="zoomOut">
      <span>Zoom-out</span>
      <v-icon>mdi-magnify-minus-outline</v-icon>
    </v-btn>
    <v-btn @click="save">
      <span>Save</span>
      <v-icon>mdi-content-save</v-icon>
    </v-btn>
    <v-btn @click="openDialogMapList">
      <span>List</span>
      <v-icon>mdi-format-list-bulleted</v-icon>
    </v-btn>
  </v-bottom-navigation>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "MapsBottomNav",
  computed: {
    ...mapGetters("zoom", ["zoomMap"])
  },
  methods: {
    ...mapActions("maps", [
      "fetchMaps",
      "createMap",
      "saveMaps",
      "openDialogParentMapList"
    ]),
    ...mapActions("zoom", ["zoomInMap", "zoomOutMap"]),
    newMap() {
      this.createMap();
    },
    zoomIn() {
      this.zoomInMap();
    },
    zoomOut() {
      this.zoomOutMap();
    },
    save() {
      this.saveMaps();
    },
    openDialogMapList() {
      this.openDialogParentMapList();
    }
  }
};
</script>
