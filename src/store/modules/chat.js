import api from "@/api";
export default {
  state: {
    chats: [
      {
        id: 0,
        title: "Чат с Егором"
      },
      {
        id: 1,
        title: "Чат с Оксаной"
      }
    ],
    messages: [
      {
        id: 0,
        from: 1,
        chat: 0,
        text: "Привет, Егор"
      },
      {
        id: 1,
        from: 2,
        chat: 0,
        text: "Здравствуйте, ВА"
      }
    ]
  },
  getters: {
    chatMessages: state => id => {
      return state.messages.filter(message => message.chat == id);
    }
  },
  actions: {
    getMessages({ state, commit }) {
      
    },
    sendMessage({ state, commit }, message) {}
  },
  mutations: {
    setMessages(state, messages) {
      state.messages = messages;
    }
  }
};
