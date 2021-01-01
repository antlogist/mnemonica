import authApi from "@/services/authApi";
import mutations from "@/store/mutations";
const { SHOW_DIALOG, IS_LOGIN } = mutations;
const authStore = {
  namespaced: false,
  state: {
    isLogin: false,
    showDialogLogin: false
  },
  getters: {
    showDialogLogin: ({ showDialogLogin }) => showDialogLogin,
    isLogin: ({ isLogin }) => isLogin
  },
  mutations: {
    [SHOW_DIALOG](state, bool) {
      state.showDialogLogin = bool;
    },
    [IS_LOGIN](state, bool) {
      state.isLogin = bool;
    }
  },
  actions: {
    openDialogLogin({ commit }) {
      commit("SHOW_DIALOG", true);
    },
    closeDialogLogin({ commit }) {
      commit("SHOW_DIALOG", false);
    },
    async loginApp({ dispatch, commit }, { name, pass }) {
      try {
        dispatch("toggleLoader", true, { root: true });
        const loginPass = "Basic " + btoa(`${name}:${pass}`);

        // Save a token into the local storage
        localStorage.setItem("mnemonicaToken", loginPass);

        const response = await authApi.login();
        if (response.Error) {
          throw Error(response.Error);
        }
        commit(IS_LOGIN, true);
        dispatch(
          "showNotification",
          { msg: "You've logged in successfully.", color: "green" },
          { root: true }
        );
      } catch (err) {
        commit(IS_LOGIN, false);
        dispatch(
          "showNotification",
          { msg: err.message, color: "red" },
          { root: true }
        );
        console.log(err);
      } finally {
        commit(SHOW_DIALOG, false);
        dispatch("toggleLoader", false, { root: true });
      }
    },
    async loginOnMounted({ dispatch, commit }) {
      if (localStorage.mnemonicaToken) {
        try {
          dispatch("toggleLoader", true, { root: true });
          const response = await authApi.login();
          if (response.Error) {
            throw Error(response.Error);
          }

          commit(IS_LOGIN, true);

          dispatch(
            "showNotification",
            { msg: "You've logged in successfully.", color: "green" },
            { root: true }
          );
        } catch (err) {
          commit(IS_LOGIN, false);
          dispatch(
            "showNotification",
            { msg: err.message, color: "red" },
            { root: true }
          );
          console.log(err);
        } finally {
          commit(SHOW_DIALOG, false);
          dispatch("toggleLoader", false, { root: true });
        }
      }
    }
  }
};

export default authStore;
