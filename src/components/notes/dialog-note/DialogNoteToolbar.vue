<template>
  <v-toolbar dark color="primary">
    <template>
      <v-btn icon dark @click="closeDialog">
        <v-icon>mdi-close</v-icon>
      </v-btn>
      <v-toolbar-title>Note</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn dark text @click="saveNote">
          Save
        </v-btn>
      </v-toolbar-items>
    </template>
  </v-toolbar>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "DialogNoteToolbar",
  computed: {
    ...mapGetters("note", ["currentNote"])
  },
  methods: {
    ...mapActions("note", ["closeDialogNote", "saveNote"]),
    closeDialog() {
      this.closeDialogNote(false);
    }
  }
};
</script>
