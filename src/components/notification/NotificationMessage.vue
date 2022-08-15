<template>
    <div>

        <div :class="typeClass" class="mbh-notification-box">{{notification.message}} <span @click="removeBtn">X</span></div>
        <!-- <div class="mbh-failure mbh-notification-box">This is the failure box</div>
        <div class="mbh-warning mbh-notification-box">This is the warning box</div>
        <div class="mbh-information mbh-notification-box">This is the information box</div>
        <div class="mbh-question mbh-notification-box">This is the question box</div>
        <div class="mbh-tip mbh-notification-box">This is the tip box</div>
        <div class="mbh-notice mbh-notification-box">This is the notice box</div> -->
            </div>
</template>

<script>
import { mapActions } from 'vuex';
    export default{
        props:['notification'],
        computed:{
            typeClass(){
                return `mbh-${this.notification.type}`;
            }
        },
        data(){
            return{
                timeout:null
            }
        },
        created(){
           this.timeout = setTimeout(()=>{
                this.removeNotification(this.notification);
            }, 3000)
        },
        beforeUnmount() {
            clearTimeout(this.timeout);
        },

        methods:{
            ... mapActions(['removeNotification']),
            removeBtn(){
                  this.removeNotification(this.notification);
            }

        }
    }
</script>
 <!-- removeNOt(){
             this.REMOVE_NOTIFICATION();
           } -->
<style>
@import url('//maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css');
@import url('https://fonts.googleapis.com/css?family=Open+Sans');
.mbh-notification-box {
  -moz-border-radius: 3px;
  -webkit-border-radius: 3px;
  border-radius: 3px;
  color: #ffffff;
  font-family: 'Open Sans', sans-serif;
  margin-bottom: 25px;
  padding: 10px 14px 10px 44px;
  position: relative;
  width: -moz-fit-content;
  width: -webkit-fit-content;
  width: fit-content;
}
  .mbh-notification-box:before {
    font-family: FontAwesome;
    font-size: 21px;
    left: 14px;
    position: absolute;
  }
.mbh-success {
  background-color: #2ecc71;
}
  .mbh-success:before {
    content: "\f00c";
    margin-left: -2px;
  }
.mbh-failure {
  background-color: #e74c3c;
}
  .mbh-failure:before {
    content: "\f00d";
  }
.mbh-warning {
  background-color: #e67e22;
}
  .mbh-warning:before {
    content: "\f12a";
    margin-left: 5px;
  }
.mbh-information {
  background-color: #3498db;
}
  .mbh-information:before {
    content: "\f129";
    margin-left: 4px;
  }
.mbh-question {
  background-color: #f1c40f;
}
  .mbh-question:before {
    content: "\f128";
    margin-left: 2px;
  }
.mbh-tip {
  background-color: #16a085;
}
  .mbh-tip:before {
    content: "\f0eb";
    margin-left: 2px;
  }
.mbh-notice {
  background-color: #bea474;
}
  .mbh-notice:before {
    content: "\f0a1";
    margin-left: -1px;
  }
</style>