<template>
  <v-edit-dialog large persistent :return-value.sync="currentTitle">
    <v-card-title>{{ currentTitle }}</v-card-title>

    <template v-slot:input>
      <v-text-field
        v-model="currentTitle"
        label="Edit"
        single-line
        counter
      ></v-text-field>
    </template>
  </v-edit-dialog>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "DialogParentMapTitle",
  data: () => ({}),
  computed: {
    ...mapGetters("maps", ["maps", "currentParentMapId"]),
    currentTitle: {
      get() {
        return this.maps[this.currentParentMapId]
          ? this.maps[this.currentParentMapId]["title"]
          : "";
      },
      set(title) {
        this.maps[this.currentParentMapId]["title"] = title;
      }
    }
  },
  methods: {
    ...mapActions("maps", ["changeParentMapTitle"])
  }
};
</script>
