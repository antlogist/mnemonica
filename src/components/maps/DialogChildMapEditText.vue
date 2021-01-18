<template>
  <v-dialog v-model="isDialogChildMapEditTextShow" fullscreen persistent>
    <DialogChildMapEditTextToolbar></DialogChildMapEditTextToolbar>
    <v-card>
      <v-container>
        <v-row>
          <v-col cols="12">
            <DialogChildMapEditTextDescr></DialogChildMapEditTextDescr>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapGetters } from "vuex";
import DialogChildMapEditTextToolbar from "@/components/maps/dialog-child-map-edit-text/DialogChildMapEditTextToolbar";
import DialogChildMapEditTextDescr from "@/components/maps/dialog-child-map-edit-text/DialogChildMapEditTextDescr";
export default {
  name: "DialogChildMapEditText",
  data: () => ({}),
  computed: {
    ...mapGetters("maps", [
      "isDialogChildMapEditTextShow",
      "DialogChildMapEditTextDescr"
    ])
  },
  components: {
    DialogChildMapEditTextToolbar,
    DialogChildMapEditTextDescr
  }
};
</script>
