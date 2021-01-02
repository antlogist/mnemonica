import noteApi from "@/services/noteApi";
import mutations from "@/store/mutations";

const { SHOW_DIALOG, CURRENT_NOTE, CATS } = mutations;

const noteStore = {
  namespaced: true,
  state: {
    isDialogNoteShow: false,
    currentNoteId: "",
    currentNote: {},
    cats: {}
  },
  getters: {
    isDialogNoteShow: ({ isDialogNoteShow }) => isDialogNoteShow,
    currentNoteId: ({ currentNoteId }) => currentNoteId,
    currentNote: ({ currentNote }) => currentNote,
    cats: ({ cats }) => cats
  },
  mutations: {
    [SHOW_DIALOG](state, bool) {
      state.isDialogNoteShow = bool;
    },
    [CURRENT_NOTE](state, note) {
      state.currentNote = note;
    },
    [CATS](state, cats) {
      state.cats = cats;
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
        const [response, cats] = await Promise.all([
          noteApi.fetchNote(id),
          noteApi.fetchCats()
        ]);
        console.log(cats);
        console.log(response);
        if (response.Error) {
          throw Error(response.Error);
        }
        commit("CURRENT_NOTE", response);
        commit("CATS", cats);
      } catch (err) {
        console.log(err);
      } finally {
        dispatch("toggleLoader", false, { root: true });
      }
    },
    async createNote({ dispatch, commit }) {
      try {
        dispatch("toggleLoader", true, { root: true });
        const [response, cats] = await Promise.all([
          noteApi.createNote(),
          noteApi.fetchCats()
        ]);
        console.log(cats);
        console.log(response);
        if (response.Error) {
          throw Error(response.Error);
        }
        dispatch("notes/reloadCurrentPages", {}, { root: true });
        commit("CURRENT_NOTE", response);
        commit("CATS", cats);
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
        const catId = state.currentNote.categories[0];
        const response = await noteApi.saveNote(id, title, excerpt, catId);
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
