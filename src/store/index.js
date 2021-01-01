import Vue from "vue";
import Vuex from "vuex";
import drawer from "./modules/drawer";
import notes from "./modules/notes";
import note from "./modules/note";
import loader from "./modules/loader";
import auth from "./modules/auth";
import notification from "./modules/notification";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    drawer,
    auth,
    loader,
    notes,
    note,
    notification
  }
});
