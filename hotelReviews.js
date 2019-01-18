const hotelReviews = {
  props: ['reviews'],
  data() {
    return {
      index: 0,
      selectedSlice: 0
    }
  },
  template: '#hotel-reviews',
  watch: {
    reviews() {
      this.index = this.selectedSlice = 0
    }
  },
  methods: {
    updateOrder(order) {
      this.$store.commit('updateOrder', order)
    },
    updateIsAsec() {this.$store.commit('updateIsAsec')},
    updateIsDesc() {this.$store.commit('updateIsDesc')},
    navigateReviews(i) {
      this.index = i * 3
      this.selectedSlice = i
    } 

  },
  computed: {
    isAsec: {
      get() {return this.$store.getters.isAsec},
    },
    isDesc: {
      get() {return this.$store.getters.isDesc},
    },
    internalReviews() {
      if (this.isAsec) {
        this.updateOrder('asec')
        return [...this.reviews].sort((a, b) => parseFloat(a.score) - parseFloat(b.score))
      } 
      if (this.isDesc) {
        this.updateOrder('desc')
        return [...this.reviews].sort((a, b) => parseFloat(b.score) - parseFloat(a.score)) 
      }
      if (!this.isAsec && !this.isDesc) {
        this.updateOrder('')
        return [...this.reviews]
      }
    },
    slicedReviews() {return [...this.internalReviews].slice(this.index, this.index + 3)},
    slices() {return Array(Math.ceil(this.internalReviews.length / 3)).fill().map((_, i) => i)},
  }
}