<template>
  <v-app-bar fixed dark color="primary">
    <template>
      <v-btn icon dark @click="closeDialogParentMapList">
        <v-icon>mdi-close</v-icon>
      </v-btn>
      <v-toolbar-title>Parent Map</v-toolbar-title>
      <!--      {{ mapsIds }}-->
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn icon @click="save" dark text>
          <v-icon>mdi-content-save</v-icon>
        </v-btn>
      </v-toolbar-items>
    </template>
  </v-app-bar>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "DialogParentMapToolbar",
  props: {
    mapsIds: {
      default: () => [],
      type: Array
    }
  },
  computed: {},
  methods: {
    ...mapActions("maps", ["closeDialogParentMapList", "fetchMapsSelected"]),
    closeDialog() {
      this.closeDialogParentMapList();
    },
    save() {
      if (this.mapsIds.length > 0) {
        this.fetchMapsSelected({ selected: this.mapsIds });
        // Close dialog
        this.closeDialog();
      }
    }
  }
};
</script>
