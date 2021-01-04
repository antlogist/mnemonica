<template>
  <v-bottom-navigation app>
    <v-btn @click="newMap">
      <span>New</span>
      <v-icon>mdi-plus</v-icon>
    </v-btn>
    <v-btn @click="scale">
      <span>Scale</span>
      <v-icon>mdi-ruler</v-icon>
    </v-btn>
    <v-btn @click="save">
      <span>Save</span>
      <v-icon>mdi-content-save</v-icon>
    </v-btn>
  </v-bottom-navigation>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "MapsBottomNav",
  methods: {
    ...mapActions("maps", ["fetchMaps", "createMap", "saveMaps"]),
    newMap() {
      this.createMap();
    },
    scale() {
      console.log("scale");
    },
    save() {
      this.saveMaps();
    }
  }
};
</script>
