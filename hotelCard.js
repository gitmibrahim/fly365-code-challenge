const hotelCard = {
  props: ['hotel'],
  template: '#hotel-card',
  methods: {
    show(hotel) {
      if (this.$store.state.selectedHotel.id !== hotel.id) {
        this.$store.state.selectedHotel = hotel //show the available data before getting the details
      }
    },
  },
  computed: {
    nights() {
      return this.$store.state.nights
    },
    grade() {
      if (this.hotel.totalScore < 5) return 'Bad'
      else if (this.hotel.totalScore < 6.6) return 'Satisfactory'
      else if (this.hotel.totalScore < 7.6) return 'Good'
      else if (this.hotel.totalScore < 8.6) return 'Very good'
      else return 'Excellent'
    }
  }
}