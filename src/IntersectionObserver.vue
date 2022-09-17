<template>
  <h3>IntersectionObserver.vue</h3>
  <div v-for="data in book" :key="data.id" style="color: white">
    {{ data.name }}
  </div>
  <button id="load_button" ref="load_data">Loading.....</button>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      observer: IntersectionObserver,
      book: [],
    };
  },
  methods: {
    getData() {
      axios
        .get("http://127.0.0.1:8000/test")
        .then((res) => {
          this.book = this.book.concat(res.data.data);
          console.log(this.book);
        })
        .catch((error) => console.log(error.response.data));
    },

    scrollTrigger() {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.intersectionRatio) {
              setTimeout(() => {
                this.getData();
              }, 1);
            }
          });
        },
        {
          rootMargin: "0px 0px 300px 0px",
        }
      );

      observer.observe(this.$refs.load_data);
    },
  },

  mounted() {
    this.scrollTrigger();

    // this.observer = new IntersectionObserver(
    //   (entries) => {
    //     entries.forEach((entry) => {
    //       if (entry.isIntersecting) this.getData();
    //     });
    //   },
    //   {
    //     rootMargin: "0px 0px 200px 0px",
    //   }
    // );

    // const button = document.querySelector("#load_button");

    // console.log(button);
    // if (button) this.observer.observer(button);
  },
};
</script>