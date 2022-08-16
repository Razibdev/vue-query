<template>
    <div style="height: 1000px">
        <div v-for="data in animi_list" :key="data.id">
            <p>{{data.title}}</p>
        </div>
    </div>
</template>

<script>
export default{
    data(){
        return {
            url:"https://jsonplaceholder.typicode.com/todos/",
            animi_list : [],
            page:1
        }
    },

    methods:{
        fetchData(page){
            fetch(`https://jsonplaceholder.typicode.com/todos?_page=${page}?_limit=10`)
            .then(response => response.json())
            .then(json => {
                this.animi_list = [ ...this.animi_list, ...json];
                console.log(this.animi_list)

            });
        },

        handleScroll(){
            if(window.scrollY + window.innerHeight >= document.body.scrollHeight-50){
              let page = this.page++
               this.fetchData(page)
                // this.animi_list = [...this.animi_list]
            }
        }
    },

    mounted(){
         this.fetchData(this.page);
        window.addEventListener('scroll', this.handleScroll)
    }


}
</script>