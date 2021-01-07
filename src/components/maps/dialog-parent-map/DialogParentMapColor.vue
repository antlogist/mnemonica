<template>
  <v-card outlined>
    <v-card-text align="center">
      <v-color-picker
        show-swatches
        :swatches="swatches"
        v-if="currentParentMapId"
        v-model="select"
      ></v-color-picker>
    </v-card-text>
  </v-card>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "DialogParentMapColor",
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
    ...mapGetters("maps", ["maps", "currentParentMapId"]),
    select: {
      get() {
        const color = this.maps[this.currentParentMapId].excerpt.color;
        return color;
      },
      set(color) {
        this.maps[this.currentParentMapId].excerpt.color = color;
      }
    }
  }
};
</script>
