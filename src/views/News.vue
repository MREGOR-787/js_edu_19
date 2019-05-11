<template>
  <div>
    <h2>
      Новости
      <button @click="getNews">Обновить</button>
    </h2>
    <v-card v-for="(item, key) in news" :key="key" style="margin:20px">
      <v-img :src="item.img"></v-img>

      <v-card-title primary-title>
        <div class="center">
          <h3 class="headline mb-0">{{ item.title }}</h3>
          <div>{{ item.text }}</div>
        </div>
      </v-card-title>

      <v-card-action>
        <v-btn flat color="orange">Share</v-btn>
        <v-btn flat color="orange">Explore</v-btn>
      </v-card-action>
    </v-card>
    <v-btn flat @click="addArticle">Добавить новость</v-btn>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "News",
  data: () => ({}),
  computed: {
    ...mapState({
      news: state => state.news.news
    })
  },
  methods: {
    ...mapActions(["addNews", "getNews"]),
    addArticle() {
      let article = {
        title: "Сделано с любовью",
        text: "vuex прекрасен"
      };

      this.addNews(article);
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