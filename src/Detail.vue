<template>
    <div>
    
       <div v-for="dat in data" :key="dat.name">
       <p>{{dat.name}}</p>
       </div>
      

        <div ref="infinitescrolltrigger" id="scoll-trigger"></div>
      <div class="circle-loader" v-if="showloader">.....</div>
    </div>
</template>

<script>
import { ref, onMounted } from 'vue';


export default{
 setup() {
   const data = ref([]);

   const page = ref(1);
   const showloader = ref(true);
   const infinitescrolltrigger = ref(null);
   const last_page = 9;
   const dataFetch = async (page) =>{
     const response = await fetch(`https://swapi.dev/api/people?page=${page}`);
       const datas = await response.json();

        if(page <= last_page){
          datas.results.forEach(item => {
            data.value.push(item);
           
            });
        }
      //  data.value = {...datas.results};
      console.log(datas.count)
      
   };


   const scrollTrigger =() =>{
        const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if(entry.intersectionRatio > 0 && page.value < 1000) {
              showloader.value = true;
              setTimeout(() => {
                if( page.value<= last_page ){
                    dataFetch(page.value)
                 page.value +=1;
                }
                showloader.value = false;

              }, 3000); 
            }
          });
        });

        observer.observe(infinitescrolltrigger.value);
      }



      onMounted(()=>{
        scrollTrigger()
        dataFetch(page.value);
      })


   
    return { scrollTrigger, infinitescrolltrigger, showloader, dataFetch, data };
  },
}
</script>

<style>

</style>