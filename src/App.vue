<template>
  <v-app>
    <loader></loader>

    <dialog-login></dialog-login>

    <v-system-bar color="deep-purple darken-3" app></v-system-bar>

    <nav-bar></nav-bar>

    <nav-drawer></nav-drawer>

    <v-main>
      <notification></notification>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import { mapActions } from "vuex";
import Loader from "./components/loader/Loader";
import Notification from "./components/notification/Notification";
import NavBar from "./components/nav/NavBar";
import NavDrawer from "./components/nav/NavDrawer";
import DialogLogin from "./components/dialog/DialogLogin";

export default {
  name: "App",
  data: () => ({}),
  methods: {
    ...mapActions(["loginOnMounted"])
  },
  mounted() {
    this.loginOnMounted();
  },
  components: {
    Loader,
    Notification,
    NavBar,
    NavDrawer,
    DialogLogin
  }
};
</script>
