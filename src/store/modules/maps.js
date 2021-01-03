import mapApi from "@/services/mapApi";
import mutations from "@/store/mutations";

const { MAPS } = mutations;

const mapsStore = {
  namespaced: true,
  state: {
    maps: []
  },
  getters: {
    maps: ({ maps }) => maps
  },
  mutations: {
    [MAPS](state, value) {
      state.maps = value;
    }
  },
  actions: {
    async fetchMaps({ commit, dispatch }) {
      try {
        dispatch("toggleLoader", true, { root: true });

        const response = await mapApi.fetchMaps();
        console.log(response);
        if (response.Error) {
          throw Error(response.Error);
        }
        commit(MAPS, response);
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
        const [response] = await Promise.all([
          mapApi.createMap()
        ]);
        console.log(response);
        if (response.Error) {
          throw Error(response.Error);
        }
        dispatch("fetchMaps", {root: false});
      } catch (err) {
        console.log(err);
      } finally {
        dispatch("toggleLoader", false, { root: true });
      }
    },
  }
};

export default mapsStore;
