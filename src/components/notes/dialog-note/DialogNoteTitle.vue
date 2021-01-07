<template>
  <v-edit-dialog large persistent :return-value.sync="currentTitle">
    <v-card-title>{{ currentTitle }}</v-card-title>

    <template v-slot:input>
      <v-text-field
        v-model="currentTitle"
        label="Edit"
        single-line
        counter
      ></v-text-field>
    </template>
  </v-edit-dialog>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "DialogNoteTitle",
  data: () => ({}),
  computed: {
    ...mapGetters("note", ["currentNote"]),
    currentTitle: {
      get() {
        return this.currentNote.title ? this.currentNote.title.rendered : "";
      },
      set(title) {
        this.changeTitle(title);
      }
    }
  },
  methods: {
    ...mapActions("note", ["changeTitle"])
  }
};
</script>
