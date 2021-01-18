<template>
  <v-toolbar dark color="primary">
    <template>
      <v-btn icon dark @click="closeDialog">
        <v-icon>mdi-close</v-icon>
      </v-btn>
      <v-toolbar-title>Edit Text</v-toolbar-title>
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
import { mapActions } from "vuex";
export default {
  name: "DialogChildMapEditTextToolbar",
  computed: {},
  methods: {
    ...mapActions("maps", ["closeDialogChildMapEditText", "saveMaps"]),
    closeDialog() {
      this.closeDialogChildMapEditText();
    },
    save() {
      this.saveMaps();
    }
  }
};
</script>
