import mutations from "@/store/mutations";

const { SHOW_NOTIFICATION } = mutations;

const notificationStore = {
  state: {
    messageArr: [] // Array because of the toast in another UI
  },
  getters: {
    messageArr: ({ messageArr }) => messageArr[messageArr.length - 1]
  },
  mutations: {
    [SHOW_NOTIFICATION](state, msg) {
      state.messageArr.push(msg);
    }
  },
  actions: {
    showNotification({ commit }, msg) {
      commit(SHOW_NOTIFICATION, msg);
    }
  }
};

export default notificationStore;
