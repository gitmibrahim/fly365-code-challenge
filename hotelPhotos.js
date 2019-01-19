const hotelPhotos = {
  props: ['pictures', 'hotelName'],
  data() {
    return {
      activeIndex: 0,
      loading: true
    }
  },
  template: '#hotel-photos',
}