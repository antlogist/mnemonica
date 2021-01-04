<template>
  <v-dialog v-model="isDialogParentMapShow" fullscreen persistent>
    <v-card>
      <DialogParentMapToolbar></DialogParentMapToolbar>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio asperiores
      esse at, id repudiandae, cupiditate corrupti reprehenderit. Aperiam nam
      cum porro, neque, praesentium, minus magnam optio consequuntur repellat
      amet in.
    </v-card>
  </v-dialog>
</template>

<script>
import { mapGetters } from "vuex";
import DialogParentMapToolbar from "@/components/dialog/dialog-parent-map/DialogParentMapToolbar";
export default {
  name: "DialogParentMap",
  data: () => ({}),
  computed: {
    ...mapGetters("maps", ["isDialogParentMapShow"])
  },
  components: {
    DialogParentMapToolbar
  }
};
</script>

<style scoped="true" lang="scss"></style>
