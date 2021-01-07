<template>
  <v-container>
    <v-radio-group row v-model="currentCatId">
      <v-radio
        v-for="(cat, catId, index) in cats"
        :key="index"
        :label="cats[catId]"
        :value="catId"
      ></v-radio>
    </v-radio-group>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "DialogNoteSelectCat",
  computed: {
    ...mapGetters("note", ["currentNote", "cats"]),
    currentCatId: {
      get() {
        if (
          this.currentNote &&
          this.currentNote.categories &&
          this.currentNote.categories.length
        ) {
          return String(this.currentNote.categories[0]);
        } else {
          return 0;
        }
      },
      set(catId) {
        this.currentNote.categories[0] = catId;
      }
    }
  }
};
</script>
