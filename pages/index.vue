<script setup>
// const {count, increment, decrement} = useCounter()

// const title = ref('計數器');


import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/css/index.css";
import axios from "axios";
const newsList = ref([]);
const isLoading = ref(false);



axios.get('https://nuxr3.zeabur.app/api/v1/home/news/') // 放入要發出get請求網址
  .then(function (response) {
    // 當請求成功時
    console.log("成功")
    console.log(response);
  })
  .catch(function (error) {
    console.log("失敗")
    // 請求失敗時
    console.log(error);
  })
  .then(function () {
    // 總是執行
  });


// API 路徑 : https://nuxr3.zeabur.app/api/v1/home/news/
// 使用 ES6 fetch() 或是 axios.get() 串接 API
// 切換 isLoading 狀態


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
    <!-- <NewsCard v-for="..." :key="..."  v-bind="..." /> -->

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
