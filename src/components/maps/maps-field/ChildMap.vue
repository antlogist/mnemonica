<template>
  <div>
    <VueDragResize
      :isActive="Boolean(childMap.isActivated)"
      :style="{ backgroundColor: childMap.color }"
      :class="childMap.class"
      :x="Number(childMap.x)"
      :y="Number(childMap.y)"
      :w="Number(childMap.width)"
      :h="Number(childMap.height)"
      v-on:resizing="resize"
      v-on:dragging="resize"
      @dragstop="onDragstop"
      @resizestop="onResizstop"
      @activated="onActivated"
      @deactivated="onDeactivated"
      @clicked="onClicked"
    >
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
    },
    onActivated() {
      this.maps[this.parentId].excerpt.children[this.childMap.id][
        "isActivated"
      ] = true;
    },
    onDeactivated() {
      this.maps[this.parentId].excerpt.children[this.childMap.id][
        "isActivated"
      ] = false;
    },
    onClicked() {
      console.log("!!!");
    },
    openChildDialog() {
      console.log("openChildDialog");
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
