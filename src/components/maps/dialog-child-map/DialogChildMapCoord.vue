<template>
  <v-card outlined>
    <v-row>
      <v-col class="text-center">
        <v-card outlined class="ml-3">
          <v-edit-dialog persistent :return-value.sync="x" large>
            <v-card-text>
              <span class="caption">X</span>
              <v-text-field
                style="justify-content: center"
                label="x"
                outlined
                v-html="x"
              ></v-text-field>
            </v-card-text>
            <template v-slot:input>
              <v-text-field
                v-model.lazy="x"
                label="Edit"
                counter
              ></v-text-field>
            </template>
          </v-edit-dialog>
        </v-card>
      </v-col>
      <v-col class="text-center">
        <v-card outlined class="mr-3">
          <v-edit-dialog persistent :return-value.sync="y" large>
            <v-card-text>
              <span class="caption">Y</span>
              <v-text-field
                style="justify-content: center"
                label="y"
                outlined
                v-html="y"
              ></v-text-field>
            </v-card-text>
            <template v-slot:input>
              <v-text-field
                v-model.lazy="y"
                label="Edit"
                counter
              ></v-text-field>
            </template>
          </v-edit-dialog>
        </v-card>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "DialogChildMapCoord",
  data: () => ({
    mapDescr: ""
  }),
  computed: {
    ...mapGetters("maps", ["maps", "currentChildMapId", "currentParentMapId"]),
    x: {
      get() {
        return this.currentChildMapId
          ? this.maps[this.currentParentMapId]["excerpt"]["children"][
              this.currentChildMapId
            ]["x"]
          : "";
      },
      set(h) {
        this.maps[this.currentParentMapId]["excerpt"]["children"][
          this.currentChildMapId
        ]["x"] = h;
      }
    },
    y: {
      get() {
        return this.currentChildMapId
          ? this.maps[this.currentParentMapId]["excerpt"]["children"][
              this.currentChildMapId
            ]["y"]
          : "";
      },
      set(w) {
        this.maps[this.currentParentMapId]["excerpt"]["children"][
          this.currentChildMapId
        ]["y"] = w;
      }
    }
  }
};
</script>
