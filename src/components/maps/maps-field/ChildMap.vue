<template>
  <div>
    <VueDragResize
      :style="{ backgroundColor: childMap.color }"
    ></VueDragResize>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import VueDragResize from "vue-drag-resize";
export default {
  props: {
    childMap:{
      default: ()=>({}),
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
  },
  components: {
      VueDragResize
  }
}
</script>
