Vue.prototype.$http = axios

const vm = new Vue({
  el: '#app',
  store,
  data: {
    hotels: [],
  },
  components: {
    'hotel-details': hotelDetails
  },
  methods: {
    show(hotel) {
      if (this.$store.state.selectedHotel.id !== hotel.id) {
        this.$store.state.selectedHotel = hotel //show the available data before getting the details
        this.getDetails(hotel)
      }
    },
    getDetails(hotel) {
      this.$http
        .get('http://my-json-server.typicode.com/fly365com/code-challenge/hotelDetails/' + hotel.id)
        .then(response => {
          this.$store.state.selectedHotel = response.data
        })
    }
  },
  created() {
    this.$http
      .get('http://my-json-server.typicode.com/fly365com/code-challenge/hotels')
      .then(response => {
        this.hotels = response.data
      })
  },
  computed: {
    nights() {
      return this.$store.state.nights
    },
    selectedHotel() {
      return this.$store.state.selectedHotel
    }
  }
})