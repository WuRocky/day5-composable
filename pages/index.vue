<script setup>
// const {count, increment, decrement} = useCounter()
// const title = ref('計數器');

import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/css/index.css";

const { newsList, errInfo, isLoading } = useHome();

</script>

<template>
  <!-- <div>
    <h1>{{ title }}</h1>
    <div class="counter">
      <button type="button" @click="decrement">減少</button>
      <p>{{ count }}</p>
      <button type="button" @click="increment">增加</button>
    </div>
  </div> -->

  <div class="container">
    <h1>最新消息</h1>

    <p v-if="errInfo" class="error-message">{{ errInfo }}</p>
    <NewsCard v-for="news in newsList" :key="news.id" v-bind="news" />

    <ClientOnly>
      <Loading v-model:active="isLoading" />
    </ClientOnly>
  </div>
</template>

<style scoped >
.counter {
  display: flex;
  gap: 1rem;
}

.container {
  max-width: 1000px;
  margin: 0 auto;
}
</style>
