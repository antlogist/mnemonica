<template>
  <v-dialog v-model="isDialogParentMapShow" fullscreen persistent>
    <v-card>
      <DialogParentMapToolbar></DialogParentMapToolbar>
      <v-container>
        <DialogParentMapTitle></DialogParentMapTitle>
        <DialogParentMapShape></DialogParentMapShape>
      </v-container>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapGetters } from "vuex";
import DialogParentMapToolbar from "@/components/dialog/dialog-parent-map/DialogParentMapToolbar";
import DialogParentMapTitle from "@/components/dialog/dialog-parent-map/DialogParentMapTitle";
import DialogParentMapShape from "@/components/dialog/dialog-parent-map/DialogParentMapShape";
export default {
  name: "DialogParentMap",
  data: () => ({}),
  computed: {
    ...mapGetters("maps", ["isDialogParentMapShow"])
  },
  components: {
    DialogParentMapToolbar,
    DialogParentMapTitle,
    DialogParentMapShape
  }
};
</script>

<style scoped="true" lang="scss"></style>
