<template>
  <v-card outlined>
    <v-card-text>
      <v-select :items="textures" v-model="select" label="Texture"></v-select>
    </v-card-text>
  </v-card>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "DialogChildMapTexture",
  data: () => ({
    textures: ["gray-sand"],
    address: "../../img/textures/",
    extension: ".png"
  }),
  computed: {
    ...mapGetters("maps", ["maps", "currentChildMapId", "currentParentMapId"]),
    select: {
      get() {
        const imgAddress = this.currentChildMapId
          ? this.maps[this.currentParentMapId]["excerpt"]["children"][
              this.currentChildMapId
            ]["img"]
          : "";
        let img = "";
        if (imgAddress) {
          img = imgAddress;
        }
        return img;
      },
      set(item) {
        this.maps[this.currentParentMapId]["excerpt"]["children"][
          this.currentChildMapId
        ]["img"] = `${this.address}${item}${this.extension}`;
      }
    }
  }
};
</script>
