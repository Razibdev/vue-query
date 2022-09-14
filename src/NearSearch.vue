<template>
  <div></div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      lng: "",
      lat: "",
      shops: [],
      loading: false,
      locationErrorMessage: "",
      x: "",
    };
  },
  methods: {
    fetchShops() {
      this.loading = true;
      axios
        .get(`http://127.0.0.1:8000/api/getdata/dashboard`,
          {
            params: {
              lng: this.lng,
              lat: this.lat,
            },
          }
        )
        .then((res) => {
          this.shops = res.data.shops;
        })
        .finally(() => {
          this.loading = false;
        });
    },

    getLocation(closure) {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            this.lng = position.coords.longitude;
            this.lat = position.coords.latitude;
            closure();
          },
          (error) => {
            if (error.code == 1) {
              this.locationErrorMessage = "Please allow location access";
            }
          }
        );
      } else {
        this.x.innerHTML = "Geolocation is not supported by this browser.";
      }
    },
  },
  mounted() {
    this.getLocation(() => {
      this.fetchShops();
    });
  },
};
</script>