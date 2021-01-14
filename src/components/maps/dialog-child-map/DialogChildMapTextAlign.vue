<template>
  <v-card outlined>
    <v-card-text>
      <v-select :items="alignes" v-model="select" label="Text Align"></v-select>
    </v-card-text>
  </v-card>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "DialogChildMapTextAlign",
  data: () => ({
    alignes: ["center", "left", "right"]
  }),
  computed: {
    ...mapGetters("maps", ["maps", "currentChildMapId", "currentParentMapId"]),
    select: {
      get() {
        return this.currentChildMapId
          ? this.maps[this.currentParentMapId]["excerpt"]["children"][
              this.currentChildMapId
            ]["textAlign"]
          : "";
      },
      set(item) {
        this.maps[this.currentParentMapId]["excerpt"]["children"][
          this.currentChildMapId
        ]["textAlign"] = item;
      }
    }
  }
};
</script>
