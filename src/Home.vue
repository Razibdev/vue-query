<template>




    <div>
      <div>
        <CustomSelect :options="datac" />
      </div>

      
        <div v-if="isError">{{isError}}</div>
        <div v-if="isLoading">{{isLoading}}</div>
       <div v-for="da in data" :key="da.id">
        <p>{{da.name}}</p>
        <img width="100" height="100" :src="da.img" alt=""/>
       </div>
    </div>
</template>

<script>
import CustomSelect from './components/CustomSelect.vue';

import { useQuery } from "vue-query";


function useTodosQuery() {
  return useQuery("todos",
    async () => {
        const response = await fetch('https://www.breakingbadapi.com/api/characters?limit=60');
        const data = await response.json();
        console.log(data.length)
        return data;
    });
}

export default{
  components:{
CustomSelect

  },
  data(){
    return{
      datac: ["cat", "dog", "rat"]
    }
  },
 setup() {
    const { isLoading, isError, data, error, isFetching } = useTodosQuery();
    return { isLoading, isError, data, error, isFetching };
  },
}
</script>

<style>

</style>