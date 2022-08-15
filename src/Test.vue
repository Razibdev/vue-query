<template>
    <div>
        <NotificationList />

        <button @click="submitNotification">Submit</button>
    </div>

</template>

<script>
import NotificationList from "./components/notification/NotificationList.vue";

export default{
    components:{
        NotificationList
    },
    methods:{
        submitNotification(){
            this.$store.dispatch('addNotification',{
                type:'failure',
                message: 'Hello world'
            })
        }
    }
}
</script>