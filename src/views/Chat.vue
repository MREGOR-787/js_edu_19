<template>
  <div>
    <h2>Чат</h2>
    <v-btn flat @click="getMessages">Обновить</v-btn>
    <v-card v-for="(item, key) in messages" :key="key" style="margin:20px">
      <v-card-title primary-title>
        <div class="center">
          <h3 class="headline mb-0">{{ item.from }}</h3>
          <div>{{ item.text }}</div>
        </div>
      </v-card-title>

      <v-card-action>
        <v-btn flat color="orange">Share</v-btn>
        <v-btn flat color="orange">Explore</v-btn>
      </v-card-action>
    </v-card>
    <v-btn flat @click="addMessage">Добавить сообщение</v-btn>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "Chat",
  data: () => ({}),
  computed: {
    ...mapState({
      messages: state => state.chat.messages
    })
  },
  methods: {
    ...mapActions(["addMessages", "getMessages"]),
    addMessage() {
      let message = {
        text: "Новое сообщение",
        from: "user"
      };

      this.addMessages(message);
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
