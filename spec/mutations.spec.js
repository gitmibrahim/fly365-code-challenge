//mutations
const updateNights = (state, nights) => {
  state.nights = nights
}

const updateOrder = (state, order) => {
  state.sortOrder = order
}

const updateIsAsec = (state) => {
  state.isDesc = false
  state.isAsec = !state.isAsec
}

const updateIsDesc = (state) => {
  state.isAsec = false
  state.isDesc = !state.isDesc
}

describe('mutations', () => {
  const state = {
    nights: 1,
    selectedHotel: {},
    sortOrder: '',
    isAsec: false,
    isDesc: false
  }
  it('updateNights', () => {
    updateNights(state, 1)
    expect(state.nights).toEqual(1)
  })
  
  it('updateOrder', () => {
    updateOrder(state, 's')
    expect(state.sortOrder).toBe('s')
  })
  
  it('updateIsAsec', () => {
    updateIsAsec(state)
    expect(state.isAsec).toBe(true)
    expect(state.isDesc).toBe(false)
  })
  
  it('updateIsDesc', () => {
    updateIsDesc(state)
    expect(state.isAsec).toBe(false)
    expect(state.isDesc).toBe(true)
  })
})