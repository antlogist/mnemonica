import noteApi from "@/services/noteApi";
import mutations from "@/store/mutations";

const { SHOW_DIALOG, CURRENT_NOTE } = mutations;

const noteStore = {
  namespaced: true,
  state: {
    isDialogNoteShow: false,
    currentNoteId: "",
    currentNote: {}
  },
  getters: {
    isDialogNoteShow: ({ isDialogNoteShow }) => isDialogNoteShow,
    currentNoteId: ({ currentNoteId }) => currentNoteId,
    currentNote: ({ currentNote }) => currentNote
  },
  mutations: {
    [SHOW_DIALOG](state, bool) {
      state.isDialogNoteShow = bool;
    },
    [CURRENT_NOTE](state, note) {
      state.currentNote = note;
    },
    changeTitle(state, title) {
      state.currentNote.title ? (state.currentNote.title.rendered = title) : "";
    },
    changeExcerpt(state, excerpt) {
      state.currentNote.excerpt
        ? (state.currentNote.excerpt.rendered = excerpt)
        : "";
    }
  },
  actions: {
    openDialogNote({ commit }) {
      commit("SHOW_DIALOG", true);
    },
    closeDialogNote({ commit }) {
      commit("CURRENT_NOTE", {});
      commit("SHOW_DIALOG", false);
    },
    async fetchNote({ dispatch, commit }, id) {
      try {
        dispatch("toggleLoader", true, { root: true });
        const response = await noteApi.fetchNote(id);
        if (response.Error) {
          throw Error(response.Error);
        }
        commit(CURRENT_NOTE, response);
      } catch (err) {
        console.log(err);
      } finally {
        dispatch("toggleLoader", false, { root: true });
      }
    },
    async createNote({ dispatch, commit }) {
      try {
        dispatch("toggleLoader", true, { root: true });
        const response = await noteApi.createNote();
        if (response.Error) {
          throw Error(response.Error);
        }
        dispatch("notes/reloadCurrentPages", {}, { root: true });
        commit(CURRENT_NOTE, response);
      } catch (err) {
        console.log(err);
      } finally {
        dispatch("toggleLoader", false, { root: true });
      }
    },
    changeTitle({ commit }, title) {
      commit("changeTitle", title);
    },
    changeExcerpt({ commit }, excerpt) {
      commit("changeExcerpt", excerpt);
    },
    async saveNote({ dispatch, state }) {
      try {
        dispatch("toggleLoader", true, { root: true });
        const id = state.currentNote.id;
        const title = state.currentNote.title.rendered;
        const excerpt = state.currentNote.excerpt.rendered;
        const response = await noteApi.saveNote(id, title, excerpt);
        if (response.Error) {
          throw Error(response.Error);
        }
        dispatch("notes/reloadCurrentPages", {}, { root: true });
      } catch (err) {
        console.log(err);
      } finally {
        dispatch("toggleLoader", false, { root: true });
      }
    }
  }
};

export default noteStore;
