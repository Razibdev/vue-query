<template>
    <form action="" @submit.prevent="formSubmit" style="width:500px; margin:0 auto;">
    <div class="form-group">
    <input type="text" v-model="name" class="form-control" placeholder="Enter name">
    </div>
    <div class="form-group">
        <input type="email" v-model="email"  class="form-control" placeholder="Enter Email">
    </div>
   
    <div class="form-group">
        <input type="password" class="form-control" v-model="password" placeholder="Enter Password">
    </div>

     <div class="form-group">
        <input type="file" @change="imageHandle($event)" id="" class="form-contorl">
    </div>
       

        <button class="btn btn-primary" type="submit">Submit</button>
    </form>
</template>

<script>
import { ref } from '@vue/reactivity'
import {  useMutation } from 'vue-query';
import {addContentDocument} from './add.js';

export default{
    setup(){
        const name = ref('');
        const email = ref('');
        const password = ref('');
        const image = ref([]);


        const imageHandle = (event) =>{
          image.value = event.target.files[0];
            console.log(image.value);
        }

       

        const formSubmit = () =>{
            //  const form = {
            //             name: name.value,
            //             email: email.value,
            //             password: password.value,
            //             image: image.value
            //          };

                     let formData = new FormData();

                    formData.append( 'name',  name.value );
                    formData.append( 'email', email.value );
                    formData.append( 'password', password.value );
                    formData.append( 'image', image.value );

                addInfoDetails.mutate(formData);
        }

        const addInfoDetails = useMutation(addContentDocument, {
            onSuccess: ()=>{
               console.log('ok');
            }
        })

    return { formSubmit, name, email, password, addInfoDetails, addContentDocument, image, imageHandle }

    },

    // methods:{

    //     imageHandle(event){
    //         console.log(event.target.files[0]);
    //     }
        
    // }


}

</script>