import noteApi from "@/services/noteApi";
import mutations from "@/store/mutations";

const { NOTES, NEXT_NOTES, CURRENT_PAGE } = mutations;

const notesStore = {
  namespaced: true,
  state: {
    currentPage: 1,
    totalPages: 0,
    notes: []
  },
  getters: {
    currentPage: ({ currentPage }) => currentPage,
    notes: ({ notes }) => notes,
    totalPages: ({ totalPages }) => totalPages
  },
  mutations: {
    [NOTES](state, value) {
      state.notes = value;
      state.totalPages = value[0] ? value[0].total_pages : 0;
    },
    [NEXT_NOTES](state, value) {
      state.notes = [...state.notes, ...value];
    },
    [CURRENT_PAGE](state, value) {
      state.currentPage = value;
    }
  },
  actions: {
    async fetchNotes({ getters, commit, dispatch }) {
      const { currentPage } = getters;
      try {
        dispatch("toggleLoader", true, { root: true });

        const response = await noteApi.fetchNotes(currentPage);
        console.log(response);
        if (response.Error) {
          throw Error(response.Error);
        }
        if (currentPage === 1) {
          commit(NOTES, response);
        } else {
          // is for merging arrays of pages
          commit(NEXT_NOTES, response);
        }
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
    async changeCurrentPage({ commit, dispatch }, page) {
      await commit(CURRENT_PAGE, page);
      await dispatch("fetchNotes");
    },

    async reloadCurrentPages({ dispatch, state }) {
      const pages = state.currentPage;
      for (let i = 1; i <= pages; i++) {
        await dispatch("changeCurrentPage", i);
      }
    },

    async deleteNote({ dispatch }, id) {
      try {
        dispatch("toggleLoader", true, { root: true });

        const response = await noteApi.deleteNote(id);
        if (response.Error) {
          throw Error(response.Error);
        }

        dispatch("reloadCurrentPages");

        dispatch(
          "showNotification",
          { msg: "Note has been deleted", color: "green" },
          { root: true }
        );
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
    }
  }
};

export default notesStore;
