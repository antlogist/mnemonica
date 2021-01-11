<template>
  <v-dialog v-model="isDialogChildMapShow" fullscreen persistent>
    <DialogChildMapToolbar></DialogChildMapToolbar>
    <v-card>
      <v-container>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab architecto
        delectus dolores reprehenderit tempora in facere sint modi velit
        corrupti praesentium earum deleniti minima, minus similique rerum quidem
        accusamus officia!
      </v-container>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapGetters } from "vuex";
import DialogChildMapToolbar from "@/components/maps/dialog-child-map/DialogChildMapToolbar";
export default {
  name: "DialogChildMap",
  data: () => ({}),
  computed: {
    ...mapGetters("maps", ["isDialogChildMapShow"])
  },
  components: {
    DialogChildMapToolbar
  }
};
</script>
