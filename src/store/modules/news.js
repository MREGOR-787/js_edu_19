export default {
  state: {
    news: [
      {
        title: "Хранилище",
        text: "Ура, сложная задача",
        img: ""
      }
    ]
  },
  actions: {
    addNews({ state, commit }, article) {
      let newNews = state.news.concat();
      newNews.push(article);
      commit("setNews", newNews);
    }
  },
  mutations: {
    setNews(state, news) {
      state.news = news;
    }
  }
};
