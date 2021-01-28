<template>
  <v-dialog v-model="isDialogChildMapShow" fullscreen persistent>
    <DialogChildMapToolbar></DialogChildMapToolbar>
    <v-card>
      <v-container>
        <v-row>
          <v-col cols="12" sm="8">
            <DialogChildMapDescr></DialogChildMapDescr>
            <v-row>
              <v-col cols="12" sm="6">
                <DialogChildMapBackColor></DialogChildMapBackColor>
              </v-col>
              <v-col cols="12" sm="6">
                <DialogChildMapFontColor></DialogChildMapFontColor>
              </v-col>
            </v-row>
          </v-col>
          <v-col cols="12" sm="4">
            <DialogChildMapSize class="mb-3"></DialogChildMapSize>
            <DialogChildMapCoord class="mb-3"></DialogChildMapCoord>
            <DialogChildMapShape class="mb-3"></DialogChildMapShape>
            <DialogChildMapFontSize class="mb-3"></DialogChildMapFontSize>
            <DialogChildMapTextAlign class="mb-3"></DialogChildMapTextAlign>
            <DialogChildMapTexture></DialogChildMapTexture>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapGetters } from "vuex";
import DialogChildMapToolbar from "@/components/maps/dialog-child-map/DialogChildMapToolbar";
import DialogChildMapDescr from "@/components/maps/dialog-child-map/DialogChildMapDescr";
import DialogChildMapShape from "@/components/maps/dialog-child-map/DialogChildMapShape";
import DialogChildMapFontSize from "@/components/maps/dialog-child-map/DialogChildMapFontSize";
import DialogChildMapTexture from "@/components/maps/dialog-child-map/DialogChildMapTexture";
import DialogChildMapTextAlign from "@/components/maps/dialog-child-map/DialogChildMapTextAlign";
import DialogChildMapBackColor from "@/components/maps/dialog-child-map/DialogChildMapBackColor";
import DialogChildMapFontColor from "@/components/maps/dialog-child-map/DialogChildMapFontColor";
import DialogChildMapSize from "@/components/maps/dialog-child-map/DialogChildMapSize";
import DialogChildMapCoord from "@/components/maps/dialog-child-map/DialogChildMapCoord";
export default {
  name: "DialogChildMap",
  data: () => ({}),
  computed: {
    ...mapGetters("maps", ["isDialogChildMapShow"])
  },
  components: {
    DialogChildMapToolbar,
    DialogChildMapDescr,
    DialogChildMapShape,
    DialogChildMapFontSize,
    DialogChildMapTexture,
    DialogChildMapTextAlign,
    DialogChildMapBackColor,
    DialogChildMapFontColor,
    DialogChildMapSize,
    DialogChildMapCoord
  }
};
</script>
