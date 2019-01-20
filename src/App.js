Vue.prototype.$http = axios

const App = new Vue({
  el: '#app',
  store,
  data: {
    hotels: [],
  },
  components: {
    'hotel-card': HotelCard,
    'hotel-details': HotelDetails,
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