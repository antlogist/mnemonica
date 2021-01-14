<template>
  <v-card outlined>
    <v-edit-dialog persistent :return-value.sync="descr" large>
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
  name: "DialogChildMapDescr",
  data: () => ({}),
  computed: {
    ...mapGetters("maps", ["maps", "currentChildMapId", "currentParentMapId"]),
    descr: {
      get() {
        return this.currentChildMapId
          ? this.maps[this.currentParentMapId]["excerpt"]["children"][
              this.currentChildMapId
            ]["descr"]
          : "";
      },
      set(excerpt) {
        console.log(excerpt);
        this.maps[this.currentParentMapId]["excerpt"]["children"][
          this.currentChildMapId
        ]["descr"] = excerpt;
      }
    }
  }
};
</script>
