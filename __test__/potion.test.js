const Potion = require('../lib/potion')

test('creates a health potion object', () => {
    const potion = new Potion('health')
  
    expect(potion.name).toBe('health')
    expect(potion.value).toEqual(expect.any(Number))
  })