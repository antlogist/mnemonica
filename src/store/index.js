import Vue from "vue";
import Vuex from "vuex";
import drawer from "./modules/drawer";
import notes from "./modules/notes";
import maps from "./modules/maps";
import note from "./modules/note";
import loader from "./modules/loader";
import auth from "./modules/auth";
import notification from "./modules/notification";
import zoom from "./modules/zoom";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    drawer,
    auth,
    loader,
    maps,
    notes,
    note,
    notification,
    zoom
  }
});
