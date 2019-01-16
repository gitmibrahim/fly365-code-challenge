const hotelCard = {
  props: ['hotel'],
  data() {
    return {
      
    }
  },
  template: '#hotel-card',
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
  computed: {
    nights() {
      return this.$store.state.nights
    }
  }
}