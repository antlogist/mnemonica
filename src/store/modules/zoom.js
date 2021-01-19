import mutations from "@/store/mutations";

const { ZOOM_IN, ZOOM_OUT } = mutations;

const zoomStore = {
  namespaced: true,
  state: {
    zoom: 1
  },
  getters: {
    zoom: ({ zoom }) => zoom
  },
  mutations: {
    [ZOOM_IN](state) {
      state.zoom++;
    },
    [ZOOM_OUT](state) {
      state.zoom--;
    }
  },
  actions: {
    zoomIn({ commit }) {
      commit(ZOOM_IN);
    },
    zoomOut({ commit }) {
      commit(ZOOM_OUT);
    }
  }
};

export default zoomStore;
