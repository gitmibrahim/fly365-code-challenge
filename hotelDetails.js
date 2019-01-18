const hotelDetails = {
  props: ['hotel'],
  data() {
    return {
      reviews: null,
      selectedPic: '',
      selectedHotel: {}
    }
  },
  template: '#hotel-details',
  components: {
    'hotel-photos': hotelPhotos,
    'hotel-reviews': hotelReviews,
  },
  watch: {
    hotel: function(newHotel) {
      if(newHotel.id) {
        this.$http
          .get('http://my-json-server.typicode.com/fly365com/code-challenge/hotelDetails/' + newHotel.id)
          .then(response => {
            this.selectedHotel = response.data
            this.selectedHotel.pictures.map(p => p.selected = false)
            this.selectedPic = this.selectedHotel.pictures[0].photo
            this.selectedHotel.pictures[0].selected = true
          })
      }
    }
  },
  methods: {
    updateNights(e) {
      this.$store.commit('updateNights', e.target.value)
    },
    updateOrder(order) {
      this.$store.commit('updateOrder', order)
    },
    togglePicture(index) {
      this.selectedPic = this.selectedHotel.pictures[index].photo
      this.selectedHotel.pictures.map(p => p.selected = false)
      this.selectedHotel.pictures[index].selected = true
    }
  },
  computed: {
    nights() {
      return this.$store.state.nights
    },
    sortOrder() {
      return this.$store.state.sortOrder
    },
  }
}