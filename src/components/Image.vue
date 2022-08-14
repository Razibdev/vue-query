<template>
    <div>
         <form @submit.prevent="formSubmit" method="post" enctype="multipart/form-data">
         <input type="text" name="" v-model="test" id="">
      Select image to upload:
      <input type="file" name="fileToUpload" @change="upload($event)" id="fileToUpload" multiple>
      <input type="submit" value="Upload Image" name="submit">
    </form>
    </div>
</template>

<script>
import axios from 'axios';

    export default{

        data(){
            return{
                image:null,
                test:null,
            }
        },
        methods:{

            formSubmit(){

                const form =  new FormData();
                form.append("fileToUpload", this.image);
                form.append("test", this.test);
                axios.post('http://localhost:8000/image_upload', form)
                .then(res=>{
                    console.log(res);
                });



                 axios.post("http://localhost:8000/image_upload",  this.image).then((res) => {
    console.log(res);
  });

            },
             upload(event){
                var f = event.target.files[0];
                var _image = this;
                console.log(f);
                var fileName = f.name.split('.')[0];
                console.log(f.size);
                var img = new Image();
                img.src = URL.createObjectURL(f);

                if(f.size >=  100006){
                     img.onload = function(){
                    var canvas = document.createElement('canvas');
                    canvas.width = img.width - 100;
                    canvas.height = img.height - 100;
                    var ctx = canvas.getContext('2d');
                    ctx.drawImage(img, 0, 0);
                    canvas.toBlob(function(blob){
                            console.info(blob.size);
                            var f2 = new File([blob], fileName + ".webp");
                        //    _image = f2;
                        //     console.log(_image);
                            // var xhr = new XMLHttpRequest();

                            _image.image = f2;
                            console.log(_image.image);
                        //    _image.image = new FormData();
                        //     _image.image.append("fileToUpload", f2);
                        //     _image.image.append("test", _image.test);
                            // xhr.open("POST", "upload.php");
                            // xhr.send(form);
                    }, 'image/webp', 0.00001);
                }
                }else{


                     img.onload = function(){
                    var canvas = document.createElement('canvas');
                    canvas.width = img.width;
                    canvas.height = img.height;
                    var ctx = canvas.getContext('2d');
                    ctx.drawImage(img, 0, 0);
                    canvas.toBlob(function(blob){
                            console.info(blob.size);
                            var f2 = new File([blob], fileName + ".webp");
                        //    _image = f2;
                        //     console.log(_image);
                            // var xhr = new XMLHttpRequest();

                            _image.image = f2;
                            console.log(_image.image);
                        //    _image.image = new FormData();
                        //     _image.image.append("fileToUpload", f2);
                        //     _image.image.append("test", _image.test);
                            // xhr.open("POST", "upload.php");
                            // xhr.send(form);
                    }, 'image/webp', 0.5);
                    }
                }

               



            }
        }
    }

</script>