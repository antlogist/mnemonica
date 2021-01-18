<template>
  <v-dialog v-model="isDialogChildMapEditTextShow" fullscreen persistent>
  </v-dialog>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "DialogChildMapEditText",
  data: () => ({}),
  computed: {
    ...mapGetters("maps", ["isDialogChildMapEditTextShow"])
  }
};
</script>
