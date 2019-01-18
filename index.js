Vue.prototype.$http = axios

const vm = new Vue({
  el: '#app',
  store,
  data: {
    hotels: [],
  },
  components: {
    'hotel-card': hotelCard,
    'hotel-details': hotelDetails,
  },
  created() {
    this.$http
      .get('http://my-json-server.typicode.com/fly365com/code-challenge/hotels')
      .then(response => {
        this.hotels = response.data
      })
  },
  computed: {
    selectedHotel() {
      return this.$store.state.selectedHotel
    }
  }
})