<template>
  <v-dialog v-model="isDialogParentMapShow" fullscreen persistent>
    <v-card>
      <DialogParentMapToolbar></DialogParentMapToolbar>
      <v-container>
        <DialogParentMapTitle></DialogParentMapTitle>
        <v-row align="center">
          <DialogParentMapShape></DialogParentMapShape>
        </v-row>
          <DialogParentMapColor></DialogParentMapColor>
      </v-container>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapGetters } from "vuex";
import DialogParentMapToolbar from "@/components/maps/dialog-parent-map/DialogParentMapToolbar";
import DialogParentMapTitle from "@/components/maps/dialog-parent-map/DialogParentMapTitle";
import DialogParentMapShape from "@/components/maps/dialog-parent-map/DialogParentMapShape";
import DialogParentMapColor from "@/components/maps/dialog-parent-map/DialogParentMapColor";
export default {
  name: "DialogParentMap",
  data: () => ({}),
  computed: {
    ...mapGetters("maps", ["isDialogParentMapShow"])
  },
  components: {
    DialogParentMapToolbar,
    DialogParentMapTitle,
    DialogParentMapShape,
    DialogParentMapColor
  }
};
</script>

<style scoped="true" lang="scss"></style>
