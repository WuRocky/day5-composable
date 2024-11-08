import axios from "axios";
export const useHome = () => {
  const newsList = ref([]);
  const errInfo = ref(null)
  const isLoading = ref(false);

  isLoading.value = true;
  
  axios.get('https://nuxr3.zeabur.app/api/v1/home/news/')
    .then(function (response) {
      newsList.value = response.data.result;
    })
    .catch(function (error) {
      errInfo.value = error
    })
    .finally(() => {
      isLoading.value = false; 
    });

  return {newsList, errInfo, isLoading};
};
