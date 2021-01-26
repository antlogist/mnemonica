<template>
  <v-card outlined>
    <v-edit-dialog persistent :return-value.sync="height" large>
      <v-card-text>
        <span class="caption">Height</span>
        <v-text-field label="height" outlined v-html="height"></v-text-field>
      </v-card-text>
      <template v-slot:input>
        <v-text-field v-model.lazy="height" label="Edit" counter></v-text-field>
      </template>
    </v-edit-dialog>
    <v-edit-dialog persistent :return-value.sync="width" large>
      <v-card-text>
        <span class="caption">Width</span>
        <v-text-field label="width" outlined v-html="width"></v-text-field>
      </v-card-text>
      <template v-slot:input>
        <v-text-field v-model.lazy="width" label="Edit" counter></v-text-field>
      </template>
    </v-edit-dialog>
  </v-card>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "DialogChildMapSize",
  data: () => ({
    mapDescr: ""
  }),
  computed: {
    ...mapGetters("maps", ["maps", "currentChildMapId", "currentParentMapId"]),
    height: {
      get() {
        return this.currentChildMapId
          ? this.maps[this.currentParentMapId]["excerpt"]["children"][
              this.currentChildMapId
            ]["height"]
          : "";
      },
      set(h) {
        this.maps[this.currentParentMapId]["excerpt"]["children"][
          this.currentChildMapId
        ]["height"] = h;
      }
    },
    width: {
      get() {
        return this.currentChildMapId
          ? this.maps[this.currentParentMapId]["excerpt"]["children"][
              this.currentChildMapId
            ]["width"]
          : "";
      },
      set(w) {
        this.maps[this.currentParentMapId]["excerpt"]["children"][
          this.currentChildMapId
        ]["width"] = w;
      }
    }
  }
};
</script>
