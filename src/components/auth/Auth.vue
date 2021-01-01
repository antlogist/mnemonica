<template>
  <div>
    <v-btn @click="openDialog" icon v-if="!isLogin">
      <v-icon>mdi-login</v-icon>
    </v-btn>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Auth",
  computed: {
    ...mapGetters(["isLogin"])
  },
  methods: {
    ...mapActions(["openDialogLogin"]),
    openDialog() {
      this.openDialogLogin();
    }
  }
};
</script>
