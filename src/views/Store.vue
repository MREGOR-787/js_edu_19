<template>
  <div>
    <h2>Магазин</h2>
    <v-btn flat @click="getGoods">Обновить</v-btn>
    <v-card v-for="(item, key) in goods" :key="key" style="margin:20px">
      <v-img :src="item.img"></v-img>

      <v-card-title primary-title>
        <div class="center">
          <h3 class="headline mb-0">{{ item.title }}</h3>
          <div>{{ item.text }}</div>
          <div>Цена: {{ item.price }}</div>
        </div>
      </v-card-title>

      <v-card-action>
        <v-btn flat color="orange">Share</v-btn>
        <v-btn flat color="orange">Explore</v-btn>
      </v-card-action>
    </v-card>
    <v-btn flat @click="addProduct">Добавить товар</v-btn>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "Store",
  data: () => ({}),
  computed: {
    ...mapState({
      goods: state => state.store.goods
    })
  },
  methods: {
    ...mapActions(["addGoods", "getGoods"]),
    addProduct() {
      let product = {
        title: "Товар",
        text: "Новый товар",
        price: "По договорённости"
      };

      this.addGoods(product);
    }
  }
};
</script>

<style>
.center {
  text-align: center;
  width: 100%;
}
</style>