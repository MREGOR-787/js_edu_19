export default {
  state: {
    goods: [
      {
        title: "Яблоки",
        text: "Вкусные яблоки",
        price: 300,
        img: ""
      }
    ]
  },
  actions: {
    addGoods({ state, commit }, product) {
      let newGoods = state.goods.concat();
      newGoods.push(product);
      commit("setGoods", newGoods);
    }
  },
  mutations: {
    setGoods(state, goods) {
      state.goods = goods;
    }
  }
};
