<template>
  <v-toolbar dark color="primary">
    <template>
      <v-btn icon dark @click="closeDialog">
        <v-icon>mdi-close</v-icon>
      </v-btn>
      <v-toolbar-title>Child Map</v-toolbar-title>
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
import { mapActions, mapGetters } from "vuex";
export default {
  name: "DialogChildMapToolbar",
  computed: {
    ...mapGetters("maps", ["maps", "currentParentMapId"])
  },
  methods: {
    ...mapActions("maps", ["closeDialogChildMap", "saveMaps", "saveMap"]),
    closeDialog() {
      this.closeDialogChildMap();
    },
    save() {
      const title = this.maps[this.currentParentMapId].title;
      const excerpt = this.maps[this.currentParentMapId].excerpt;
      this.saveMap({
        id: this.currentParentMapId,
        title: title,
        excerpt: excerpt
      });
    }
  }
};
</script>
