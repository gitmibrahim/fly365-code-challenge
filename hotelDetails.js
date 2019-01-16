const hotelDetails = {
  props: ['hotel'],
  data() {
    return {
      reviews: null,
      ...store.state
    }
  },
  template: '#hotel-details',
  watch: {
    hotel: function(newHotel) {
      if(newHotel.hasOwnProperty('reviews')) {
        console.log(this.$store.state.sortOrder);
        this.$store.state.sortOrder === 'desc'
        ? this.reviews = newHotel.reviews.sort((a, b) => parseFloat(b.score) - parseFloat(a.score))
        : this.reviews = newHotel.reviews.sort((a, b) => parseFloat(a.score) - parseFloat(b.score))
      }
    }
  },
  methods: {
    sort(way, reviews) {
      if(way === 'desc' && this.$store.state.sortOrder === 'asec') {
        this.reviews = reviews.sort((a, b) => parseFloat(b.score) - parseFloat(a.score))
        updateOrder('desc')
      }
      else if(way === 'asec' && this.$store.state.sortOrder === 'desc') {
        this.reviews = reviews.sort((a, b) => parseFloat(a.score) - parseFloat(b.score))
        updateOrder('asec')
      }
    },
    updateNights(e) {
      this.$store.commit('updateNights', e.target.value)
    },
    updateOrder(order) {
      this.$store.commit('updateOrder', order)
    },
  },
  created() {
    console.log(store.getters.getNights);
  },
}