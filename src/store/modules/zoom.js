import mutations from "@/store/mutations";

const { ZOOM_IN, ZOOM_OUT } = mutations;

const zoomStore = {
  namespaced: true,
  state: {
    zoomMap: 1
  },
  getters: {
    zoomMap: ({ zoomMap }) => zoomMap
  },
  mutations: {
    [ZOOM_IN](state) {
      state.zoomMap = state.zoomMap + 0.1;
    },
    [ZOOM_OUT](state) {
      state.zoomMap = state.zoomMap - 0.1;
    }
  },
  actions: {
    zoomInMap({ commit }) {
      commit(ZOOM_IN);
    },
    zoomOutMap({ commit }) {
      commit(ZOOM_OUT);
    }
  }
};

export default zoomStore;
