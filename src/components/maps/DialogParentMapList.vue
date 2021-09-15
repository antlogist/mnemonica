<template>
  <v-dialog v-model="isDialogParentMapListShow" fullscreen persistent>
    <v-card>
      <DialogParentMapListToolbar
        :mapsIds="selected"
      ></DialogParentMapListToolbar>
      <v-sheet style="margin-top: 56px;">
        <v-container>
          <v-btn elevation="2" class="mt-5 mr-1" @click="selectAll" small
            >Select All</v-btn
          >
          <v-btn elevation="2" class="mt-5" @click="clearAll" small
            >Clear All</v-btn
          >
        </v-container>
        <v-container>
          <v-autocomplete
            v-model="selected"
            :items="mapsListArr"
            item-text="title"
            item-value="id"
            class="mx-4"
            flat
            hide-no-data
            hide-details
            label="Choose map"
            multiple
          ></v-autocomplete>
          <v-checkbox
            v-for="item in mapsList"
            :key="item.id"
            :label="item.title"
            :value="item.id"
            v-model="selected"
          ></v-checkbox>
        </v-container>
      </v-sheet>
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
      "mapsListArr",
      "isDialogParentMapListShow"
    ])
  },
  methods: {
    selectAll() {
      this.selected = [];
      const mapsList = this.mapsListArr;
      mapsList.map(map => {
        this.selected.push(map.id);
      });
    },
    clearAll() {
      this.selected = [];
    }
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
