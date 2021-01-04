<template>
  <v-toolbar dark color="primary">
    <template>
      <v-btn icon dark @click="closeDialog">
        <v-icon>mdi-close</v-icon>
      </v-btn>
      <v-toolbar-title>Parent Map</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn dark text>
          Save
        </v-btn>
      </v-toolbar-items>
    </template>
  </v-toolbar>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "DialogParentMapToolbar",
  computed: {},
  methods: {
    ...mapActions("maps", ["closeDialogParentMap"]),
    closeDialog() {
      this.closeDialogParentMap();
    }
  }
};
</script>
