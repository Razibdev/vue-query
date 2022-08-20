import { ref } from "vue";

export default {
  upload(event) {
    const f2 = ref([]);
    try {
      var f = event.target.files[0];
      console.log(f);
      var fileName = f.name.split(".")[0];
      console.log(f.size);
      var img = new Image();
      img.src = URL.createObjectURL(f);

      if (f.size >= 100006) {
        img.onload = function () {
          var canvas = document.createElement("canvas");
          canvas.width = img.width - 100;
          canvas.height = img.height - 100;
          var ctx = canvas.getContext("2d");
          ctx.drawImage(img, 0, 0);
          canvas.toBlob(
            function (blob) {
              f2.value = new File([blob], fileName + ".webp");
            },
            "image/webp",
            0.00001
          );
        };
      } else {
        img.onload = function () {
          var canvas = document.createElement("canvas");
          canvas.width = img.width;
          canvas.height = img.height;
          var ctx = canvas.getContext("2d");
          ctx.drawImage(img, 0, 0);
          canvas.toBlob(
            function (blob) {
              f2.value = new File([blob], fileName + ".webp");
            },
            "image/webp",
            0.5
          );
        };
      }
      return f2.value;
    } catch (err) {

        console.log(err.message);
    }
  },
};
