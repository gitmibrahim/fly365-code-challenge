Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    nights: 1,
    selectedHotel: {},
    sortOrder: '',
    isAsec: false,
    isDesc: false
  },
  mutations: {
    updateNights (state, nights) {
      state.nights = nights
    },
    updateOrder (state, order) {
      state.sortOrder = order
    },
    updateIsAsec (state) {
      state.isDesc = false
      state.isAsec = !state.isAsec
    },
    updateIsDesc (state) {
      state.isAsec = false
      state.isDesc = !state.isDesc
    },
  }
})