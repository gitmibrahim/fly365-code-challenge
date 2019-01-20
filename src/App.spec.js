describe('App', () => {
  it('sets the correct default data', () => {
    expect(Array.isArray(App.hotels)).toBe(true)
    expect(typeof App.selectedHotel).toBe('object')
  })

  it('has a components object', () => {
    expect(typeof App.$options.components).toBe('object')

    const components = Object.keys(App.$options.components)

    expect(components.length).toBe(2)
    expect(components.includes('hotel-card')).toBe(true)
    expect(components.includes('hotel-details')).toBe(true)
  })

  it('has a created hook', () => {
    expect(typeof App.$options.created[0]).toBe('function')
  })

  it('has a computed object', () => {
    expect(typeof App.$options.computed).toBe('object')
  })


})