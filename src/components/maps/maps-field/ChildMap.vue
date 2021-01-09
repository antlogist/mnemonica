<template>
  <div>
    <VueDragResize
      :style="{ backgroundColor: childMap.color }"
      :x="Number(childMap.x)"
      :y="Number(childMap.y)"
      :w="Number(childMap.width)"
      :h="Number(childMap.height)"
      v-on:resizing="resize"
      v-on:dragging="resize"
      @dragstop="onDragstop()"
      @resizestop="onResizstop()"
    >
    </VueDragResize>
  </div>
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
    }
  },
  name: "ChildMap",
  data: () => ({
    currentChildId: "",
    width: 0,
    height: 0,
    top: 0,
    left: 0
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
    }
  },
  components: {
    VueDragResize
  }
};
</script>
