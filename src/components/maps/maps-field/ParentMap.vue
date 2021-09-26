<template>
  <div>
    <VueDragResize
      :id="map.id"
      :parentScaleX="zoomMap"
      :parentScaleY="zoomMap"
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
      @dragstop="onDragstop(map.id)"
      @resizestop="onResizstop(map.id)"
      @activated="onActivated(map.id)"
      @deactivated="onDeactivated(map.id)"
      @clicked="onClicked(map.id)"
    >
     <h1 v-if="!map.showChildren" class="display-4 text-center" style="margin-top: 30rem;">{{ map.title }}</h1>
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
      <v-btn
        v-if="map.excerpt.isActivated"
        class="add-child-btn"
        @click="newChildMap(map.id)"
        color="secondary"
        fab
        x-small
        dark
      >
        <v-icon>mdi-map</v-icon>
      </v-btn>
      <v-btn
        v-if="map.excerpt.isActivated"
        class="delete-parent-btn"
        color="secondary"
        fab
        x-small
        dark
      >
        <v-icon>mdi-delete</v-icon>
      </v-btn>
      <v-btn
        v-if="map.excerpt.isActivated"
        @click="showChildren(map.id)"
        class="show-child-btn"
        color="secondary"
        fab
        x-small
        dark
      >
        <v-icon>mdi-eye</v-icon>
      </v-btn>
      <ChildMap
        v-for="nestedMap in map.excerpt.children"
        :parentId="map.id"
        :childMap="nestedMap"
        :key="nestedMap.id"
        :parentClicked="parentClicked"
      ></ChildMap>
    </VueDragResize>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import VueDragResize from "vue-drag-resize";
import ChildMap from "@/components/maps/maps-field/ChildMap";
export default {
  name: "ParentMap",
  data: () => ({
    currentParentId: "",
    width: 0,
    height: 0,
    top: 0,
    left: 0,
    parentClicked: false
  }),
  computed: {
    ...mapGetters("maps", ["maps"]),
    ...mapGetters("zoom", ["zoomMap"])
  },
  methods: {
    ...mapActions("maps", [
      "fetchMaps",
      "openDialogParentMap",
      "addChildMap",
      "fetchMapsSelected",
      "showChildMaps"
    ]),
    showChildren(id) {
      this.showChildMaps(id);
    },
    onActivated(id) {
      this.maps[id].excerpt["isActivated"] = true;
    },
    onDeactivated(id) {
      this.maps[id].excerpt["isActivated"] = false;
    },
    onClicked(id) {
      this.parentClicked = !this.parentClicked;
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
    },
    newChildMap(parentId) {
      const childId = `${Date.now()}`;
      const childMap = {
        id: childId,
        isActivated: false,
        title: "New title",
        descr: "Description",
        x: "0",
        y: "0",
        width: "50",
        height: "50",
        backgroundColor: "#ffffff",
        textAlign: "center",
        verticalAlign: "middle",
        fontSize: "10",
        fontColor: "#000000",
        otherStyles: [],
        otherClasses: [],
        other: [],
        class: ["child-map", "s-rectangle"],
        notesIds: [],
        img: "",
        sound: "",
        smell: ""
      };
      this.addChildMap({ parentId, childId, childMap });
    }
  },
  mounted() {
    //    this.fetchMaps();
    this.fetchMapsSelected();
  },
  components: {
    VueDragResize,
    ChildMap
  }
};
</script>

<style lang="scss" scoped="true">
.parent-menu-btn,
.add-child-btn,
.delete-parent-btn,
.show-child-btn {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 101;
}
.parent-menu-btn {
  margin-left: 0;
}
.add-child-btn {
  margin-left: 40px;
}
.delete-parent-btn {
  margin-left: 80px;
}
.show-child-btn {
  margin-left: 120px;
}
</style>
