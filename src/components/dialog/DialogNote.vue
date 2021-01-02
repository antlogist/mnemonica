<template>
  <v-dialog v-model="isDialogNoteShow" fullscreen persistent>
    <v-card>
      <DialogNoteToolbar></DialogNoteToolbar>
      <v-container>
        <DialogNoteTitle></DialogNoteTitle>
        <DialogNoteExcerpt></DialogNoteExcerpt>
      </v-container>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapGetters } from "vuex";
import DialogNoteToolbar from "@/components/dialog/dialog-note/DialogNoteToolbar";
import DialogNoteTitle from "@/components/dialog/dialog-note/DialogNoteTitle";
import DialogNoteExcerpt from "@/components/dialog/dialog-note/DialogNoteExcerpt";
export default {
  name: "DialogNote",
  data: () => ({}),
  computed: {
    ...mapGetters("note", ["isDialogNoteShow"])
  },
  components: {
    DialogNoteToolbar,
    DialogNoteTitle,
    DialogNoteExcerpt
  }
};
</script>
