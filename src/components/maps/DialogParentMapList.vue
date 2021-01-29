<template>
  <v-dialog v-model="isDialogParentMapListShow" fullscreen persistent>
    <v-card>
      <DialogParentMapListToolbar></DialogParentMapListToolbar>
      <v-container>
        {{ mapsList }}
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa ex,
        impedit sequi, odit voluptates ut voluptate repellat ipsa nostrum
        dolores adipisci. Dolorum reprehenderit iure est culpa mollitia
        reiciendis corporis ipsa!
      </v-container>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapGetters } from "vuex";
import DialogParentMapListToolbar from "@/components/maps/dialog-parent-map-list/DialogParentMapListToolbar";
export default {
  name: "DialogParentMapList",
  data: () => ({}),
  computed: {
    ...mapGetters("maps", ["isDialogParentMapListShow", "mapsList"])
  },
  components: {
    DialogParentMapListToolbar
  }
};
</script>

<style scoped="true" lang="scss"></style>
