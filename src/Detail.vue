<template>
    <div>
        <div v-if="isError">{{isError}}</div>
        <div v-if="isLoading">{{isLoading}}</div>
       <!-- <div v-for="da in data" :key="da.id">
        <p>{{da.name}}</p>
        <img width="100" height="100" :src="da.img" alt=""/>
       </div> -->

       <div v-for="dat in data.results" :key="dat.name">
       <p>{{dat.name}}</p>
       </div>
       <div @click="nextPageNow">Next</div>
       <div @click="previous">Previous</div>
    </div>
</template>

<script>
import { useQuery } from "vue-query";
import { ref } from 'vue';
const page = ref(1);
// const pages = page.value;
function useTodosQuery() {
  return useQuery(["todoss", page],

    async () => {
        console.log(page)
        const response = await fetch(`https://swapi.dev/api/people?page=${page.value}`);
        const data = await response.json();
        // console.log(data);
        return data;
    },
    {
        keepPreviousData: true,
    });
}

export default{
 setup() {
   
    const { isLoading, isError, data, error, isFetching } = useTodosQuery();

     const nextPageNow = () =>{
       page.value +=1;
    }
     const previous = () =>{
       page.value -=1;
    }
    return { isLoading, isError, data, error, isFetching, nextPageNow, previous };
  },
}
</script>

<style>

</style>