<template>
  <v-dialog v-model="isDialogChildMapEditTextShow" fullscreen persistent>
    <DialogChildMapEditTextToolbar></DialogChildMapEditTextToolbar>
  </v-dialog>
</template>

<script>
import { mapGetters } from "vuex";
import DialogChildMapEditTextToolbar from "@/components/maps/dialog-child-map-edit-text/DialogChildMapEditTextToolbar";
export default {
  name: "DialogChildMapEditText",
  data: () => ({}),
  computed: {
    ...mapGetters("maps", ["isDialogChildMapEditTextShow"])
  },
  components: {
    DialogChildMapEditTextToolbar
  }
};
</script>
