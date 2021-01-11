import mapApi from "@/services/mapApi";
import mutations from "@/store/mutations";

const { MAPS, SHOW_PARENT_DIALOG, SHOW_CHILD_DIALOG } = mutations;

const mapsStore = {
  namespaced: true,
  state: {
    isDialogParentMapShow: false,
    isDialogChildMapShow: false,
    currentParentMapId: 0,
    currentChildMapId: 0,
    maps: {}
  },
  getters: {
    maps: ({ maps }) => maps,
    isDialogParentMapShow: ({ isDialogParentMapShow }) => isDialogParentMapShow,
    isDialogChildMapShow: ({ isDialogChildMapShow }) => isDialogChildMapShow,
    currentParentMapId: ({ currentParentMapId }) => currentParentMapId
  },
  mutations: {
    [MAPS](state, value) {
      state.maps = value;
    },
    [SHOW_PARENT_DIALOG](state, bool) {
      state.isDialogParentMapShow = bool;
    },
    [SHOW_CHILD_DIALOG](state, bool) {
      state.isDialogChildMapShow = bool;
    }
  },
  actions: {
    addChildMap({ dispatch, state }, { parentId, childId, childMap }) {
      console.log(state);
      console.log({ parentId, childId, childMap });
      state.maps[parentId].excerpt.children[childId] = childMap;
      dispatch("saveMaps", { root: false });
      //      console.log(state.maps[parentId].excerpt.children)
    },
    openDialogParentMap({ commit, state }, id) {
      state.currentParentMapId = Number(id);
      commit("SHOW_PARENT_DIALOG", true);
    },
    closeDialogParentMap({ commit, state }) {
      state.currentParentMapId = "";
      commit("SHOW_PARENT_DIALOG", false);
    },
    openDialogChildMap({ commit, state }, id) {
      state.currentChildMapId = Number(id);
      commit("SHOW_CHILD_DIALOG", true);
    },
    closeDialogChildMap({ commit, state }) {
      state.currentChildMapId = "";
      commit("SHOW_CHILD_DIALOG", false);
    },
    async fetchMaps({ commit, dispatch }) {
      try {
        dispatch("toggleLoader", true, { root: true });
        const response = await mapApi.fetchMaps();
        if (response.Error) {
          throw Error(response.Error);
        }
        commit("MAPS", response);
      } catch (err) {
        console.log(err);
        dispatch(
          "showNotification",
          { msg: err.message, color: "red" },
          { root: true }
        );
      } finally {
        dispatch("toggleLoader", false, { root: true });
      }
    },
    async createMap({ dispatch }) {
      try {
        dispatch("toggleLoader", true, { root: true });
        const [response] = await Promise.all([mapApi.createMap()]);
        console.log(response);
        if (response.Error) {
          throw Error(response.Error);
        }
        dispatch("fetchMaps", { root: false });
      } catch (err) {
        console.log(err);
      } finally {
        dispatch("toggleLoader", false, { root: true });
      }
    },

    async saveMaps({ state, dispatch }) {
      const mapsIds = Object.keys(state.maps);
      for (let i = 0; i < mapsIds.length; i++) {
        const id = mapsIds[i];
        const title = state.maps[id]["title"];
        const excerpt = state.maps[id]["excerpt"];
        await dispatch(
          "saveMap",
          { id: id, title: title, excerpt: excerpt },
          { root: false }
        );
      }
      dispatch("fetchMaps", { root: false });
    },

    async saveMap({ dispatch }, { id, title, excerpt }) {
      try {
        dispatch("toggleLoader", true, { root: true });
        const response = await mapApi.saveMap(id, title, excerpt);
        if (response.Error) {
          throw Error(response.Error);
        }
      } catch (err) {
        console.log(err);
      } finally {
        dispatch("toggleLoader", false, { root: true });
      }
    }
  }
};

export default mapsStore;
