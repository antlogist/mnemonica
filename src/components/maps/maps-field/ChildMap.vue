<template>
  <VueDragResize
    :isActive="Boolean(childMap.isActivated)"
    :style="{ backgroundColor: childMap.color, fontSize: childMap.fontSize + 'px' }"
    :class="childMap.class"
    :x="Number(childMap.x)"
    :y="Number(childMap.y)"
    :w="Number(childMap.width)"
    :isResizable="isResizable"
    :isDraggable="isDraggable"
    v-on:resizing="resize"
    v-on:dragging="resize"
    @dragstop="onDragstop"
    @resizestop="onResizstop"
    @activated="onActivated"
    @deactivated="onDeactivated"
    @clicked="onClicked"
  >
   text
    <v-btn
      v-if="childMap.isActivated"
      class="child-menu-btn"
      @click="openChildDialog"
      color="secondary"
      fab
      x-small
      dark
    >
      <v-icon>mdi-menu</v-icon>
    </v-btn>
  </VueDragResize>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import VueDragResize from "vue-drag-resize";
export default {
  props: {
    parentId: {
      default: () => "",
      type: String
    },
    childMap: {
      default: () => ({}),
      type: Object
    },
    parentClicked: {
      default: () => false,
      type: Boolean
    }
  },
  name: "ChildMap",
  data: () => ({
    currentChildId: "",
    width: 0,
    height: 0,
    top: 0,
    left: 0,
    isDraggable: false,
    isResizable: false
  }),
  computed: {
    ...mapGetters("maps", ["maps"])
  },
  methods: {
    ...mapActions("maps", ["fetchMaps", "openDialogParentMap", "addChildMap"]),
    onDragstop() {
      this.maps[this.parentId].excerpt.children[this.childMap.id]["x"] = String(
        this.left
      );
      this.maps[this.parentId].excerpt.children[this.childMap.id]["y"] = String(
        this.top
      );
    },
    onResizstop() {
      this.maps[this.parentId].excerpt.children[this.childMap.id][
        "width"
      ] = String(this.width);
      this.maps[this.parentId].excerpt.children[this.childMap.id][
        "height"
      ] = String(this.height);
      this.onDragstop();
    },
    resize(newRect) {
      this.width = newRect.width;
      this.height = newRect.height;
      this.top = newRect.top;
      this.left = newRect.left;
    },
    onActivated() {
      this.maps[this.parentId].excerpt.children[this.childMap.id][
        "isActivated"
      ] = true;

      this.isDraggable = true;
      this.isResizable = true;
      console.log("isResizable" + this.isResizable);
    },
    onDeactivated() {
      this.maps[this.parentId].excerpt.children[this.childMap.id][
        "isActivated"
      ] = false;
      this.isDraggable = false;
      this.isResizable = false;
    },
    onClicked() {
      this.isDraggable = true;
      this.isResizable = true;
    },
    openChildDialog() {
      console.log("openChildDialog");
    }
  },
  watch: {
    parentClicked() {
      this.isDraggable = false;
      this.isResizable = false;
      this.onDeactivated();
    }
  },
  components: {
    VueDragResize
  }
};
</script>

<style lang="scss" scoped="true">
.child-menu-btn {
  position: absolute;
  bottom: 0;
  left: 0;
  margin-bottom: -40px;
}
.child-menu-btn {
  margin-left: 0;
}
</style>
