<template>
  <div>
    <VueDragResize
      v-for="map in maps"
      :key="map.id"
      :style="{ backgroundColor: map.excerpt.color }"
      class="parent-map"
      :isActive="false"
      :x="Number(map.excerpt.x)"
      :y="Number(map.excerpt.y)"
      :w="Number(map.excerpt.width)"
      :h="Number(map.excerpt.height)"
      v-on:resizing="resize"
      v-on:dragging="resize"
      @clicked="onClicked(map.id)"
      @dragstop="onDragstop(map.id)"
      @resizestop="onResizstop(map.id)"
    >
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
    ...mapActions("maps", ["fetchMaps"]),
    onClicked(id) {
      console.log("onClicked " + id);
      //      console.log(this.top, this.left);
    },
    onDragstop(id) {
      //      console.log("onDragstop " + id);
      //      console.log(this.top, this.left);
      this.maps[id].excerpt["x"] = String(this.left);
      this.maps[id].excerpt["y"] = String(this.top);
    },
    onResizstop(id) {
      this.maps[id].excerpt["width"] = String(this.width);
      this.maps[id].excerpt["height"] = String(this.height);
      this.onDragstop(id);
      console.log("onResizstop " + id);
      console.log(this.top, this.left);
    },
    resize(newRect) {
      this.width = newRect.width;
      this.height = newRect.height;
      this.top = newRect.top;
      this.left = newRect.left;
      //      console.log(this.top, this.left);
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

<style lang="scss" scoped="true"></style>
