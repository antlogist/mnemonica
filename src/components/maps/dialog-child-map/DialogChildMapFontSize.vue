<template>
  <v-card outlined>
    <v-card-text>
      <v-select :items="sizes" v-model="select" label="FontSize"></v-select>
    </v-card-text>
  </v-card>
</template>

<script>
  import {
    mapGetters
  } from "vuex";
  export default {
    name: "DialogChildMapFontSize",
    data: () => ({
      sizes: [...Array(30).keys()].map(String)
    }),
    computed: {
      ...mapGetters("maps", ["maps", "currentChildMapId", "currentParentMapId"]),
      select: {
        get() {
          return this.currentChildMapId ? this.maps[this.currentParentMapId]['excerpt']['children'][
            this.currentChildMapId
          ]['fontSize'] : ""
        },
        set(item) {
          this.maps[this.currentParentMapId]['excerpt']['children'][
            this.currentChildMapId
          ]['fontSize'] = item;
        }
      }
    }
  };

</script>
