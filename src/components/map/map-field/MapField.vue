<template>
  <div id="app">
    <VueDragResize
      class="parent"
      :isActive="true"
      :w="200"
      :h="200"
      v-on:resizing="resize"
      v-on:dragging="resize"
    >
      <div class="menu" @click="onClick"></div>
      <!--
      <h3>Hello World!</h3>
      <p>{{ top }} х {{ left }}</p>
      <p>{{ width }} х {{ height }}</p>
-->
      <VueDragResize
        class="inside"
        :w="100"
        :h="50"
        v-on:resizing="resize"
        v-on:dragging="resize"
      >
        hi
      </VueDragResize>
    </VueDragResize>
    <VueDragResize
      :isActive="false"
      :w="200"
      :h="200"
      v-on:resizing="resize"
      v-on:dragging="resize"
    >
      sdfsdfsd
    </VueDragResize>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import VueDragResize from "vue-drag-resize";

export default {
  name: "app",

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

  methods: {
    ...mapActions("maps", ["fetchMaps"]),
    resize(newRect) {
      this.width = newRect.width;
      this.height = newRect.height;
      this.top = newRect.top;
      this.left = newRect.left;
      console.log(this.top);
    },
    onClick() {
      console.log("Click!!!");
    }
  },
  mounted() {
    this.fetchMaps();
  }
};
</script>

<style lang="scss">
.inside {
  background-color: cyan;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.parent {
  background-color: coral;
}
.menu {
  width: 20px;
  height: 20px;
  cursor: pointer;
  position: relative;
  background-color: red;
  border: 1px dotted black;
  margin-top: -10px;
  margin-left: -10px;
  border-radius: 50%;
  z-index: 100;
}
</style>
