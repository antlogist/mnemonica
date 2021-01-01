<template>
  <div>
    <v-app-bar color="deep-purple accent-4" dark dense flat app>
      <v-app-bar-nav-icon @click.stop="onIconClick"></v-app-bar-nav-icon>
      <v-spacer></v-spacer>
      <auth></auth>
    </v-app-bar>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import Auth from "@/components/auth/Auth";
export default {
  name: "NavBar",
  methods: {
    ...mapActions(["toggleDrawer"]),
    onIconClick() {
      this.toggleDrawer(true);
    }
  },
  components: {
    Auth
  }
};
</script>
