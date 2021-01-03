<template>
  <div>
    {{ maps }}
    <VueDragResize
      v-for="map in maps"
      :key="map.id"
      :style="{ backgroundColor: map.excerpt.color }"
      class="parent-map"
      :isActive="false"
      :w="Number(map.excerpt.width)"
      :h="Number(map.excerpt.height)"
      v-on:resizing="resize"
      v-on:dragging="resize"
    >
    </VueDragResize>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import VueDragResize from "vue-drag-resize";

export default {
  name: "MapsField",

  components: {
    VueDragResize
  },
  data() {
    return {
      width: 0,
      height: 0,
      top: 0,
      left: 0
    };
  },
  computed: {
    ...mapGetters("maps", ["maps"])
  },
  methods: {
    ...mapActions("maps", ["fetchMaps"]),
    resize(newRect) {
      this.width = newRect.width;
      this.height = newRect.height;
      this.top = newRect.top;
      this.left = newRect.left;
    }
  },
  mounted() {
    this.fetchMaps();
  }
};
</script>

<style lang="scss">
.parent-map {
}
</style>
