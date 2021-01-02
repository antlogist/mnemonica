<template>
  <v-dialog
    v-model="isDialogNoteShow"
    @click:outside="closeDialog"
    fullscreen
    hide-overlay
  >
    <v-card>
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
      <v-container>
        <DialogNoteTitle></DialogNoteTitle>
        <DialogNoteExcerpt></DialogNoteExcerpt>
      </v-container>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import DialogNoteTitle from "@/components/dialog/dialog-note/DialogNoteTitle";
import DialogNoteExcerpt from "@/components/dialog/dialog-note/DialogNoteExcerpt";
export default {
  name: "DialogNote",
  data: () => ({}),
  computed: {
    ...mapGetters("note", ["isDialogNoteShow", "currentNote"])
  },
  methods: {
    ...mapActions("note", [
      "closeDialogNote",
      "changeTitle",
      "changeExcerpt",
      "saveNote"
    ]),
    closeDialog() {
      this.closeDialogNote(false);
    }
  },
  components: {
    DialogNoteTitle,
    DialogNoteExcerpt
  }
};
</script>
