<template>
  <v-dialog v-model="isDialogParentMapShow" fullscreen persistent>
    <v-card>
      <DialogParentMapToolbar></DialogParentMapToolbar>
      <v-container>
        <DialogParentMapTitle></DialogParentMapTitle>
        <DialogParentMapDescr></DialogParentMapDescr>
        <v-row>
          <v-col cols="12" sm="4">
            <DialogParentMapShape class="mb-3"></DialogParentMapShape>
            <DialogParentMapColor></DialogParentMapColor>
          </v-col>
        </v-row>
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
import DialogParentMapDescr from "@/components/maps/dialog-parent-map/DialogParentMapDescr";
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
    DialogParentMapColor,
    DialogParentMapDescr
  }
};
</script>

<style scoped="true" lang="scss"></style>
