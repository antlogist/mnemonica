<template>
  <v-navigation-drawer
    v-model="drawerVal"
    bottom
    temporary
    app
    @click:outside="toggleDrawer(false)"
  >
    <v-list nav dense>
      <v-list-item-group
        v-model="group"
        active-class="deep-purple--text text--accent-4"
      >
        <v-list-item
          v-for="(item, index) in navItems"
          :key="index"
          :to="item.link"
        >
          <nav-item :item="item"></nav-item>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import NavItem from "@/components/nav/NavItem";
export default {
  name: "NavDrawer",
  data: () => ({
    navItems: [
      {
        title: "Maps",
        component: "Maps",
        link: "maps"
      },
      {
        title: "Notes",
        component: "Notes",
        link: "notes"
      }
    ],
    group: null
  }),
  computed: {
    ...mapGetters(["drawer"]),
    drawerVal: {
      get() {
        return this.drawer;
      },
      set(bool) {
        this.toggleDrawer(bool);
      }
    }
  },
  methods: {
    ...mapActions(["toggleDrawer"])
  },
  components: {
    NavItem
  },
  watch: {
    group() {
      this.toggleDrawer(false);
    }
  }
};
</script>
