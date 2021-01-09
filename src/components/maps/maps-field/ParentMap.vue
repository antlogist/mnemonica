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
      @dragstop="onDragstop(map.id)"
      @resizestop="onResizstop(map.id)"
      @activated="onActivated(map.id)"
      @deactivated="onDeactivated(map.id)"
      @clicked="onClicked(map.id)"
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
    ...mapGetters("maps", ["maps"])
  },
  methods: {
    ...mapActions("maps", ["fetchMaps", "openDialogParentMap", "addChildMap"]),
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
      const childId = `${parentId + (+new Date()).toString(16)}`;
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
        fontSize: "24",
        fontColor: "#000000",
        border: "1px solid",
        borderColor: "#000000",
        class: ["child-map", "rectangle"],
        notesIds: [],
        img: "",
        sound: "",
        smell: ""
      };
      this.addChildMap({ parentId, childId, childMap });
    }
  },
  mounted() {
    this.fetchMaps();
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
.delete-parent-btn {
  position: absolute;
  bottom: 0;
  left: 0;
  margin-bottom: -40px;
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
</style>
