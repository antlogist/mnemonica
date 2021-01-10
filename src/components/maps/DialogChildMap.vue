<template>
  <v-dialog v-model="isDialogChildMapShow" fullscreen persistent>
    
  </v-dialog>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "DialogChildMap",
  data: () => ({}),
  computed: {
    ...mapGetters("maps", ["isDialogChildMapShow"])
  },
};
</script>
