// import { useFetch } from "@vueuse/core";
// import {ref} from 'vue';
// import axios from "axios";
const cacheMap = reactive(new Map());

export const useFetchCache = (key, url) =>{
  const info = useFetch(url);

  const update = () => cacheMap.set(key, info.response.value);
  const clear = () => cacheMap.set(key, undefined);

  const fetch = async () => {
    try{
      await info.fetch();
      update();
    }catch{
      clear();
    }
  }

  const response = computed(() =>cacheMap.get(key));
  const data = computed(() => {
    console.log(response.value)
   return response.value?.data;
  });

  if(response.value == null) await fetch();
  return {...info, fetch, data, response, clear}

}
export default useFetchCache;

// export const useFetch = (url) => {
//   const data = ref(null);
//   const response = ref(null);
//   const error = ref(null);
//   const loading = ref(false);

//   const fetch = async () => {
//     loading.value = true;
//     try {
//       const result = await axios.request({
//         url,
//       });

//       response.value = result;
//       data.value = result.data;
//     } catch (ex) {
//       error.value = ex;
//     } finally {
//       loading.value = false;
//     }
//   };

//   fetch();

//   return { response, error, data, loading, fetch };
// };
// export default useFetch;