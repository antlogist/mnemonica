<template>
  <v-card outlined>
    <v-edit-dialog large persistent :return-value.sync="descr">
      <v-card-text>
        <div v-html="descr"></div>
      </v-card-text>
      <template v-slot:input>
        <v-textarea v-model="descr" label="Edit" counter></v-textarea>
      </template>
    </v-edit-dialog>
  </v-card>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "DialogParentMapDescr",
  data: () => ({}),
  computed: {
    ...mapGetters("maps", ["maps", "currentParentMapId"]),
    descr: {
      get() {
        return this.currentParentMapId
          ? this.maps[this.currentParentMapId]["excerpt"]["descr"]
          : "";
      },
      set(excerpt) {
        this.maps[this.currentParentMapId]["excerpt"]["descr"] = excerpt;
      }
    }
  }
};
</script>
