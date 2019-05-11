import api from "@/api";
export default {
  state: {
    messages: []
  },
  actions: {
    addMessages({ state, commit }, message) {
      api.axios.put(api.urls["chat"], message).then(res => {
        message = res.data;
        let newMessages = state.messages.concat();
        newMessages.push(message);
        commit("setMessages", newMessages);
      });
    },
    getMessages({ state, commit }) {
      api.axios.get(api.urls["chat"]).then(res => {
        commit("setMessages", res.data);
      });
    }
  },
  mutations: {
    setMessages(state, messages) {
      state.messages = messages;
    }
  }
};
