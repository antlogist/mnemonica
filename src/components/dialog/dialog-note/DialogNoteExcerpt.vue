<template>
  <v-edit-dialog persistent :return-value.sync="currentExcerpt" large>
    <v-card-text>
      <div v-html="currentExcerpt"></div>
    </v-card-text>

    <template v-slot:input>
      <v-textarea v-model="currentExcerpt" label="Edit" counter></v-textarea>
    </template>
  </v-edit-dialog>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "DialogNoteExcerpt",
  data: () => ({}),
  computed: {
    ...mapGetters("note", ["currentNote"]),
    currentExcerpt: {
      get() {
        return this.currentNote.excerpt
          ? this.currentNote.excerpt.rendered
          : "";
      },
      set(excerpt) {
        this.changeExcerpt(excerpt);
      }
    }
  },
  methods: {
    ...mapActions("note", ["changeExcerpt"])
  }
};
</script>
