<template>
  <v-toolbar dark color="primary">
    <template>
      <v-btn icon dark @click="closeDialog">
        <v-icon>mdi-close</v-icon>
      </v-btn>
      <v-toolbar-title>Parent Map</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn icon @click="save" dark text>
          <v-icon>mdi-content-save</v-icon>
        </v-btn>
      </v-toolbar-items>
    </template>
  </v-toolbar>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "DialogParentMapToolbar",
  computed: {
    ...mapGetters("maps", ["maps", "currentParentMapId"])
  },
  methods: {
    ...mapActions("maps", ["closeDialogParentMap", "saveMaps", "saveMap"]),
    closeDialog() {
      this.closeDialogParentMap();
    },
    // save() {
    //   this.saveMaps();
    // },
    save() {
      this.saveMap({
        id: this.currentParentMapId,
        title: this.maps[this.currentParentMapId].title,
        excerpt: this.maps[this.currentParentMapId].excerpt
      });
    },
  }
};
</script>
