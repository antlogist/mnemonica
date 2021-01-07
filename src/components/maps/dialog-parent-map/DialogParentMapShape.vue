<template>
  <v-card outlined>
    <v-card-text>
      <v-select :items="shapes" v-model="select" label="Shapes"></v-select>
    </v-card-text>
  </v-card>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "DialogParentMapShape",
  data: () => ({
    shapes: ["s-rectangle", "s-circle"]
  }),
  computed: {
    ...mapGetters("maps", ["maps", "currentParentMapId"]),
    select: {
      get() {
        let className = "";
        const mapClasses = this.maps[this.currentParentMapId]
          ? this.maps[this.currentParentMapId].excerpt.class
          : "";
        const length = mapClasses.length;

        for (let i = 0; i < length; i++) {
          const currentClass = mapClasses[i];
          const isClassExist = this.shapes.some(item => item === currentClass);
          if (isClassExist) {
            className = currentClass;
            break;
          }
        }

        return className;
      },
      set(item) {
        const mapClasses = this.maps[this.currentParentMapId].excerpt.class;

        // Delete the previous shape classes
        mapClasses.map((mapClass, mapClassIndex) => {
          this.shapes.map(shapeClass => {
            if (mapClass === shapeClass) {
              mapClasses.splice(mapClassIndex, 1);
            }
          });
        });
        mapClasses.push(item);
      }
    }
  }
};
</script>
