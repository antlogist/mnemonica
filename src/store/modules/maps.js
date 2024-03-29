import mapApi from "@/services/mapApi";
import mutations from "@/store/mutations";

const {
  MAPS,
  MAPS_LIST,
  MAPS_LIST_ARR,
  SHOW_PARENT_DIALOG,
  SHOW_CHILD_DIALOG,
  SHOW_CHILD_DIALOG_EDIT_TEXT,
  SHOW_PARENT_LIST_DIALOG
} = mutations;

function convertMapsToArr(obj) {
  const arr = Object.values(obj);
  return arr;
}

function marginMaps(obj) {
  console.log(obj);
  //  for (let map in obj) {
  //    if (obj[map]["excerpt"]) {
  //      obj[map]["excerpt"]["x"] = String(
  //        Number(obj[map]["excerpt"]["x"]) + 10000
  //      );
  //      obj[map]["excerpt"]["y"] = String(
  //        Number(obj[map]["excerpt"]["y"]) + 10000
  //      );
  //    }
  //  }
}

const mapsStore = {
  namespaced: true,
  state: {
    isDialogParentMapListShow: false,
    isDialogParentMapShow: false,
    isDialogChildMapShow: false,
    isDialogChildMapEditTextShow: false,
    currentParentMapId: 0,
    currentChildMapId: 0,
    maps: {},
    mapsCopy: {},
    mapsList: {},
    mapsListArr: [],
    selectedMaps: []
  },
  getters: {
    maps: ({ maps }) => maps,
    mapsList: ({ mapsList }) => mapsList,
    mapsListArr: ({ mapsListArr }) => mapsListArr,
    isDialogParentMapListShow: ({ isDialogParentMapListShow }) =>
      isDialogParentMapListShow,
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
      marginMaps(value);
    },
    [MAPS_LIST](state, value) {
      state.mapsList = value;
    },
    [MAPS_LIST_ARR](state, value) {
      state.mapsListArr = value;
    },
    [SHOW_PARENT_LIST_DIALOG](state, bool) {
      state.isDialogParentMapListShow = bool;
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
    showChildMaps({ state }, id) {
      state.maps[id].showChildren = true;
    },
    addChildMap({ dispatch, state }, { parentId, childId, childMap }) {
      console.log(state);
      console.log({
        parentId,
        childId,
        childMap
      });
      state.maps[parentId].excerpt.children[childId] = childMap;

      dispatch("saveMap", {
        id: parentId,
        title: state.maps[parentId]["title"],
        excerpt: state.maps[parentId]["excerpt"]
      });
    },
    async openDialogParentMapList({ commit, dispatch }) {
      await dispatch("fetchMapsList", {
        root: false
      });
      commit("SHOW_PARENT_LIST_DIALOG", true);
    },
    closeDialogParentMapList({ commit }) {
      commit("SHOW_PARENT_LIST_DIALOG", false);
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
    async fetchMapsSelected({ commit, dispatch, state }, { selected }) {
      console.log(selected);
      state.selectedMaps = selected;
      try {
        dispatch("toggleLoader", true, {
          root: true
        });
        const response = await mapApi.fetchMaps(selected);
        if (response.Error) {
          throw Error(response.Error);
        }
        commit("MAPS", response);
      } catch (err) {
        console.log(err);
        dispatch(
          "showNotification",
          {
            msg: err.message,
            color: "red"
          },
          {
            root: true
          }
        );
      } finally {
        dispatch("toggleLoader", false, {
          root: true
        });
      }
    },
    async fetchMapsList({ commit, dispatch }) {
      try {
        dispatch("toggleLoader", true, {
          root: true
        });
        const response = await mapApi.fetchMaps("list");
        if (response.Error) {
          throw Error(response.Error);
        }
        commit("MAPS_LIST", response);
        commit("MAPS_LIST_ARR", convertMapsToArr(response));
      } catch (err) {
        console.log(err);
        dispatch(
          "showNotification",
          {
            msg: err.message,
            color: "red"
          },
          {
            root: true
          }
        );
      } finally {
        dispatch("toggleLoader", false, {
          root: true
        });
      }
    },
    async fetchMaps({ commit, dispatch, state }) {
      if (state.selectedMaps.length > 0) {
        dispatch("fetchMapsSelected", {
          selected: state.selectedMaps
        });
        return;
      }
      try {
        dispatch("toggleLoader", true, {
          root: true
        });
        const response = await mapApi.fetchMaps();
        if (response.Error) {
          throw Error(response.Error);
        }
        commit("MAPS", response);
      } catch (err) {
        console.log(err);
        dispatch(
          "showNotification",
          {
            msg: err.message,
            color: "red"
          },
          {
            root: true
          }
        );
      } finally {
        dispatch("toggleLoader", false, {
          root: true
        });
      }
    },
    async createMap({ dispatch }) {
      try {
        dispatch("toggleLoader", true, {
          root: true
        });
        const [response] = await Promise.all([mapApi.createMap()]);
        console.log(response);
        if (response.Error) {
          throw Error(response.Error);
        }
        dispatch("fetchMaps", {
          root: false
        });
      } catch (err) {
        console.log(err);
      } finally {
        dispatch("toggleLoader", false, {
          root: true
        });
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
          {
            id: id,
            title: title,
            excerpt: excerpt
          },
          {
            root: false
          }
        );
      }
      dispatch("fetchMaps", {
        root: false
      });
    },

    async saveMap({ dispatch, state }, { id, title, excerpt }) {
      try {
        dispatch("toggleLoader", true, {
          root: true
        });
        const response = await mapApi.saveMap(id, title, excerpt);
        if (response.Error) {
          throw Error(response.Error);
        }
      } catch (err) {
        console.log(err);
      } finally {
        //Deep copy maps
        state.mapsCopy = JSON.parse(JSON.stringify(state.maps));
        state.maps = {};
        state.maps = JSON.parse(JSON.stringify(state.mapsCopy));
        state.mapsCopy = {};
        dispatch("toggleLoader", false, {
          root: true
        });
      }
    }
  }
};

export default mapsStore;
