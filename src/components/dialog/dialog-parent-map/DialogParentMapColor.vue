<template>
  <v-color-picker v-if="currentParentMapId" v-model="select"></v-color-picker>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "DialogParentMapColor",
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
