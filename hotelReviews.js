const hotelReviews = {
  props: ['hotelReviews'],
  data() {
    return {
      reviews: [...this.hotelReviews],
      isDesc: false,
      isAsec: false
    }
  },
  template: '#hotel-reviews',
  created() {
    if (this.$store.state.sortOrder === 'desc') {
      this.reviews = this.reviews.sort((a, b) => parseFloat(b.score) - parseFloat(a.score))
      this.isDesc = true
      this.isAsec = false
    }
    else if (this.$store.state.sortOrder === 'asec') {
      this.reviews = this.reviews.sort((a, b) => parseFloat(a.score) - parseFloat(b.score))
      this.isDesc = false
      this.isAsec = true
    }
    else {
      this.reviews = [...this.hotelReviews]
      this.isDesc = false
      this.isAsec = false
    }
  },
  methods: {
    sort(way, reviews) {
      console.log(way);
      if(way === 'desc' && (this.$store.state.sortOrder === 'asec' || this.$store.state.sortOrder === '')) {
        this.reviews = reviews.sort((a, b) => parseFloat(b.score) - parseFloat(a.score))
        this.isDesc = true
        this.isAsec = false
        this.updateOrder('desc')
      }
      else if(way === 'asec' && (this.$store.state.sortOrder === 'desc' || this.$store.state.sortOrder === '')) {
        this.reviews = reviews.sort((a, b) => parseFloat(a.score) - parseFloat(b.score))
        this.isDesc = false
        this.isAsec = true
        this.updateOrder('asec')
      }
    },
    normalizeOrder() {
      this.reviews = [...this.hotelReviews]
      console.log(this.reviews, [...this.hotelReviews]);
      this.updateOrder('')
      this.isAsec = false
      this.isDesc = false
    },
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
    sortOrder: {
      get() {return this.$store.state.sortOrder},
      set(currentOrder) {if(currentOrder === '') this.reviews = [...this.hotelReviews]}
    },
  }
}