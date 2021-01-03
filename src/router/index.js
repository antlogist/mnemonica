import Vue from "vue";
import Router from "vue-router";
import Maps from "@/components/maps/Maps";
import Notes from "@/components/notes/Notes";

Vue.use(Router);

export function createRouter() {
  return new Router({
    mode: "hash",
    routes: [
      {
        path: "/",
        name: "Home",
        component: Maps
      },
      {
        path: "/maps",
        name: "Maps",
        component: Maps
      },
      {
        path: "/notes",
        name: "Notes",
        component: Notes
      }
    ]
  });
}
