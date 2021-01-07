<template>
  <v-dialog v-model="isDialogNoteShow" fullscreen persistent>
    <v-card>
      <DialogNoteToolbar></DialogNoteToolbar>
      <DialogNoteSelectCat></DialogNoteSelectCat>
      <v-container>
        <DialogNoteTitle></DialogNoteTitle>
        <DialogNoteExcerpt></DialogNoteExcerpt>
      </v-container>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapGetters } from "vuex";
import DialogNoteToolbar from "@/components/notes/dialog-note/DialogNoteToolbar";
import DialogNoteSelectCat from "@/components/notes/dialog-note/DialogNoteSelectCat";
import DialogNoteTitle from "@/components/notes/dialog-note/DialogNoteTitle";
import DialogNoteExcerpt from "@/components/notes/dialog-note/DialogNoteExcerpt";
export default {
  name: "DialogNote",
  data: () => ({}),
  computed: {
    ...mapGetters("note", ["isDialogNoteShow"])
  },
  components: {
    DialogNoteToolbar,
    DialogNoteSelectCat,
    DialogNoteTitle,
    DialogNoteExcerpt
  }
};
</script>
