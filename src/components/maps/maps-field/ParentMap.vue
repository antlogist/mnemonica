<template>
  <div>
    {{ maps }}
    <VueDragResize
      v-for="map in maps"
      :key="map.id"
      :style="{ backgroundColor: map.excerpt.color }"
      :class="map.excerpt.class"
      :isActive="Boolean(map.excerpt.isActivated)"
      :x="Number(map.excerpt.x)"
      :y="Number(map.excerpt.y)"
      :w="Number(map.excerpt.width)"
      :h="Number(map.excerpt.height)"
      v-on:resizing="resize"
      v-on:dragging="resize"
      @clicked="onClicked(map.id)"
      @dragstop="onDragstop(map.id)"
      @resizestop="onResizstop(map.id)"
      @activated="onActivated(map.id)"
      @deactivated="onDeactivated(map.id)"
    >
      <v-btn
        v-if="map.excerpt.isActivated"
        class="parent-menu-btn"
        @click="openParentDialog(map.id)"
        color="secondary"
        fab
        x-small
        dark
      >
        <v-icon>mdi-menu</v-icon>
      </v-btn>
    </VueDragResize>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import VueDragResize from "vue-drag-resize";
export default {
  name: "ParentMap",
  data: () => ({
    currentParentId: "",
    width: 0,
    height: 0,
    top: 0,
    left: 0
  }),
  computed: {
    ...mapGetters("maps", ["maps"])
  },
  methods: {
    ...mapActions("maps", ["fetchMaps", "openDialogParentMap"]),
    onActivated(id) {
      this.maps[id].excerpt["isActivated"] = true;
    },
    onDeactivated(id) {
      this.maps[id].excerpt["isActivated"] = false;
    },
    onClicked(id) {
      console.log("onClicked " + id);
      //      console.log(this.top, this.left);
    },
    onDragstop(id) {
      this.maps[id].excerpt["x"] = String(this.left);
      this.maps[id].excerpt["y"] = String(this.top);
    },
    onResizstop(id) {
      this.maps[id].excerpt["width"] = String(this.width);
      this.maps[id].excerpt["height"] = String(this.height);
      this.onDragstop(id);
    },
    resize(newRect) {
      this.width = newRect.width;
      this.height = newRect.height;
      this.top = newRect.top;
      this.left = newRect.left;
    },
    openParentDialog(id) {
      this.openDialogParentMap(id);
    }
  },
  mounted() {
    this.fetchMaps();
  },
  components: {
    VueDragResize
  }
};
</script>

<style lang="scss" scoped="true">
.parent-menu-btn {
  position: absolute;
  top: 0;
  left: 0;
  margin-top: -15px;
  margin-left: -10px;
}
</style>
