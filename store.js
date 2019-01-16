Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    nights: 1,
    selectedHotel: {},
    sortOrder: 'desc',
  },
  getters: {
    getNights(state) {return state.nights}
  },
  mutations: {
    updateNights (state, nights) {
      state.nights = nights
    },
    updateOrder (state, order) {
      state.sortOrder = order
    },
  }
})