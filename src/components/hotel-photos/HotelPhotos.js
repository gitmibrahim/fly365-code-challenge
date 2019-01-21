const HotelPhotos = {
  props: ['pictures', 'hotelName'],
  data() {
    return {
      activeIndex: 0,
      loading: true
    }
  },
  template: '#hotel-photos',
  watch: {
    pictures() {
      this.activeIndex = 0
    }
  }
}