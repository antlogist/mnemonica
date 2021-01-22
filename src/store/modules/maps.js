import mapApi from "@/services/mapApi";
import mutations from "@/store/mutations";

const {
  MAPS,
  SHOW_PARENT_DIALOG,
  SHOW_CHILD_DIALOG,
  SHOW_CHILD_DIALOG_EDIT_TEXT
} = mutations;

const mapsStore = {
  namespaced: true,
  state: {
    isDialogParentMapShow: false,
    isDialogChildMapShow: false,
    isDialogChildMapEditTextShow: false,
    currentParentMapId: 0,
    currentChildMapId: 0,
    maps: {}
  },
  getters: {
    maps: ({ maps }) => maps,
    isDialogParentMapShow: ({ isDialogParentMapShow }) => isDialogParentMapShow,
    isDialogChildMapShow: ({ isDialogChildMapShow }) => isDialogChildMapShow,
    isDialogChildMapEditTextShow: ({ isDialogChildMapEditTextShow }) =>
      isDialogChildMapEditTextShow,
    currentParentMapId: ({ currentParentMapId }) => currentParentMapId,
    currentChildMapId: ({ currentChildMapId }) => currentChildMapId
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
    },
    [SHOW_CHILD_DIALOG_EDIT_TEXT](state, bool) {
      state.isDialogChildMapEditTextShow = bool;
    }
  },
  actions: {
    addChildMap({ dispatch, state }, { parentId, childId, childMap }) {
      debugger;
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
      commit("SHOW_PARENT_DIALOG", false);
      state.currentParentMapId = "";
    },
    openDialogChildMap({ commit, state }, { childId, parentId }) {
      state.currentParentMapId = Number(parentId);
      state.currentChildMapId = Number(childId);
      commit("SHOW_CHILD_DIALOG", true);
    },
    closeDialogChildMap({ commit, state }) {
      commit("SHOW_CHILD_DIALOG", false);
      state.currentChildMapId = "";
    },
    openDialogChildMapEditText({ commit, state }, { childId, parentId }) {
      state.currentParentMapId = Number(parentId);
      state.currentChildMapId = Number(childId);
      commit("SHOW_CHILD_DIALOG_EDIT_TEXT", true);
    },
    closeDialogChildMapEditText({ commit, state }) {
      commit("SHOW_CHILD_DIALOG_EDIT_TEXT", false);
      state.currentChildMapId = "";
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
