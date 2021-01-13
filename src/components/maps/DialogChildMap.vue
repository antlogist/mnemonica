<template>
  <v-dialog v-model="isDialogChildMapShow" fullscreen persistent>
    <DialogChildMapToolbar></DialogChildMapToolbar>
    <v-card>
      <v-container>
        <v-row>
          <v-col cols="12" sm="8">
            <DialogChildMapDescr></DialogChildMapDescr>
          </v-col>
          <v-col cols="12" sm="4">
            <DialogChildMapShape></DialogChildMapShape>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapGetters } from "vuex";
import DialogChildMapToolbar from "@/components/maps/dialog-child-map/DialogChildMapToolbar";
import DialogChildMapDescr from "@/components/maps/dialog-child-map/DialogChildMapDescr";
import DialogChildMapShape from "@/components/maps/dialog-child-map/DialogChildMapShape";
export default {
  name: "DialogChildMap",
  data: () => ({}),
  computed: {
    ...mapGetters("maps", ["isDialogChildMapShow"])
  },
  components: {
    DialogChildMapToolbar,
    DialogChildMapDescr,
    DialogChildMapShape
  }
};
</script>
