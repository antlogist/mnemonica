<template>
  <v-card outlined>
    <v-card-title>
      Back Color
    </v-card-title>
    <v-card-text align="center">
      <v-color-picker
        show-swatches
        :swatches="swatches"
        v-if="currentChildMapId"
        v-model="select"
      ></v-color-picker>
    </v-card-text>
  </v-card>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "DialogChildMapBackColor",
  data: () => ({
    swatches: [
      ["#FF0000", "#AA0000", "#550000"],
      ["#FFFF00", "#AAAA00", "#555500"],
      ["#00FF00", "#00AA00", "#005500"],
      ["#00FFFF", "#00AAAA", "#005555"],
      ["#0000FF", "#0000AA", "#000055"]
    ]
  }),
  computed: {
    ...mapGetters("maps", ["maps", "currentChildMapId", "currentParentMapId"]),
    select: {
      get() {
        const color = this.maps[this.currentParentMapId]["excerpt"]["children"][
          this.currentChildMapId
        ]["backgroundColor"];
        return color;
      },
      set(color) {
        this.maps[this.currentParentMapId]["excerpt"]["children"][
          this.currentChildMapId
        ]["backgroundColor"] = color;
      }
    }
  }
};
</script>
