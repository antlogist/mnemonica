<template>
  <v-dialog v-model="isDialogParentMapListShow" persistent>
    <v-card>
      <DialogParentMapListToolbar
        :mapsIds="selected"
      ></DialogParentMapListToolbar>
      <v-container>
        {{ selected }}
        <v-checkbox
          v-for="item in mapsList"
          :key="item.id"
          :label="item.title"
          :value="item.id"
          v-model="selected"
        ></v-checkbox>
      </v-container>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapGetters } from "vuex";
import DialogParentMapListToolbar from "@/components/maps/dialog-parent-map-list/DialogParentMapListToolbar";
export default {
  name: "DialogParentMapList",
  data: () => ({
    selected: []
  }),
  computed: {
    ...mapGetters("maps", [
      "isDialogParentMapListShow",
      "mapsList",
      "isDialogParentMapListShow"
    ])
  },
  watch: {
    isDialogParentMapListShow(bool) {
      if (bool === false) {
        this.selected = [];
      }
    }
  },
  components: {
    DialogParentMapListToolbar
  }
};
</script>

<style scoped="true" lang="scss"></style>
