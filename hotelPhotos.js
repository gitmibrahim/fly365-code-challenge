const hotelPhotos = {
  props: ['pictures', 'hotelName'],
  data() {
    return {
      activeIndex: 0,
    }
  },
  template: '#hotel-photos',
  methods: {
    togglePicture(index) {
      this.activeIndex = index
    }
  },
  computed: {
    // selectedPic() {
    //   if(this.pictures.length > 0) {
    //     this.pictures.map(p => p.selected = false)
    //     this.pictures[this.activeIndex].selected = true
    //     return this.pictures[this.activeIndex].photo
    //   }
    // }
  }
}