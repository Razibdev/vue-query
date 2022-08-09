<template>
    <form action="" @submit.prevent="formSubmit">
        <input type="text" v-model="name" placeholder="Enter name">
        <input type="email" v-model="email" placeholder="Enter Email">
        <input type="password" v-model="password" placeholder="Enter Password">

        <button type="submit">Submit</button>
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

       

        const formSubmit = () =>{
             const form = {
            name: name.value,
            email: email.value,
            password: password.value
        };
            addInfoDetails.mutate(form);
        }

        const addInfoDetails = useMutation(addContentDocument, {
            onSuccess: ()=>{
               console.log('ok');
            }
        })

    return { formSubmit, name, email, password, addInfoDetails, addContentDocument }

    }
}

</script>