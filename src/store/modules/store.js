import api from "@/api";
export default {
  state: {
    goods: []
  },
  actions: {
    addGoods({ state, commit }, product) {
      api.axios.put(api.urls["store"], product).then(res => {
        product = res.data;
        let newGoods = state.goods.concat();
        newGoods.push(product);
        commit("setGoods", newGoods);
      });
    },
    getGoods({ state, commit }) {
      api.axios.get(api.urls["store"]).then(res => {
        commit("setGoods", res.data);
      });
    }
  },
  mutations: {
    setGoods(state, goods) {
      state.goods = goods;
    }
  }
};
