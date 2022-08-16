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
       <!-- <div @click="nextPageNow">Next</div>
       <div @click="previous">Previous</div> -->

        <div ref="infinitescrolltrigger" id="scoll-trigger"></div>
      <div class="circle-loader" v-if="showloader"></div>
    </div>
</template>

<script>
import { useQuery } from "vue-query";
import { onMounted, ref } from 'vue';
const page = ref(1);
const showloader = ref(false);
const infinitescrolltrigger = ref(null);
// const pages = page.value;
function useTodosQuery() {
  return useQuery(["todoss", page],

    async () => {
        const response = await fetch(`https://swapi.dev/api/people?page=${page.value}`);
        const data = await response.json();
        console.log(data);
        return data;
    },
    {
        keepPreviousData: true,
    });
}

export default{
 setup() {
   
    const { isLoading, isError, data, error, isFetching } = useTodosQuery();

   const scrollTrigger =() =>{
        const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if(entry.intersectionRatio > 0 && page.value < 1000) {
              showloader.value = true;
              setTimeout(() => {
               page.value += 1;
               const datas = [... data['results']];
               console.log(datas)
                showloader.value = false;
              }, 10); // simulate Ajax-Call ;-)
            }
          });
        });

        observer.observe(infinitescrolltrigger.value);
      }



      onMounted(()=>{
        scrollTrigger()
      })


     const nextPageNow = () =>{
       page.value +=1;
    }

     const previous = () =>{
       page.value -=1;
    }
    return { isLoading, isError, data, error, isFetching, nextPageNow, previous, showloader, scrollTrigger, infinitescrolltrigger };
  },
}
</script>

<style>

</style>