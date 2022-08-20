<template>
    <div>
         <form @submit.prevent="formSubmit" method="post" enctype="multipart/form-data">
         <input type="text" name="" v-model="test" id="">
      Select image to upload:
      <input type="file" name="fileToUpload" @change="upload($event)" id="fileToUpload" multiple>
      <input type="submit" value="Upload Image" name="submit">
    </form>

    {{imc}} ok
    </div>

</template>

<script>
import axios from 'axios';
import {ref} from 'vue'
import image from './composition/images.js'

    export default{
        setup() {
            // const images = ref('');
             const imc = ref(null);

            const upload = (event)=>{
               imc.value = image.upload(event);
                
               console.log( imc.value,' ok');
               
            }
            const formSubmit = ()=>{
              const form = new FormData();
              form.append('image', imc.value);

              axios.post('http://127.0.0.1:8000/image_upload', form)
              .then(res =>{
                console.log(res);
              })
                
               console.log( form);
               
            }
            return {  upload, imc, formSubmit}
            },
        data(){
            return{
                image:null,
                test:null,
            }
        },
        methods:{

            
        },

        created(){

        }
    }

</script>